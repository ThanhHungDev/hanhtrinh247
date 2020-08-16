

-- tạo cột tsvector  
ALTER TABLE theme ADD COLUMN search_tsv tsvector;

-- tạo cột tsvector  
ALTER TABLE theme ADD COLUMN search_doc text;


CREATE OR REPLACE FUNCTION search_theme_tsv_trigger_func()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN 
	SELECT 
	setweight(to_tsvector(coalesce(vn_unaccent(add_space_character(NEW.title)))), 'A') ||
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(
			concat( 
				NEW.author, ' ', 
				NEW.excerpt, ' ', 
				regexp_replace(NEW.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' '
			)
		)
	))), 'B') ||
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(string_agg(tag_theme.name::text, ','::text))
	))), 'C') || 
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(string_agg(tag_theme.excerpt::text, ','::text))
	))), 'D')
    , 
	coalesce(NEW.title) ||
	coalesce(
        concat( 
				NEW.author, ' ', 
				NEW.excerpt, ' ', 
				regexp_replace(NEW.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' '
			)
    ) ||
	coalesce(string_agg(tag_theme.name::text, ','::text)) || 
	coalesce(string_agg(tag_theme.excerpt::text, ','::text))
    INTO NEW.search_tsv, NEW.search_doc
    FROM  tag_theme JOIN tag_theme_active 
	on (tag_theme.id = tag_theme_active.tag_theme_id)
    WHERE tag_theme_active.theme_id = NEW.id;

    RETURN NEW;
END $$;

-- -- cột query đc cập nhật khi có triger sau 
-- -- Oke, Trigger cần viết cho bảng NEWS sẽ như sau:

-- CREATE OR REPLACE FUNCTION search_theme_tsv_trigger_func()
-- RETURNS TRIGGER LANGUAGE plpgsql AS $$
-- BEGIN NEW.search_tsv =
-- 	setweight(to_tsvector(coalesce(vn_unaccent(NEW.title))), 'A') ||
-- 	setweight(to_tsvector(coalesce(vn_unaccent(NEW.excerpt))), 'B') ||
-- 	setweight(to_tsvector(coalesce(vn_unaccent(NEW.content))), 'D');
-- RETURN NEW;
-- END $$;

CREATE TRIGGER search_theme_tsv_trigger BEFORE INSERT OR UPDATE
OF title, author, excerpt, content ON theme FOR EACH ROW
EXECUTE PROCEDURE search_theme_tsv_trigger_func();

-- Để FTS được nhanh thì ta cần phải đánh Index cho Column chứa tsvector của Document, 
-- như ở trên của mình chính là Column news_tsv, trong PostgreSQL có 2 công nghệ là GIN và GIST,
-- GIN Index chậm nhưng cho tốc độ tìm kiếm nhanh, 
-- GIST thì ngược lại. 
-- Ở đây mình sử dụng GIN. Câu lệnh là

CREATE INDEX search_theme_idx ON theme USING GIN(search_tsv);

SELECT id, title from theme
WHERE search_tsv @@ to_tsquery('mau|hang'); 


-- to_tsvector('japanese', 'PostgreSQLで日本語のテキスト検索ができます。');


-- update theme set search_tsv =
-- 	setweight(to_tsvector(coalesce(vn_unaccent(theme.title))), 'A') ||
-- 	setweight(to_tsvector(coalesce(vn_unaccent(theme.excerpt))), 'B') ||
-- 	setweight(to_tsvector(coalesce(vn_unaccent(theme.content))), 'D')

-- CREATE OR REPLACE FUNCTION add_space_character(text)
--   RETURNS text AS
-- $func$
-- SELECT trim(regexp_replace($1, '(.{1,2})', E'\\1 ', 'g')); --- {1,2} có thể có 1-2 kí tự
-- $func$ LANGUAGE sql IMMUTABLE;



-- select add_space_character('検索ウェブサイトテンプレート.....');