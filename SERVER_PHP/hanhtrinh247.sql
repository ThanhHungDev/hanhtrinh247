--
-- PostgreSQL database dump hungtt
--

-- Dumped from database version 10.12
-- Dumped by pg_dump version 10.12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: add_space_character(text); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.add_space_character(text) RETURNS text
    LANGUAGE sql IMMUTABLE
    AS $_$
SELECT trim(regexp_replace($1, '(.{1,2})', E'\\1 ', 'g')); --- {1,2} có thể có 1-2 kí tự
-- SELECT trim(regexp_replace($1, '(.)', E'\\1 ', 'g'));
$_$;


ALTER FUNCTION public.add_space_character(text) OWNER TO postgres;

--
-- Name: search_theme_tsv_trigger_func(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.search_theme_tsv_trigger_func() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN NEW.search_tsv =
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.title))), 'A') ||
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.excerpt))), 'B') ||
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.content))), 'D');
RETURN NEW;
END $$;


ALTER FUNCTION public.search_theme_tsv_trigger_func() OWNER TO postgres;

--
-- Name: vn_unaccent(text); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.vn_unaccent(text) RETURNS text
    LANGUAGE sql IMMUTABLE
    AS $_$
SELECT lower(translate($1,
'áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ¹²³ÀÁẢẠÂẤẦẨẬẪÃÄÅÆàáảạâấầẩẫậãäåæĀāĂẮẰẲẴẶăắằẳẵặĄąÇçĆćĈĉĊċČčĎďĐđÈÉẸÊẾỀỄỆËèéẹêềếễệëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨÌÍỈỊÎÏìíỉịîïĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓỎỌÔỐỒỔỖỘỐỒỔỖỘƠỚỜỞỠỢÕÖòóỏọôốồổỗộơớờỡợởõöŌōŎŏŐőŒœØøŔŕŖŗŘřßŚśŜŝŞşŠšŢţŤťŦŧÙÚỦỤƯỪỨỬỮỰÛÜùúủụûưứừửữựüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽžёЁ',
'aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY123AAAAAAAAAAAAAAaaaaaaaaaaaaaaAaAAAAAAaaaaaaAaCcCcCcCcCcDdDdEEEEEEEEEeeeeeeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIIIIiiiiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOOOOOOOOOOOOOOOOOOooooooooooooooooooOoOoOoEeOoRrRrRrSSsSsSsSsTtTtTtUUUUUUUUUUUUuuuuuuuuuuuuUuUuUuUuUuUuWwYyyYyYZzZzZzеЕ'));
$_$;


ALTER FUNCTION public.vn_unaccent(text) OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.failed_jobs OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.failed_jobs_id_seq OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: option; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.option (
    id bigint NOT NULL,
    key character varying(150) NOT NULL,
    type integer DEFAULT 1 NOT NULL,
    value_text text,
    value_html text,
    language character varying(10) DEFAULT 'vi'::character varying NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.option OWNER TO postgres;

--
-- Name: option_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.option_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.option_id_seq OWNER TO postgres;

--
-- Name: option_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.option_id_seq OWNED BY public.option.id;


--
-- Name: post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post (
    id bigint NOT NULL,
    topic_id integer NOT NULL,
    rating_id integer,
    title character varying(150),
    slug character varying(150),
    excerpt character varying(255),
    catalogue text,
    content text,
    background character varying(510),
    thumbnail character varying(510),
    "like" integer DEFAULT 1 NOT NULL,
    view integer DEFAULT 1 NOT NULL,
    rate_value double precision DEFAULT '3.5'::double precision NOT NULL,
    public integer DEFAULT 1 NOT NULL,
    site_name character varying(150),
    image_seo character varying(510),
    keyword_seo character varying(255),
    description_seo character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.post OWNER TO postgres;

--
-- Name: post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_id_seq OWNER TO postgres;

--
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;


--
-- Name: post_tag_active; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_tag_active (
    id bigint NOT NULL,
    post_id bigint,
    tag_id bigint,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.post_tag_active OWNER TO postgres;

--
-- Name: post_tag_active_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_tag_active_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_tag_active_id_seq OWNER TO postgres;

--
-- Name: post_tag_active_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_tag_active_id_seq OWNED BY public.post_tag_active.id;


--
-- Name: rating; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rating (
    id integer NOT NULL,
    username character varying(40),
    avatar character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.rating OWNER TO postgres;

--
-- Name: rating_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_id_seq OWNER TO postgres;

--
-- Name: rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rating_id_seq OWNED BY public.rating.id;


--
-- Name: tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tag (
    id bigint NOT NULL,
    name character varying(255),
    slug character varying(255),
    icon character varying(255),
    excerpt character varying(255),
    content text,
    catalogue text,
    background character varying(255),
    thumbnail character varying(255),
    site_name character varying(255),
    image_seo character varying(255),
    keyword_seo character varying(255),
    description_seo character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.tag OWNER TO postgres;

--
-- Name: tag_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_id_seq OWNER TO postgres;

--
-- Name: tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tag_id_seq OWNED BY public.tag.id;


--
-- Name: tag_theme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tag_theme (
    id bigint NOT NULL,
    name character varying(255),
    slug character varying(255),
    icon character varying(255),
    excerpt character varying(255),
    content text,
    catalogue text,
    background character varying(255),
    thumbnail character varying(255),
    site_name character varying(255),
    image_seo character varying(255),
    keyword_seo character varying(255),
    description_seo character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.tag_theme OWNER TO postgres;

--
-- Name: tag_theme_active; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tag_theme_active (
    id bigint NOT NULL,
    theme_id bigint,
    tag_theme_id bigint,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.tag_theme_active OWNER TO postgres;

--
-- Name: tag_theme_active_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tag_theme_active_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_theme_active_id_seq OWNER TO postgres;

--
-- Name: tag_theme_active_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tag_theme_active_id_seq OWNED BY public.tag_theme_active.id;


--
-- Name: tag_theme_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tag_theme_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_theme_id_seq OWNER TO postgres;

--
-- Name: tag_theme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tag_theme_id_seq OWNED BY public.tag_theme.id;


--
-- Name: theme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.theme (
    id bigint NOT NULL,
    title character varying(150),
    slug character varying(150),
    author character varying(255),
    url character varying(255),
    "like" integer DEFAULT 1 NOT NULL,
    view integer DEFAULT 1 NOT NULL,
    excerpt character varying(255),
    description text,
    content text,
    catalogue text,
    background character varying(510),
    image_laptop character varying(510),
    image_tablet character varying(510),
    image_mobile character varying(510),
    site_name character varying(510),
    image_seo character varying(255),
    keyword_seo character varying(510),
    description_seo character varying(510),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    search_tsv tsvector
);


ALTER TABLE public.theme OWNER TO postgres;

--
-- Name: theme_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.theme_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.theme_id_seq OWNER TO postgres;

--
-- Name: theme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.theme_id_seq OWNED BY public.theme.id;


--
-- Name: topic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topic (
    id integer NOT NULL,
    name character varying(255),
    slug character varying(255),
    excerpt character varying(255),
    content text,
    catalogue text,
    background character varying(255),
    thumbnail character varying(255),
    site_name character varying(255),
    image_seo character varying(255),
    keyword_seo character varying(255),
    description_seo character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.topic OWNER TO postgres;

--
-- Name: topic_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.topic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.topic_id_seq OWNER TO postgres;

--
-- Name: topic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.topic_id_seq OWNED BY public.topic.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    avatar character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: view_search_theme; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.view_search_theme AS
SELECT
    NULL::bigint AS id,
    NULL::character varying(150) AS slug,
    NULL::timestamp(0) without time zone AS created_at,
    NULL::character varying(150) AS title,
    NULL::character varying(255) AS author,
    NULL::character varying(510) AS background,
    NULL::character varying(255) AS excerpt,
    NULL::text AS catalogue,
    NULL::text AS tag_name,
    NULL::text AS tag_excerpt,
    NULL::text AS search_document,
    NULL::tsvector AS search;


ALTER TABLE public.view_search_theme OWNER TO postgres;

--
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: option id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.option ALTER COLUMN id SET DEFAULT nextval('public.option_id_seq'::regclass);


--
-- Name: post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);


--
-- Name: post_tag_active id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tag_active ALTER COLUMN id SET DEFAULT nextval('public.post_tag_active_id_seq'::regclass);


--
-- Name: rating id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating ALTER COLUMN id SET DEFAULT nextval('public.rating_id_seq'::regclass);


--
-- Name: tag id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag ALTER COLUMN id SET DEFAULT nextval('public.tag_id_seq'::regclass);


--
-- Name: tag_theme id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_theme ALTER COLUMN id SET DEFAULT nextval('public.tag_theme_id_seq'::regclass);


--
-- Name: tag_theme_active id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_theme_active ALTER COLUMN id SET DEFAULT nextval('public.tag_theme_active_id_seq'::regclass);


--
-- Name: theme id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme ALTER COLUMN id SET DEFAULT nextval('public.theme_id_seq'::regclass);


--
-- Name: topic id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topic ALTER COLUMN id SET DEFAULT nextval('public.topic_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed_jobs (id, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, migration, batch) FROM stdin;
121	2014_10_12_000000_create_users_table	1
122	2019_08_19_000000_create_failed_jobs_table	1
123	2020_07_18_132900_create_post_table	1
124	2020_07_18_135350_create_topic_table	1
125	2020_07_18_141341_create_tag_table	1
126	2020_07_18_141409_create_post_tag_active_table	1
127	2020_07_18_142633_create_rating_table	1
128	2020_07_19_020349_create_theme_table	1
129	2020_07_27_065741_create_tag_theme_table	1
130	2020_07_27_065947_create_tag_theme_active_table	1
131	2020_08_01_020054_create_option_table	1
\.


--
-- Data for Name: option; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.option (id, key, type, value_text, value_html, language, created_at, updated_at) FROM stdin;
1	tag-theme-title-introduce	1	100以上の美しいウェブサイトインターフェースと常に更新	\N	vi	\N	\N
2	tag-theme-custommer-introduce	1	あなたは自分のやり方を完全に変えることができます	\N	vi	\N	\N
3	footer-title	1	チャットシステムでお客様を年中無休でサポート	\N	vi	\N	\N
4	footer-go-to-chat	1	クリックしてチャット	\N	vi	\N	\N
5	des-footer	1	経験豊富なスタッフのチームにより、ウェブサイトから問題を導き対処するだけでなく、 コンサルティングを行い、ビジネスと共に成長します。	\N	vi	\N	\N
6	text-link-consulting-web-design	1	コンサルティングウェブデザイン	\N	vi	\N	\N
7	text-link-advisory-system	1	技術サポート	\N	vi	\N	\N
8	text-link-submit-web-request	1	Webリクエストを送信	\N	vi	\N	\N
9	footer-menu-service	1	<p> <i class="hero-icon hero-google-ads"></i> <a href="/create-web-standard-seo">SEO標準Webデザイン</a> </p> <p> <i class="hero-icon hero-message-text-outline"></i> <a href="/create-web-chat-realtime">リアルタイムWebチャットの設計</a> </p> <p> <i class="hero-icon hero-human-male-child"></i> <a href="/create-web-recruit">採用されたウェブデザイン</a> </p> <p> <i class="hero-icon hero-newspaper-variant-outline"></i> <a href="/create-web-news">ニュースウェブデザイン</a> </p> <p> <i class="hero-icon hero-ballot-recount-outline"></i> <a href="/create-web-marketing-sale-online">販売ウェブデザイン</a> </p> <p> <i class="hero-icon hero-responsive"></i><a href="/create-web-responsive">モバイルレスポンシブウェブデザイン</a> </p>	\N	vi	\N	\N
\.


--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post (id, topic_id, rating_id, title, slug, excerpt, catalogue, content, background, thumbnail, "like", view, rate_value, public, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	1	\N	mẫu ưeb thương mại diẹn tử chuyên nghiệp	mau-web-thuong-mai-dien-tu	mẫu ưeb site bán hàng	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp 	\N	\N	1	1	3.5	1	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
\.


--
-- Data for Name: post_tag_active; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post_tag_active (id, post_id, tag_id, created_at, updated_at) FROM stdin;
1	1	1	\N	\N
\.


--
-- Data for Name: rating; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rating (id, username, avatar, created_at, updated_at) FROM stdin;
1	thanh hùng	upload/images/avatar.jpg	2020-08-09 01:59:39	2020-08-09 01:59:39
\.


--
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag (id, name, slug, icon, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	thiết kế web bán đầm chuyên nghiệp	thiet-ke-web-ban-dam	<i class="hero-icon hero-icon hero-cart-plus"></i>	mẫu ưeb site bán hàng	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
2	chạy quảng cáo	chay-quang-cao	<i class="hero-icon hero-icon hero-cart-plus"></i>	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
\.


--
-- Data for Name: tag_theme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_theme (id, name, slug, icon, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
2	自分でウェブサイトをデザインする	mau-web-ban-dam	<i class="hero-icon hero-account-tie-outline"></i>	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
3	ウェブサイトのデザイン会社紹介	mau-web-ban-dam-2	<i class="hero-icon hero-icon hero-form-select"></i>	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
4	ウェブサイトニュースのデザイン	mau-web-ban-dam-23	<i class="hero-icon hero-newspaper-variant-multiple-outline"></i>	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
5	ウェブサイト旅行のデザイン	mau-web-ban-dam-33	<i class="hero-icon hero-airport"></i>	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39
1	ウェブサイトのeコマースのデザイン	mau-web-ban-hang	<i class="hero-icon hero-icon hero-cart-plus"></i>	mẫu ưeb site bán hàng	<p>Mẫu website thương mại điện tite thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>		/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg	/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-10 04:48:01
\.


--
-- Data for Name: tag_theme_active; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_theme_active (id, theme_id, tag_theme_id, created_at, updated_at) FROM stdin;
3	4	3	\N	\N
4	4	5	\N	\N
26	3	2	\N	\N
27	3	3	\N	\N
28	3	4	\N	\N
29	3	5	\N	\N
30	5	4	\N	\N
31	5	5	\N	\N
32	5	1	\N	\N
33	2	2	\N	\N
34	2	4	\N	\N
\.


--
-- Data for Name: theme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.theme (id, title, slug, author, url, "like", view, excerpt, description, content, catalogue, background, image_laptop, image_tablet, image_mobile, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at, search_tsv) FROM stdin;
5	Mẫu web Home Shop	mau-web-home-shop	Trương Thanh Hùng	http://hanhtrinh247.dev.com/theme/5	1	6	チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン	<p>theme đ&acirc;ug ti&ecirc;n test thử</p>	<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;n nghiệebsite thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>		/upload/images/theme/page-5-465x357.jpg	/upload/images/theme/page-5-465x357.jpg	/upload/images/theme/page-5-465x357.jpg	/upload/images/theme/page-5-465x357.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/avatar.jpg	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-12 05:25:36	'a':60,77,85 'anh':154 'b':55,70,80,95,120 'bach':167 'ban':135 'bo':48,170 'c':100,105,168,169,178,179,194,202,203,215 'can':136 'cap':267 'cay':198 'ch':106,174,189,248 'chi':148 'cho':302 'chon':182,193 'chuy':23 'cua':118,275,305 'cung':61,63,176,247 'd':195,222 'dan':217,294,301 'de':231,295 'dep':22 'dich':65,78,86,92,186 'dien':20,28,35,113,133,210,261,291 'dieu':235,240 'do':252 'don':107,163,244 'dong':53 'du':303 'dung':230 'duoc':37,212,234 'expro':309 'gian':108,164,268 'gian.d':245 'giao':209 'gioi':72 'h':57,59,74,76,82,84,97,122,152,190,219,269,278 'hap':216,293,300 'hay':99,199 'he':243 'hien':273 'hieu':282 'hoac':45,264 'hoach':127 'hoat':52 'home':3A 'hon':109 'hop':175 'hung':9B 'i':103 'ke':126,129,214,257 'kh':188,200,241 'khao':284 'khi':255 'kiem':185 'l':30,115,124,232,239,250,251,296 'lap':39 'loai':117 'loc':171 'lua':192 'm':184,233,253,276,281,306 'mai':19,27,112,132,260,290 'mau':1A,16,287 'minh':166 'moi':263 'mot':43,104,116,285 'mua':54 'n':24,47,56,81,90,96,102,121,125,162,208,225,236,265,297,304 'nam':311 'ng':33,58,75,83,98,146,191,196,201,223,242,266,270 'ng.khi':123 'nghieebsite':25 'nguoi':221,228 'nh':51,153,159,249,277,307 'nham':40 'nhieu':141 'nhu':62,144,177 'nhung':298 'phai':137 'pham':151,156 'phan':44 'phuc':41 'phuong':204 'qu':49,157 'qua':238 'san':150,155,172 'sau':94 'shop':4A 'so':286 'su':229 't':140,180,183,220,280 'tai':274,308 'th':32,145,173,224 'tham':283 'thanh':8B,88,160,206 'the':101 'thien':226 'thiet':38,128,213,256 'thieu':73 'thu':218 'thuc':205 'thuong':18,26,111,131,259,289 'tiet':149 'tin':34,147,197 'to':46,89,143,161,207 'tr':50,158 'trang':31 'truc':271 'trung':69 'truoc':254 'tu':21,29,36,67,114,134,262,292 'tuong':299 'tuyen':272 'ung':64 'v':91,165 'viec':68 'viet':310 'voi':227 'vu':42,66,79,87,93,187 'web':2A,130 'website':17,110,119,211,258,288 'x':139 'xem':138 'y':71,181,237,246,279 'yeu':142 'タン':6B,10B,12B,14B 'チュン':5B 'フン':15B 'フンtruong':7B 'フンチュン':11B,13B
6	建設	mau-web-cong-ty-trust-growth-page-6-465x357	Trương Thanh Hùng	http://hanhtrinh247.dev.com/theme/6	1	1	チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン	<p>theme đ&acirc;ug ti&ecirc;n test thử</p>	<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;n nghiệebsite thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>		/upload/images/theme/__thumbs/bg-doctor-recruit.png/bg-doctor-recruit__148x100.png	/upload/images/theme/page-6-465x357.jpg	/upload/images/theme/page-6-465x357.jpg	/upload/images/theme/page-6-465x357.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/theme/bg-doctor-recruit.png	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-13 00:28:56	'a':57,74,82 'anh':151 'b':52,67,77,92,117 'bach':164 'ban':132 'bo':45,167 'c':97,102,165,166,175,176,191,199,200,212 'can':133 'cap':264 'cay':195 'ch':103,171,186,245 'chi':145 'cho':299 'chon':179,190 'chuy':20 'cua':115,272,302 'cung':58,60,173,244 'd':192,219 'dan':214,291,298 'de':228,292 'dep':19 'dich':62,75,83,89,183 'dien':17,25,32,110,130,207,258,288 'dieu':232,237 'do':249 'don':104,160,241 'dong':50 'du':300 'dung':227 'duoc':34,209,231 'expro':306 'gian':105,161,265 'gian.d':242 'giao':206 'gioi':69 'h':54,56,71,73,79,81,94,119,149,187,216,266,275 'hap':213,290,297 'hay':96,196 'he':240 'hien':270 'hieu':279 'hoac':42,261 'hoach':124 'hoat':49 'hon':106 'hop':172 'hung':6B 'i':100 'ke':123,126,211,254 'kh':185,197,238 'khao':281 'khi':252 'kiem':182 'l':27,112,121,229,236,247,248,293 'lap':36 'loai':114 'loc':168 'lua':189 'm':181,230,250,273,278,303 'mai':16,24,109,129,257,287 'mau':13,284 'minh':163 'moi':260 'mot':40,101,113,282 'mua':51 'n':21,44,53,78,87,93,99,118,122,159,205,222,233,262,294,301 'nam':308 'ng':30,55,72,80,95,143,188,193,198,220,239,263,267 'ng.khi':120 'nghieebsite':22 'nguoi':218,225 'nh':48,150,156,246,274,304 'nham':37 'nhieu':138 'nhu':59,141,174 'nhung':295 'phai':134 'pham':148,153 'phan':41 'phuc':38 'phuong':201 'qu':46,154 'qua':235 'san':147,152,169 'sau':91 'so':283 'su':226 't':137,177,180,217,277 'tai':271,305 'th':29,142,170,221 'tham':280 'thanh':5B,85,157,203 'the':98 'thien':223 'thiet':35,125,210,253 'thieu':70 'thu':215 'thuc':202 'thuong':15,23,108,128,256,286 'tiet':146 'tin':31,144,194 'to':43,86,140,158,204 'tr':47,155 'trang':28 'truc':268 'trung':66 'truoc':251 'tu':18,26,33,64,111,131,259,289 'tuong':296 'tuyen':269 'ung':61 'v':88,162 'viec':65 'viet':307 'voi':224 'vu':39,63,76,84,90,184 'web':127 'website':14,107,116,208,255,285 'x':136 'xem':135 'y':68,178,234,243,276 'yeu':139 'タン':3B,7B,9B,11B 'チュン':2B 'フン':12B 'フンtruong':4B 'フンチュン':8B,10B '建設':1A
7	フローリング	mau-web-cong-ty-trust-growth-page-7-465x357	Trương Thanh Hùng	http://hanhtrinh247.dev.com/theme/7	1	1	チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン	theme đâug tiên test thử 	Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	/upload/images/theme/page-7-465x357.jpg	/upload/images/theme/page-7-465x357.jpg	/upload/images/theme/page-7-465x357.jpg	/upload/images/theme/page-7-465x357.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39	'an':251 'anh':127 'bach':138 'ban':48,67,78,99,111 'bay':60 'bo':42,140 'cac':139,147,164 'cach':85 'can':112 'cap':218 'cay':161 'chi':122 'chinh':201 'cho':249 'chon':149,157 'chuyen':20 'co':81,158,175 'cua':97,225,252 'cung':51,53,145,200 'dan':177,241,248 'dang':159 'de':188,242 'dep':19 'dich':55,65,70,75,152 'dien':17,24,30,92,109,170,213,238 'dieu':191,195 'do':204 'don':86,134,198 'dong':46 'du':250 'dung':181,187 'duoc':32,172,190 'expro':255 'gian':87,135,219 'gian.day':199 'giao':169 'gioi':61 'hang':49,63,68,79,155,220 'hang.khi':100 'hap':176,240,247 'hay':80,162,227 'he':197 'hien':223 'hieu':229 'hinh':126 'hoa':50,64,69 'hoac':40,216 'hoach':103 'hoat':45 'hon':88 'hop':144 'hung':6B 'hut':179 'ke':102,105,174,209 'khach':154 'khao':231 'khi':207 'khong':163,196 'kiem':151 'la':26,94,194,202 'lam':189 'lap':34 'len':101,243 'loai':96 'loc':141 'lua':156 'ly':203 'ma':205 'mai':16,23,91,108,212,237 'mau':13,234 'minh':137,226,253 'moi':215 'mot':38,84,95,232 'mua':47 'nam':257 'nang':217 'nay':192 'nghieebsite':21 'nguoi':180,185 'nham':35 'nhieu':116 'nhu':52,119,146 'nhung':244 'noi':83 'phai':113 'pham':125,129 'phan':39 'phuc':36 'phuong':165 'qua':43,130,193 'san':124,128,142 'sau':77 'so':233 'su':186 'tai':224,254 'tham':230 'than':182 'thanh':5B,72,132,167 'the':82 'thich':143 'thien':183 'thiet':33,104,173,208 'thieu':62 'thong':28,120 'thu':178 'thuc':166 'thuong':15,22,90,107,211,236 'tiet':123 'tim':150,228 'tin':29,121,160 'to':118 'toan':41,73,133,168 'trang':27 'trinh':44,131 'truc':221 'trung':59 'truoc':206 'tu':18,25,31,57,93,110,214,239 'tuong':246 'tuy':148 'tuyen':222 'ung':54 'va':74,136 'viec':58 'viet':256 'voi':184 'vu':37,56,66,71,76,153 'web':106 'website':14,89,98,171,210,235 'xem':114 'xet':115 'y':245 'yeu':117 'タン':3B,7B,9B,11B 'チュン':2B 'フローリング':1A 'フン':12B 'フンtruong':4B 'フンチュン':8B,10B
1	ホームショップ	mau-web-cong-ty-trust-growth	チュン　タン　フン	http://hanhtrinh247.dev.com/theme/1	1	18	チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン	theme đâug tiên test thử 	Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	/upload/images/theme/homeshop.png	/upload/images/theme/homeshop.png	/upload/images/theme/homeshop.png	/upload/images/theme/homeshop.png	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-11 07:16:06	'an':254 'anh':130 'bach':141 'ban':51,70,81,102,114 'bay':63 'bo':45,143 'cac':142,150,167 'cach':88 'can':115 'cap':221 'cay':164 'chi':125 'chinh':204 'cho':252 'chon':152,160 'chuyen':23 'co':84,161,178 'cua':100,228,255 'cung':54,56,148,203 'dan':180,244,251 'dang':162 'de':191,245 'dep':22 'dich':58,68,73,78,155 'dien':20,27,33,95,112,173,216,241 'dieu':194,198 'do':207 'don':89,137,201 'dong':49 'du':253 'dung':184,190 'duoc':35,175,193 'expro':258 'gian':90,138,222 'gian.day':202 'giao':172 'gioi':64 'hang':52,66,71,82,158,223 'hang.khi':103 'hap':179,243,250 'hay':83,165,230 'he':200 'hien':226 'hieu':232 'hinh':129 'hoa':53,67,72 'hoac':43,219 'hoach':106 'hoat':48 'hon':91 'hop':147 'hut':182 'ke':105,108,177,212 'khach':157 'khao':234 'khi':210 'khong':166,199 'kiem':154 'la':29,97,197,205 'lam':192 'lap':37 'len':104,246 'loai':99 'loc':144 'lua':159 'ly':206 'ma':208 'mai':19,26,94,111,215,240 'mau':16,237 'minh':140,229,256 'moi':218 'mot':41,87,98,235 'mua':50 'nam':260 'nang':220 'nay':195 'nghieebsite':24 'nguoi':183,188 'nham':38 'nhieu':119 'nhu':55,122,149 'nhung':247 'noi':86 'phai':116 'pham':128,132 'phan':42 'phuc':39 'phuong':168 'qua':46,133,196 'san':127,131,145 'sau':80 'so':236 'su':189 'tai':227,257 'tham':233 'than':185 'thanh':75,135,170 'the':85 'thich':146 'thien':186 'thiet':36,107,176,211 'thieu':65 'thong':31,123 'thu':181 'thuc':169 'thuong':18,25,93,110,214,239 'tiet':126 'tim':153,231 'tin':32,124,163 'to':121 'toan':44,76,136,171 'trang':30 'trinh':47,134 'truc':224 'trung':62 'truoc':209 'tu':21,28,34,60,96,113,217,242 'tuong':249 'tuy':151 'tuyen':225 'ung':57 'va':77,139 'viec':61 'viet':259 'voi':187 'vu':40,59,69,74,79,156 'web':109 'website':17,92,101,174,213,238 'xem':117 'xet':118 'y':248 'yeu':120 'タン':3B,6B,8B,10B,12B,14B 'チュン':2B,5B 'フン':4B,15B 'フンチュン':7B,9B,11B,13B 'ホームショップ':1A
8	ホテル	mau-web-cong-ty-trust-growth-page-8-465x357	Trương Thanh Hùng	http://hanhtrinh247.dev.com/theme/8	1	1	チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン	theme đâug tiên test thử 	Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	/upload/images/theme/page-8-465x357.jpg	/upload/images/theme/page-8-465x357.jpg	/upload/images/theme/page-8-465x357.jpg	/upload/images/theme/page-8-465x357.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39	'an':251 'anh':127 'bach':138 'ban':48,67,78,99,111 'bay':60 'bo':42,140 'cac':139,147,164 'cach':85 'can':112 'cap':218 'cay':161 'chi':122 'chinh':201 'cho':249 'chon':149,157 'chuyen':20 'co':81,158,175 'cua':97,225,252 'cung':51,53,145,200 'dan':177,241,248 'dang':159 'de':188,242 'dep':19 'dich':55,65,70,75,152 'dien':17,24,30,92,109,170,213,238 'dieu':191,195 'do':204 'don':86,134,198 'dong':46 'du':250 'dung':181,187 'duoc':32,172,190 'expro':255 'gian':87,135,219 'gian.day':199 'giao':169 'gioi':61 'hang':49,63,68,79,155,220 'hang.khi':100 'hap':176,240,247 'hay':80,162,227 'he':197 'hien':223 'hieu':229 'hinh':126 'hoa':50,64,69 'hoac':40,216 'hoach':103 'hoat':45 'hon':88 'hop':144 'hung':6B 'hut':179 'ke':102,105,174,209 'khach':154 'khao':231 'khi':207 'khong':163,196 'kiem':151 'la':26,94,194,202 'lam':189 'lap':34 'len':101,243 'loai':96 'loc':141 'lua':156 'ly':203 'ma':205 'mai':16,23,91,108,212,237 'mau':13,234 'minh':137,226,253 'moi':215 'mot':38,84,95,232 'mua':47 'nam':257 'nang':217 'nay':192 'nghieebsite':21 'nguoi':180,185 'nham':35 'nhieu':116 'nhu':52,119,146 'nhung':244 'noi':83 'phai':113 'pham':125,129 'phan':39 'phuc':36 'phuong':165 'qua':43,130,193 'san':124,128,142 'sau':77 'so':233 'su':186 'tai':224,254 'tham':230 'than':182 'thanh':5B,72,132,167 'the':82 'thich':143 'thien':183 'thiet':33,104,173,208 'thieu':62 'thong':28,120 'thu':178 'thuc':166 'thuong':15,22,90,107,211,236 'tiet':123 'tim':150,228 'tin':29,121,160 'to':118 'toan':41,73,133,168 'trang':27 'trinh':44,131 'truc':221 'trung':59 'truoc':206 'tu':18,25,31,57,93,110,214,239 'tuong':246 'tuy':148 'tuyen':222 'ung':54 'va':74,136 'viec':58 'viet':256 'voi':184 'vu':37,56,66,71,76,153 'web':106 'website':14,89,98,171,210,235 'xem':114 'xet':115 'y':245 'yeu':117 'タン':3B,7B,9B,11B 'チュン':2B 'フン':12B 'フンtruong':4B 'フンチュン':8B,10B 'ホテル':1A
9	構造2	mau-web-cong-ty-trust-growth-page-9-465x357	Trương Thanh Hùng	http://hanhtrinh247.dev.com/theme/9	1	1	チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン	theme đâug tiên test thử 	Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	/upload/images/theme/page-9-465x357.jpg	/upload/images/theme/page-9-465x357.jpg	/upload/images/theme/page-9-465x357.jpg	/upload/images/theme/page-3-465x357.jpg	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-09 01:59:39	'an':251 'anh':127 'bach':138 'ban':48,67,78,99,111 'bay':60 'bo':42,140 'cac':139,147,164 'cach':85 'can':112 'cap':218 'cay':161 'chi':122 'chinh':201 'cho':249 'chon':149,157 'chuyen':20 'co':81,158,175 'cua':97,225,252 'cung':51,53,145,200 'dan':177,241,248 'dang':159 'de':188,242 'dep':19 'dich':55,65,70,75,152 'dien':17,24,30,92,109,170,213,238 'dieu':191,195 'do':204 'don':86,134,198 'dong':46 'du':250 'dung':181,187 'duoc':32,172,190 'expro':255 'gian':87,135,219 'gian.day':199 'giao':169 'gioi':61 'hang':49,63,68,79,155,220 'hang.khi':100 'hap':176,240,247 'hay':80,162,227 'he':197 'hien':223 'hieu':229 'hinh':126 'hoa':50,64,69 'hoac':40,216 'hoach':103 'hoat':45 'hon':88 'hop':144 'hung':6B 'hut':179 'ke':102,105,174,209 'khach':154 'khao':231 'khi':207 'khong':163,196 'kiem':151 'la':26,94,194,202 'lam':189 'lap':34 'len':101,243 'loai':96 'loc':141 'lua':156 'ly':203 'ma':205 'mai':16,23,91,108,212,237 'mau':13,234 'minh':137,226,253 'moi':215 'mot':38,84,95,232 'mua':47 'nam':257 'nang':217 'nay':192 'nghieebsite':21 'nguoi':180,185 'nham':35 'nhieu':116 'nhu':52,119,146 'nhung':244 'noi':83 'phai':113 'pham':125,129 'phan':39 'phuc':36 'phuong':165 'qua':43,130,193 'san':124,128,142 'sau':77 'so':233 'su':186 'tai':224,254 'tham':230 'than':182 'thanh':5B,72,132,167 'the':82 'thich':143 'thien':183 'thiet':33,104,173,208 'thieu':62 'thong':28,120 'thu':178 'thuc':166 'thuong':15,22,90,107,211,236 'tiet':123 'tim':150,228 'tin':29,121,160 'to':118 'toan':41,73,133,168 'trang':27 'trinh':44,131 'truc':221 'trung':59 'truoc':206 'tu':18,25,31,57,93,110,214,239 'tuong':246 'tuy':148 'tuyen':222 'ung':54 'va':74,136 'viec':58 'viet':256 'voi':184 'vu':37,56,66,71,76,153 'web':106 'website':14,89,98,171,210,235 'xem':114 'xet':115 'y':245 'yeu':117 'タン':3B,7B,9B,11B 'チュン':2B 'フン':12B 'フンtruong':4B 'フンチュン':8B,10B '構造2':1A
2	Mẫu web Ebudezain 受入可能人数は仕事で同時に受け入れることができる人数です。	mau-web-ebudezain-受入可能人数ha仕事de同時ni受ke入rerukotogadekiru人数desu.	チュン　タン　フン eb	http://hanhtrinh247.dev.com	1	12	チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン	<p>theme đ&acirc;ug ti&ecirc;n test thử</p>	<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;n nghiệebsite thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>		/upload/images/theme/__thumbs/doctor-recruit.png/doctor-recruit__34x100.png	/upload/images/theme/myservice.png	/upload/images/theme/myservice.png	/upload/images/theme/myservice.png	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/theme/doctor-recruit.png	mẫu web	mẫu hậu 3	2020-08-09 01:59:39	2020-08-13 06:54:19	'a':63,80,88 'anh':157 'b':58,73,83,98,123 'bach':170 'ban':138 'bo':51,173 'c':103,108,171,172,181,182,197,205,206,218 'can':139 'cap':270 'cay':201 'ch':109,177,192,251 'chi':151 'cho':305 'chon':185,196 'chuy':26 'cua':121,278,308 'cung':64,66,179,250 'd':198,225 'dan':220,297,304 'de':234,298 'dep':25 'dich':68,81,89,95,189 'dien':23,31,38,116,136,213,264,294 'dieu':238,243 'do':255 'don':110,166,247 'dong':56 'du':306 'dung':233 'duoc':40,215,237 'ebudezain':3A 'expro':312 'gian':111,167,271 'gian.d':248 'giao':212 'gioi':75 'h':60,62,77,79,85,87,100,125,155,193,222,272,281 'hap':219,296,303 'hay':102,202 'he':246 'hien':276 'hieu':285 'hoac':48,267 'hoach':130 'hoat':55 'hon':112 'hop':178 'i':106 'ke':129,132,217,260 'kh':191,203,244 'khao':287 'khi':258 'kiem':188 'l':33,118,127,235,242,253,254,299 'lap':42 'loai':120 'loc':174 'lua':195 'm':187,236,256,279,284,309 'mai':22,30,115,135,263,293 'mau':1A,19,290 'minh':169 'moi':266 'mot':46,107,119,288 'mua':57 'n':27,50,59,84,93,99,105,124,128,165,211,228,239,268,300,307 'nam':314 'ng':36,61,78,86,101,149,194,199,204,226,245,269,273 'ng.khi':126 'nghieebsite':28 'nguoi':224,231 'nh':54,156,162,252,280,310 'nham':43 'nhieu':144 'nhu':65,147,180 'nhung':301 'phai':140 'pham':154,159 'phan':47 'phuc':44 'phuong':207 'qu':52,160 'qua':241 'san':153,158,175 'sau':97 'so':289 'su':232 't':143,183,186,223,283 'tai':277,311 'th':35,148,176,227 'tham':286 'thanh':91,163,209 'the':104 'thien':229 'thiet':41,131,216,259 'thieu':76 'thu':221 'thuc':208 'thuong':21,29,114,134,262,292 'tiet':152 'tin':37,150,200 'to':49,92,146,164,210 'tr':53,161 'trang':34 'truc':274 'trung':72 'truoc':257 'tu':24,32,39,70,117,137,265,295 'tuong':302 'tuyen':275 'ung':67 'v':94,168 'viec':71 'viet':313 'voi':230 'vu':45,69,82,90,96,190 'web':2A,133 'website':20,113,122,214,261,291 'x':142 'xem':141 'y':74,184,240,249,282 'yeu':145 'タン':6B,9B,11B,13B,15B,17B 'チュン':5B,8B 'フン':7B,18B 'フンチュン':10B,12B,14B,16B '受入可能人数は仕事で同時に受け入れることができる人数です':4A
4	trust-growth	mau-web-cong-ty-trust-growth-doctor-recruit	チュン　タン　フン	http://hanhtrinh247.dev.com/theme/4	1	5	チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン	<p>theme đ&acirc;ug ti&ecirc;n test thử</p>	<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;n nghiệebsite thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>		/upload/images/theme/doctor-recruit.png	/upload/images/theme/doctor-recruit.png	/upload/images/theme/doctor-recruit.png	/upload/images/theme/doctor-recruit.png	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/84616689_995687210799815_6072824052756512768_o.jpg	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-13 08:16:15	'a':62,79,87 'anh':156 'b':57,72,82,97,122 'bach':169 'ban':137 'bo':50,172 'c':102,107,170,171,180,181,196,204,205,217 'can':138 'cap':269 'cay':200 'ch':108,176,191,250 'chi':150 'cho':304 'chon':184,195 'chuy':25 'cua':120,277,307 'cung':63,65,178,249 'd':197,224 'dan':219,296,303 'de':233,297 'dep':24 'dich':67,80,88,94,188 'dien':22,30,37,115,135,212,263,293 'dieu':237,242 'do':254 'don':109,165,246 'dong':55 'du':305 'dung':232 'duoc':39,214,236 'expro':311 'gian':110,166,270 'gian.d':247 'giao':211 'gioi':74 'growth':3A 'h':59,61,76,78,84,86,99,124,154,192,221,271,280 'hap':218,295,302 'hay':101,201 'he':245 'hien':275 'hieu':284 'hoac':47,266 'hoach':129 'hoat':54 'hon':111 'hop':177 'i':105 'ke':128,131,216,259 'kh':190,202,243 'khao':286 'khi':257 'kiem':187 'l':32,117,126,234,241,252,253,298 'lap':41 'loai':119 'loc':173 'lua':194 'm':186,235,255,278,283,308 'mai':21,29,114,134,262,292 'mau':18,289 'minh':168 'moi':265 'mot':45,106,118,287 'mua':56 'n':26,49,58,83,92,98,104,123,127,164,210,227,238,267,299,306 'nam':313 'ng':35,60,77,85,100,148,193,198,203,225,244,268,272 'ng.khi':125 'nghieebsite':27 'nguoi':223,230 'nh':53,155,161,251,279,309 'nham':42 'nhieu':143 'nhu':64,146,179 'nhung':300 'phai':139 'pham':153,158 'phan':46 'phuc':43 'phuong':206 'qu':51,159 'qua':240 'san':152,157,174 'sau':96 'so':288 'su':231 't':142,182,185,222,282 'tai':276,310 'th':34,147,175,226 'tham':285 'thanh':90,162,208 'the':103 'thien':228 'thiet':40,130,215,258 'thieu':75 'thu':220 'thuc':207 'thuong':20,28,113,133,261,291 'tiet':151 'tin':36,149,199 'to':48,91,145,163,209 'tr':52,160 'trang':33 'truc':273 'trung':71 'truoc':256 'trust':2A 'trust-growth':1A 'tu':23,31,38,69,116,136,264,294 'tuong':301 'tuyen':274 'ung':66 'v':93,167 'viec':70 'viet':312 'voi':229 'vu':44,68,81,89,95,189 'web':132 'website':19,112,121,213,260,290 'x':141 'xem':140 'y':73,183,239,248,281 'yeu':144 'タン':5B,8B,10B,12B,14B,16B 'チュン':4B,7B 'フン':6B,17B 'フンチュン':9B,11B,13B,15B
3	mẫu web tìm việc làm kandc của nhật banr	mau-web-tim-viec-lam-kandc-cua-nhat-banr	チュン　タン　フン	http://hanhtrinh247.dev.com/theme/3	1	52	チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンMẫu web bán hàng home Shop chuyên nghiệp giá rẻ\r\nMẫu web bán hàng chuyên nghiệp HomeShop\r\nWebsite được thiết kế theo chuẩn HTML5, CSS3\r\nGiao diện tương thí	<h1>Mẫu web b&aacute;n h&agrave;ng home Shop chuy&ecirc;n nghiệp gi&aacute; rẻ</h1>\r\n\r\n<ul>\r\n\t<li>Mẫu web b&aacute;n h&agrave;ng chuy&ecirc;n nghiệp HomeShop</li>\r\n\t<li>Website được thiết kế theo chuẩn HTML5, CSS3</li>\r\n\t<li>Giao diện tương th&iacute;ch với tất cả tr&igrave;nh duyệt, di động (Điện thoại di động, M&aacute;y t&iacute;nh bảng, Laptop&hellip;)</li>\r\n\t<li>T&iacute;ch hợp nhiều chức năng chuy&ecirc;n nghiệp</li>\r\n\t<li>Lập tr&igrave;nh theo ng&ocirc;n ngữ PHP &amp; MySQL với độ bảo mật cao</li>\r\n\t<li>Quản l&yacute; c&aacute;c chức năng theo dạng module</li>\r\n\t<li>T&iacute;ch hợp chức năng b&aacute;n h&agrave;ng, đặt h&agrave;ng chuy&ecirc;n nghiệp</li>\r\n\t<li>Tối ưu với c&aacute;c c&ocirc;ng cụ t&igrave;m kiếm</li>\r\n\t<li>Website được thiết kế Chuẩn SEO&nbsp;Google</li>\r\n</ul>	<h2 id="mau-website-ban-hang-chuyen-nghiep-home-shop">Mẫu website b&aacute;n h&agrave;ng chuy&ecirc;n nghiệp Home Shop</h2>\r\n\r\n<p><a href="https://thietkewebnhanh247.com/mau-web-ban-hang-home-shop-chuyen-nghiep-gia-re/">Mẫu web b&aacute;n h&agrave;ng chuy&ecirc;n nghiệp HomeShop</a>&nbsp;Sử dụng c&ocirc;ng nghệ mới nhất để &nbsp;<a href="https://thietkewebnhanh247.com/">thiết kế website</a>: C&ocirc;ng nghệ HTML5, CSS3 lập tr&igrave;nh hiệu ứng giao diện người d&ugrave;ng.<br />\r\n<a href="https://thietkewebnhanh247.com/thiet-ke-web-ban-hang-chuyen-nghiep/">Thiết kế website b&aacute;n h&agrave;ng chuy&ecirc;n nghiệp</a>&nbsp; đẹp đa chức năng giao diện hiện đại Box Shop tương th&iacute;ch với tất cả c&aacute;c thiết bị di động, c&aacute;c tr&igrave;nh duyệt phổ biến như IE, Chorme, Safari, FireFox, Coccoc&hellip;</p>\r\n\r\n<p>Giao diện&nbsp;<a href="https://thietkewebnhanh247.com/mau-website/website-ban-hang/">website b&aacute;n h&agrave;ng</a>&nbsp;HomeShop tối ưu SEO &ndash; th&acirc;n thiện với bộ m&aacute;y t&igrave;m kiếm của Google</p>\r\n\r\n<p><strong>Giao diện web b&aacute;n h&agrave;ng HomeShop</strong>&nbsp;hiện đại, trẻ trung, chuy&ecirc;n nghiệp th&iacute;ch hợp cho những c&ocirc;ng ty, cửa h&agrave;ng b&aacute;n lẻ,&nbsp;N&oacute; sẽ ho&agrave;n to&agrave;n ph&ugrave; hợp với bất kỳ loại cửa h&agrave;ng trực tuyến do bố tr&iacute; hiện đại, sạch sẽ v&agrave; đa chức năng.&nbsp;6 ti&ecirc;u đề kh&aacute;c nhau, menu mega, ch&acirc;n trang linh hoạt, 3 thanh trượt, 3 trang chủ kh&aacute;c nhau, lọc sản phẩm, danh s&aacute;ch mong muốn v&agrave; so s&aacute;nh, xem nhanh v&agrave; nhiều hơn nữa &hellip; Bắt đầu kinh doanh của bạn với ch&uacute;ng t&ocirc;i.</p>\r\n\r\n<p>Website t&iacute;ch hợp nhiều chức năng chuy&ecirc;n nghiệp: Chức năng giới thiệu dịch vụ, Chức năng giới thiệu sản phẩm, b&aacute;n h&agrave;ng, Đặt h&agrave;ng, Quản l&yacute; đơn hảng, Viết Blog&hellip;</p>\r\n\r\n<p>Để tăng khả năng cạnh tranh của doanh nghiệp th&igrave; việc thiết kế website l&agrave; một giải ph&aacute;p kh&ocirc;ng thể thiếu được trong thời điểm hiện tại.&nbsp;<strong>Expro Việt Nam</strong>&nbsp;sẽ cung cấp cho bạn một giải ph&aacute;p&nbsp;<a href="https://thietkewebnhanh247.com/thiet-ke-website-chuyen-nghiep/">thiết kế website chuy&ecirc;n nghiệp</a>&nbsp;nhất, với một giao diện ấn tượng, đơn giản, dễ sử, khả năng tương t&aacute;c người d&ugrave;ng cao.</p>\r\n\r\n<p>Với g&oacute;i dịch vụ&nbsp;<a href="https://thietkewebnhanh247.com/thiet-ke-web-gia-re/">thiết kế web gi&aacute; rẻ</a>&nbsp;của&nbsp;<strong>Thiết kế web nhanh 247</strong>&nbsp;chỉ với một mức chi ph&iacute; cực thấp, bạn sẽ c&oacute; ngay một website với giao diện cực đẹp v&agrave; đầy đủ t&iacute;nh năng chuy&ecirc;n nghiệp.</p>\r\n\r\n<p>Với mong muốn trở th&agrave;nh c&ocirc;ng ty h&agrave;ng đầu trong lĩnh vực&nbsp;<a href="https://thietkewebnhanh247.com/">thiết kế web</a>&nbsp;v&agrave; Marketing online tại Việt Nam, ch&uacute;ng t&ocirc;i kh&ocirc;ng ngừng học hỏi v&agrave; lỗ lực hết m&igrave;nh để tạo ra những sản phẩm ấn tượng với mức chi ph&iacute; cực thấp nhằm hỗ trợ c&aacute;c doanh nghiệp tiếp cận với thương mại điện tử v&agrave; quảng b&aacute; sản phẩm</p>\r\n\r\n<p>Với hơn 5 năm kinh nghiệm trong lĩnh vực&nbsp;<em>thiết kế web gi&aacute; rẻ</em>, Thiết kế web nhanh 247 sở hữu&nbsp;<a href="https://thietkewebnhanh247.com/kho-giao-dien/">kho giao diện</a>&nbsp;với h&agrave;ng trăm mẫu website cho hầu hết c&aacute;c lĩnh vực. Tất cả được thiết kế từ nguồn cảm hứng v&ocirc; tận, mang những sắc th&aacute;i v&agrave; phong c&aacute;ch kh&aacute;c nhau. Đ&aacute;p ứng được hầu hết những y&ecirc;u cầu khắt khe của những kh&aacute;ch h&agrave;ng kh&oacute; t&iacute;nh nhất.<br />\r\nKhi kh&aacute;ch h&agrave;ng lựa chọn được&nbsp;<a href="https://thietkewebnhanh247.com/kho-giao-dien/">mẫu thiết kếwebsite</a>&nbsp;ph&ugrave; hợp với phong c&aacute;ch của doanh nghiệp m&igrave;nh trong kho giao diện, h&atilde;y li&ecirc;n hệ ngay với THIETKEWEBNHANH 247, đội ngũ kỹ thuật của ch&uacute;ng t&ocirc;i chỉ cần 24h để ho&agrave;n thiện website mẫu cho ph&ugrave; hợp với y&ecirc;u cầu của từng kh&aacute;ch h&agrave;ng.</p>\r\n\r\n<h2 id="voi-quy-trinh-thiet-ke-web-nhu-tren-chung-toi-luon-cam-ket">Với quy tr&igrave;nh thiết kế web như tr&ecirc;n ch&uacute;ng t&ocirc;i lu&ocirc;n cam kết:</h2>\r\n\r\n<ul>\r\n\t<li>Mức chi ph&iacute; thiết kế web lu&ocirc;n thấp nhất</li>\r\n\t<li><strong>Kho giao diện web cực đẹp</strong>&nbsp;v&agrave; phong ph&uacute; với h&agrave;ng trăm mẫu website chuy&ecirc;n nghiệp tr&ecirc;n tất cả c&aacute;c lĩnh vực gi&uacute;p kh&aacute;ch h&agrave;ng dễ d&agrave;ng t&igrave;m kiếm cho m&igrave;nh mẫu web ưng &yacute; nhất.</li>\r\n\t<li>Quy tr&igrave;nh thiết kế website gi&aacute; rẻ từ kh&acirc;u k&yacute; kết đến b&agrave;n giao lu&ocirc;n đảm bảo được tiến độ trong thời gian sớm nhất.<strong>&nbsp;Chỉ từ 3 đến 7 ng&agrave;y</strong></li>\r\n\t<li>Chất lượng cho mỗi website lu&ocirc;n được đặt l&ecirc;n h&agrave;ng đầu.</li>\r\n\t<li>Chỉnh sửa giao diện ph&ugrave; hợp với y&ecirc;u cầu v&agrave; đặc th&ugrave; phong c&aacute;ch của kh&aacute;ch h&agrave;ng</li>\r\n\t<li>Website được t&iacute;ch hợp nhiều t&iacute;nh năng vượt trội, gi&uacute;p việc b&aacute;n h&agrave;ng v&agrave; quảng b&aacute; thương hiệu trở n&ecirc;n chuy&ecirc;n nghiệp v&agrave; dễ d&agrave;ng hơn</li>\r\n\t<li>Website được thiết kế chuy&ecirc;n nghiệp, hiện đại theo phong c&aacute;ch nước ngo&agrave;i, theo chuẩn W3C.</li>\r\n\t<li>Website được sử dụng c&ocirc;ng nghệ ti&ecirc;n tiến nhất HTML5, CSS3 gi&uacute;p th&iacute;ch nghi được với nhiều tr&igrave;nh duyệt, di động v&agrave; m&aacute;y t&iacute;nh bảng</li>\r\n\t<li>Giao diện quản trị chuy&ecirc;n nghiệp, bạn kh&ocirc;ng cần phải am hiểu về lĩnh vực CNTT cũng c&oacute; thể quản trị dễ d&agrave;ng.</li>\r\n\t<li>Hỗ trợ tư vấn c&aacute;c giải ph&aacute;p&nbsp;<a href="https://thietkewebnhanh247.com/dich-vu-seo-website/">Quảng c&aacute;o từ kho&aacute; Google</a>&hellip; Để quảng b&aacute; website của bạn</li>\r\n\t<li>Hỗ trợ tư vấn tối ưu h&oacute;a Seo Onpage chuẩn từ A-Z trước khi b&agrave;n giao cho kh&aacute;ch h&agrave;ng</li>\r\n\t<li>Hỗ trợ tư vấn kỹ thuật v&agrave; chăm s&oacute;c kh&aacute;ch h&agrave;ng nhanh ch&oacute;ng, nhiệt t&igrave;nh.</li>\r\n</ul>\r\n\r\n<p>xem th&ecirc;m &gt;&gt;&gt; fgdghfhgf</p>	<ul><li><a href="#mau-website-ban-hang-chuyen-nghiep-home-shop">Mẫu website b&aacute;n h&agrave;ng chuy&ecirc;n nghiệp Home Shop</a></li><li><a href="#voi-quy-trinh-thiet-ke-web-nhu-tren-chung-toi-luon-cam-ket">Với quy tr&igrave;nh thiết kế web như tr&ecirc;n ch&uacute;ng t&ocirc;i lu&ocirc;n cam kết:</a></li></ul>	/upload/images/theme/kandc.png	/upload/images/theme/kandc.png	/upload/images/theme/myservice.png	/upload/images/theme/homeshop.png	Mẫu website thương mại điện tử đẹp chuyên nghiệp	/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg	mẫu web	mẫu hậu	2020-08-09 01:59:39	2020-08-13 06:52:23	'247':393,512,610 '24h':622 '3':238,241,746 '5':496 '6':224 '7':748 'a':925,931 'a-z':930 'am':883 'an':363,467 'b':54,65,102,147,170,193,298,491,729,800,806,914,935 'ban':25B,35B,270,347,402,878,917 'bang':870 'banr':9A 'bao':735 'bat':205,265 'bi':128 'bien':137 'blog':310 'bo':159,214 'box':117 'c':75,84,125,126,131,132,187,229,245,373,404,428,478,479,527,528,549,552,591,692,693,779,831,843,890,901,902,907,952 'ca':124,532,691 'cam':538,658 'can':483,621,881 'canh':315 'cao':377 'cap':345 'cau':563,635,774 'ch':121,183,233,252,272,278,446,550,569,578,592,616,639,652,699,780,783,789,832,855,940,954,958 'cham':950 'chat':751 'chi':394,398,471,620,661,744 'chinh':765 'cho':185,346,524,629,708,753,938 'chon':582 'chorme':140 'chu':243 'chuan':45B,837,928 'chuc':111,222,281,286,292 'chuy':58,69,106,179,283,355,419,685,812,824,875 'chuyen':29B,37B 'cntt':888 'coccoc':143 'css3':47B,88,851 'cua':7A,165,190,208,269,317,388,566,593,615,636,781,916 'cuc':400,411,473,674 'cung':344,889 'd':97,375,554,703,817,895 'da':110,221 'dac':776 'dai':116,176,217,828 'dam':734 'danh':250 'dat':302,759 'dau':266,433,764 'day':414 'de':80,227,311,367,461,623,702,816,894,912 'den':728,747 'dep':109,412,675 'di':129,863 'dich':290,381 'diem':337 'dien':49B,95,114,145,168,362,410,487,517,601,672,768,872 'do':213,738 'doanh':268,318,480,594 'doi':611 'don':307,365 'dong':130,864 'du':415 'dung':74,842 'duoc':41B,334,533,557,583,736,758,787,821,840,857 'duyet':135,862 'expro':340 'fgdghfhgf':966 'firefox':142 'g':379 'gi':386,506,696,721,797,852 'gia':31B 'giai':327,349,903 'gian':366,741 'giao':48B,94,113,144,167,361,409,516,600,671,731,767,871,937 'gioi':288,294 'google':166,911 'h':56,67,104,149,172,191,209,300,303,431,519,570,579,602,640,680,700,762,784,802,924,941,955 'hang':26B,36B,308 'hau':525,558 'he':606 'het':458,526,559 'hien':115,175,216,338,827 'hieu':92,808,884 'ho':198,476,624,897,918,943 'hoat':237 'hoc':453 'hoi':454 'home':27B,61 'homeshop':39B,72,151,174 'hon':263,495,819 'hop':184,203,279,588,631,770,790 'html5':46B,87,850 'hung':539 'huu':514 'i':275,380,449,546,619,655,835 'ie':139 'k':726 'kandc':6A 'ke':43B,82,100,323,353,384,390,438,504,509,535,647,664,719,823 'ket':659,727 'kewebsite':586 'kh':228,244,330,450,551,568,572,577,638,698,724,782,879,939,953 'kha':313,369 'khat':564 'khe':565 'khi':576,934 'kho':515,599,670,910 'kiem':164,707 'kinh':267,498 'ky':206,613,947 'l':306,325,760 'lam':5A 'lap':89 'le':195 'li':604 'linh':236,435,501,529,694,886 'lo':456 'loai':207 'loc':247 'lu':656,666,732,756 'lua':581 'luc':457 'luong':752 'm':160,163,459,596,706,709,866,965 'mai':486 'mang':542 'marketing':441 'mau':1A,33B,52,63,522,584,628,683,711 'mega':232 'menu':231 'moi':78,754 'mong':253,423 'mot':326,348,360,396,406 'muc':397,470,660 'muon':254,424 'n':55,59,66,70,103,107,148,156,171,180,194,196,199,201,234,284,299,356,420,605,625,651,657,667,686,689,730,733,757,761,801,810,811,813,825,847,876,936 'nam':342,445,497 'nang':112,223,282,287,293,314,370,418,794 'ng':57,68,76,85,98,105,150,173,188,192,210,273,301,304,331,376,429,432,447,451,520,571,580,617,641,653,681,701,704,749,763,785,803,818,844,880,896,942,956,959 'ngay':405,607 'nghe':77,86,845 'nghi':856 'nghiem':499 'nghiep':30B,38B,60,71,108,181,285,319,357,421,481,595,687,814,826,877 'ngo':834 'ngu':612 'ngung':452 'nguoi':96,374 'nguon':537 'nh':91,134,258,417,427,460,574,597,645,710,717,793,861,869,962 'nham':475 'nhanh':260,392,511,957 'nhat':8A,79,358,575,669,714,743,849 'nhau':230,246,553 'nhiet':960 'nhieu':262,280,791,859 'nhu':138,649 'nhung':186,464,543,560,567 'nua':264 'nuoc':833 'o':908 'online':442 'onpage':927 'p':329,351,555,697,798,853,905 'ph':202,328,350,399,472,587,630,662,678,769,904 'phai':882 'pham':249,297,466,493 'pho':136 'phong':548,590,677,778,830 'quan':305,873,892 'quang':490,805,906,913 'quy':643,715 'ra':463 're':32B,387,507,722 's':251,257,951 'sac':544 'sach':218 'safari':141 'san':248,296,465,492 'se':197,219,343,403 'seo':154,926 'shop':28B,62,118 'so':256,513 'som':742 'su':73,368,841 'sua':766 't':162,274,277,372,416,448,573,618,654,705,788,792,868,961 'tai':339,443 'tan':541 'tang':312 'tao':462 'tat':123,531,690 'th':120,155,182,320,426,545,777,854,964 'thanh':239 'thap':401,474,668 'the':332,891 'theo':44B,829,836 'thi':51B 'thien':157,626 'thiet':42B,81,99,127,322,352,383,389,437,503,508,534,585,646,663,718,822 'thietkewebnhanh':609 'thieu':289,295,333 'thoi':336,740 'thuat':614,948 'thuong':485,807 'ti':225,846 'tien':737,848 'tiep':482 'tim':3A 'to':200 'toi':152,922 'tr':90,133,215,644,650,688,716,860 'tram':521,682 'trang':235,242 'tranh':316 'tre':177 'tri':874,893 'tro':425,477,809,898,919,944 'troi':796 'trong':335,434,500,598,739 'truc':211 'trung':178 'truoc':933 'truot':240 'tu':488,536,723,745,899,909,920,929,945 'tung':637 'tuong':50B,119,364,371,468 'tuyen':212 'ty':189,430 'u':226,562,634,725,773 'ung':93,556,713 'uu':153,923 'v':220,255,261,413,440,455,489,540,547,676,775,804,815,865,949 'van':900,921,946 've':885 'viec':4A,321,799 'viet':309,341,444 'voi':122,158,204,271,359,378,395,408,422,469,484,494,518,589,608,632,642,679,771,858 'vu':291,382 'vuc':436,502,530,695,887 'vuot':795 'w3c':838 'web':2A,24B,34B,64,169,385,391,439,505,510,648,665,673,712 'website':40B,53,83,101,146,276,324,354,407,523,627,684,720,755,786,820,839,915 'xem':259,963 'y':161,561,603,633,750,772,867 'z':932 'タン':11B,14B,16B,18B,20B,22B 'チュン':10B,13B 'フン':12B 'フンmau':23B 'フンチュン':15B,17B,19B,21B
\.


--
-- Data for Name: topic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topic (id, name, slug, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	theme	store-template	1000 theme を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
2	dịch vụ	店舗テンプレート service	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
3	tin tức	店舗テンプレート news	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
4	thiết kế website	店舗テンプレート design web	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
5	seo	店舗テンプレート seo	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
6	giới thiệu dịch vụ	店舗テンプレート íntro service	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
7	bảng giá dịch vụ	店舗テンプレート price	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-09 01:59:39	2020-08-09 01:59:39
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, email_verified_at, avatar, password, remember_token, created_at, updated_at) FROM stdin;
1	Trương Thanh Hùng	thanhhung.code@gmail.com	\N	upload/images/avatar.jpg	$2y$10$If/qjeYYkV2iw6nIMp9I8e9k2s.sBtShTlZkv6fiJIq6z83XbauN.	\N	2020-08-09 01:59:39	2020-08-09 01:59:39
\.


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 131, true);


--
-- Name: option_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.option_id_seq', 9, true);


--
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_id_seq', 1, true);


--
-- Name: post_tag_active_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_tag_active_id_seq', 1, true);


--
-- Name: rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rating_id_seq', 1, true);


--
-- Name: tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_id_seq', 2, true);


--
-- Name: tag_theme_active_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_theme_active_id_seq', 34, true);


--
-- Name: tag_theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_theme_id_seq', 5, true);


--
-- Name: theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.theme_id_seq', 9, true);


--
-- Name: topic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.topic_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: option option_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.option
    ADD CONSTRAINT option_pkey PRIMARY KEY (id);


--
-- Name: post post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- Name: post_tag_active post_tag_active_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tag_active
    ADD CONSTRAINT post_tag_active_pkey PRIMARY KEY (id);


--
-- Name: rating rating_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_pkey PRIMARY KEY (id);


--
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: tag_theme_active tag_theme_active_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_theme_active
    ADD CONSTRAINT tag_theme_active_pkey PRIMARY KEY (id);


--
-- Name: tag_theme tag_theme_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag_theme
    ADD CONSTRAINT tag_theme_pkey PRIMARY KEY (id);


--
-- Name: theme theme_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.theme
    ADD CONSTRAINT theme_pkey PRIMARY KEY (id);


--
-- Name: topic topic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: search_theme_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX search_theme_idx ON public.theme USING gin (search_tsv);


--
-- Name: view_search_theme _RETURN; Type: RULE; Schema: public; Owner: postgres
--

CREATE OR REPLACE VIEW public.view_search_theme AS
 SELECT theme.id,
    theme.slug,
    theme.created_at,
    theme.title,
    theme.author,
    theme.background,
    theme.excerpt,
    regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])'::text, ' '::text, 'g'::text) AS catalogue,
    string_agg((tag_theme.name)::text, ','::text) AS tag_name,
    string_agg((tag_theme.excerpt)::text, ','::text) AS tag_excerpt,
    concat(theme.title, ' ', theme.author, ' ', theme.excerpt, ' ', regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])'::text, ' '::text, 'g'::text), ' ', string_agg((tag_theme.name)::text, ','::text), ' ', string_agg((tag_theme.excerpt)::text, ','::text)) AS search_document,
    (((setweight(to_tsvector(COALESCE(public.vn_unaccent(public.add_space_character((theme.title)::text)))), 'A'::"char") || setweight(to_tsvector(COALESCE(public.vn_unaccent(public.add_space_character(concat(theme.author, ' ', theme.excerpt, ' ', regexp_replace(theme.catalogue, '(<[^>]+>)|([\\t\\n\\r])'::text, ' '::text, 'g'::text), ' '))))), 'B'::"char")) || setweight(to_tsvector(COALESCE(public.vn_unaccent(public.add_space_character(string_agg((tag_theme.name)::text, ','::text))))), 'C'::"char")) || setweight(to_tsvector(COALESCE(public.vn_unaccent(public.add_space_character(string_agg((tag_theme.excerpt)::text, ','::text))))), 'D'::"char")) AS search
   FROM ((public.theme
     LEFT JOIN public.tag_theme_active ON ((theme.id = tag_theme_active.theme_id)))
     LEFT JOIN public.tag_theme ON ((tag_theme_active.tag_theme_id = tag_theme.id)))
  GROUP BY theme.id;


--
-- Name: theme search_theme_tsv_trigger; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER search_theme_tsv_trigger BEFORE INSERT OR UPDATE OF title, excerpt, content ON public.theme FOR EACH ROW EXECUTE PROCEDURE public.search_theme_tsv_trigger_func();


--
-- PostgreSQL database dump complete
--

