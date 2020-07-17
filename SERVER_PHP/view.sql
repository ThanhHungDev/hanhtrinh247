CREATE OR REPLACE VIEW post_new AS
    SELECT id,
        title,
        slug,
        excerpt,
        REGEXP_REPLACE(content, '(<[^>]+>)|([\\t\\n\\r])', '') AS "content",
        thumbnail,
        image_resize,
        category_type_id,
        post.like,
        VIEW,
        site_name,
        image_seo,
        keyword_seo,
        description_seo,
        updated_at,
        created_at
FROM post
WHERE publish = TRUE
ORDER BY created_at DESC
LIMIT 10