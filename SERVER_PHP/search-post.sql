

-- tạo cột tsvector  
ALTER TABLE post ADD COLUMN search_tsv tsvector;

-- tạo cột tsvector  
ALTER TABLE post ADD COLUMN search_doc text;


CREATE OR REPLACE FUNCTION search_post_tsv_trigger_func()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN 
	SELECT 
	setweight(to_tsvector(coalesce(vn_unaccent(add_space_character(NEW.title)))), 'A') ||
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(
			concat( 
				NEW.excerpt, ' ', 
				regexp_replace(NEW.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' '
			)
		)
	))), 'B') ||
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(string_agg(tag.name::text, ','::text))
	))), 'C') || 
	setweight(to_tsvector(coalesce(vn_unaccent(
		add_space_character(string_agg(tag.excerpt::text, ','::text))
	))), 'D')
    , 
	coalesce(NEW.title) ||
	coalesce(
        concat( 
				NEW.excerpt, ' ', 
				regexp_replace(NEW.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' '
			)
    ) ||
	coalesce(string_agg(tag.name::text, ','::text)) || 
	coalesce(string_agg(tag.excerpt::text, ','::text))
    INTO NEW.search_tsv, NEW.search_doc
    FROM  tag JOIN post_tag_active 
	on (tag.id = post_tag_active.tag_id)
    WHERE post_tag_active.post_id = NEW.id;

    RETURN NEW;
END $$;

CREATE TRIGGER search_post_tsv_trigger BEFORE INSERT OR UPDATE
OF title, excerpt, content ON post FOR EACH ROW
EXECUTE PROCEDURE search_post_tsv_trigger_func();

CREATE INDEX search_post_idx ON post USING GIN(search_tsv);

SELECT id, title from post
WHERE search_tsv @@ to_tsquery('mau|hang'); 
