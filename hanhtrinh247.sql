--
-- PostgreSQL database dump
--

-- Dumped from database version 10.11
-- Dumped by pg_dump version 10.11

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
    url character varying(255),
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
    updated_at timestamp(0) without time zone
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
88	2014_10_12_000000_create_users_table	1
89	2019_08_19_000000_create_failed_jobs_table	1
90	2020_07_18_132900_create_post_table	1
91	2020_07_18_135350_create_topic_table	1
92	2020_07_18_141341_create_tag_table	1
93	2020_07_18_141409_create_post_tag_active_table	1
94	2020_07_18_142633_create_rating_table	1
95	2020_07_19_020349_create_theme_table	1
96	2020_07_27_065741_create_tag_theme_table	1
97	2020_07_27_065947_create_tag_theme_active_table	1
98	2020_08_01_020054_create_option_table	1
\.


--
-- Data for Name: option; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.option (id, key, type, value_text, value_html, language, created_at, updated_at) FROM stdin;
1	footer-title	1	チャットシステムでお客様を年中無休でサポート	<p>dfsdfsdfs</p>	vi	\N	\N
2	footer-go-to-chat	1	クリックしてチャット	<p>dfsdfsdfs</p>	vi	\N	\N
3	des-footer	1	経験豊富なスタッフのチームにより、ウェブサイトから問題を導き対処するだけでなく、 コンサルティングを行い、ビジネスと共に成長します。	<p>dfsdfsdfs</p>	vi	\N	\N
4	text-link-consulting-web-design	1	コンサルティングウェブデザイン	<p>dfsdfsdfs</p>	vi	\N	\N
5	text-link-advisory-system	1	技術サポート	<p>dfsdfsdfs</p>	vi	\N	\N
6	text-link-submit-web-request	1	Webリクエストを送信	<p>dfsdfsdfs</p>	vi	\N	\N
7	footer-menu-service	1	<p> <i class="hero-icon hero-google-ads"></i> <a href="/create-web-standard-seo">SEO標準Webデザイン</a> </p> <p> <i class="hero-icon hero-message-text-outline"></i> <a href="/create-web-chat-realtime">リアルタイムWebチャットの設計</a> </p> <p> <i class="hero-icon hero-human-male-child"></i> <a href="/create-web-recruit">採用されたウェブデザイン</a> </p> <p> <i class="hero-icon hero-newspaper-variant-outline"></i> <a href="/create-web-news">ニュースウェブデザイン</a> </p> <p> <i class="hero-icon hero-ballot-recount-outline"></i> <a href="/create-web-marketing-sale-online">販売ウェブデザイン</a> </p> <p> <i class="hero-icon hero-responsive"></i><a href="/create-web-responsive">モバイルレスポンシブウェブデザイン</a> </p>	<p>dfsdfsdfs</p>	vi	\N	\N
\.


--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post (id, topic_id, rating_id, title, slug, excerpt, catalogue, content, background, thumbnail, "like", view, rate_value, public, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	1	\N	mẫu ưeb thương mại diẹn tử chuyên nghiệp	mau-web-thuong-mai-dien-tu	mẫu ưeb site bán hàng	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp 	\N	\N	1	1	3.5	1	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
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
1	thanh hùng	upload/images/avatar.jpg	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag (id, name, slug, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	thiết kế web bán đầm chuyên nghiệp	thiet-ke-web-ban-dam	mẫu ưeb site bán hàng	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
2	chạy quảng cáo	chay-quang-cao	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Data for Name: tag_theme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_theme (id, name, slug, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	mẫu ưeb bán hàng	mau-web-ban-hang	mẫu ưeb site bán hàng	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
2	mẫu ưeb bán dâm	mau-web-ban-dam	mẫu ưeb site bán dâm	Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Data for Name: tag_theme_active; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag_theme_active (id, theme_id, tag_theme_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: theme; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.theme (id, title, slug, url, excerpt, description, content, catalogue, background, image_laptop, image_tablet, image_mobile, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	mẫu ưeb công ty trútgrowth 	mau-web-cong-ty-trust-growth	\N	mẫu ưeb site bán hàng	theme đâug tiên test thử 	Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.	\N	\N	\N	\N	\N	Mẫu website thương mại điện tử đẹp chuyên nghiệp	\N	mẫu web	mẫu hậu	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Data for Name: topic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topic (id, name, slug, excerpt, content, catalogue, background, thumbnail, site_name, image_seo, keyword_seo, description_seo, created_at, updated_at) FROM stdin;
1	theme	store-template	1000 theme を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
2	dịch vụ	店舗テンプレート service	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
3	tin tức	店舗テンプレート news	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
4	thiết kế website	店舗テンプレート design web	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
5	seo	店舗テンプレート seo	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
6	giới thiệu dịch vụ	店舗テンプレート íntro service	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
7	bảng giá dịch vụ	店舗テンプレート price	1000を超える非常に美しく、常に更新されるWebインターフェイス	自分のスタイルに合わせて簡単に変更	\N	\N	\N	プロのSEOウェブデザイン、モバイル互換性	\N		美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, email_verified_at, avatar, password, remember_token, created_at, updated_at) FROM stdin;
1	Trương Thanh Hùng	thanhhung.code@gmail.com	\N	upload/images/avatar.jpg	$2y$10$2nW9mJYkNtCGF5KRM3qaouLgJQOUldD2aOqjFTNAPDCirFh2iltfK	\N	2020-08-01 15:34:42	2020-08-01 15:34:42
\.


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 98, true);


--
-- Name: option_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.option_id_seq', 7, true);


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

SELECT pg_catalog.setval('public.tag_theme_active_id_seq', 1, false);


--
-- Name: tag_theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_theme_id_seq', 2, true);


--
-- Name: theme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.theme_id_seq', 1, true);


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
-- PostgreSQL database dump complete
--

