

CREATE OR REPLACE FUNCTION add_space_character(text)
  RETURNS text AS
$func$
SELECT trim(regexp_replace($1, '(.{1,2})', E'\\1 ', 'g')); --- {1,2} có thể có 1-2 kí tự
-- SELECT trim(regexp_replace($1, '(.)', E'\\1 ', 'g'));
$func$ LANGUAGE sql IMMUTABLE;


DROP VIEW IF EXISTS public.view_search_theme;

CREATE OR REPLACE VIEW public.view_search_theme AS
 
SELECT 
theme.id,
theme.slug,
theme.created_at,
theme.title, 
theme.author,
theme.background,
theme.excerpt,
regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g') AS "catalogue",
string_agg(tag_theme.name::text, ','::text) AS tag_name,
string_agg(tag_theme.excerpt::text, ','::text) AS tag_excerpt,
concat( 
    theme.title , ' ',
    theme.author, ' ', 
    theme.excerpt, ' ', 
    regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' ',
    string_agg(tag_theme.name::text, ','::text), ' ',
    string_agg(tag_theme.excerpt::text, ','::text)
) as "search_document",

(
    setweight(
        to_tsvector(
            coalesce(
                vn_unaccent(
                    add_space_character(theme.title)
                )
            )
        ), 'A'
    ) ||
    setweight(
        to_tsvector(
            coalesce(
                vn_unaccent(
                    add_space_character(
                        concat( 
                            theme.author, ' ', 
                            theme.excerpt, ' ', 
                            regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])', ' ','g'), ' '
                        )
                    )
                )
            )
        ), 'B'
    ) ||
    setweight(
        to_tsvector(
            coalesce(
                vn_unaccent(
                    add_space_character(
                        string_agg(tag_theme.name::text, ','::text)
                    )
                )
            )
        ), 'C'
    ) ||
    setweight(
        to_tsvector(
            coalesce(
                vn_unaccent(
                    add_space_character(
                        string_agg(tag_theme.excerpt::text, ','::text)
                    )
                )
            )
        ), 'D'
    )
) as "search"
	
FROM 
theme 
LEFT JOIN 
tag_theme_active on ( theme.id = tag_theme_active.theme_id )
LEFT JOIN 
tag_theme on ( tag_theme_active.tag_theme_id = tag_theme.id )
GROUP BY 
theme.id;



