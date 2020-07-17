-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 18, 2020 lúc 02:40 PM
-- Phiên bản máy phục vụ: 8.0.19
-- Phiên bản PHP: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ebudezain`
--

DELIMITER $$
--
-- Thủ tục
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `post_relate` (`_post_id` INT, `_type_id` INT, `_limit` INT)  BEGIN
   	IF _post_id = 0 THEN
        SELECT  
           id,
            title,
            slug,
            excerpt,
            REGEXP_REPLACE(content, '(<[^>]+>)|([\\t\\n\\r])', '') AS "content",
            thumbnail,
            category_type_id,
            post.like,
            post.view,
            image_resize,
            site_name,
            image_seo,
            keyword_seo,
            description_seo,
            updated_at,
            created_at
        FROM post
        WHERE category_type_id = _type_id 
        ORDER BY created_at DESC
        LIMIT _limit;
   	ELSE
        SET sql_mode = 'NO_UNSIGNED_SUBTRACTION';
    	SELECT  
            id,
            title,
            slug,
            excerpt,
            REGEXP_REPLACE(content, '(<[^>]+>)|([\\t\\n\\r])', '') AS "content",
            thumbnail,
            category_type_id,
            post.like,
            image_resize,
            post.view,
            site_name,
            image_seo,
            keyword_seo,
            description_seo,
            updated_at,
            created_at
        FROM post
        WHERE ABS( id - _post_id ) > 0 
        ORDER BY ABS( id - _post_id) ASC, created_at DESC
        LIMIT _limit;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `post_relate_ignore` (`_post_id` INT, `_type_id` INT, `_diff` VARCHAR(255), `_limit` INTEGER)  BEGIN
   	IF _post_id = 0 THEN
        SELECT  
            id,
            title,
            slug,
            excerpt,
            REGEXP_REPLACE(content, '(<[^>]+>)|([\\t\\n\\r])', '') AS "content",
            thumbnail,
            category_type_id,
            post.like,
            post.view,
            image_resize,
            site_name,
            image_seo,
            keyword_seo,
            description_seo,
            updated_at,
            created_at
        FROM post
        WHERE category_type_id = _type_id  AND FIND_IN_SET(id, _diff) < 0  
        ORDER BY created_at DESC
        LIMIT _limit;
   	ELSE
        SET sql_mode = 'NO_UNSIGNED_SUBTRACTION';
        SELECT  
            id,
            title,
            slug,
            excerpt,
            REGEXP_REPLACE(content, '(<[^>]+>)|([\\t\\n\\r])', '') AS "content",
            thumbnail,
            category_type_id,
            post.like,
            post.view,
            image_resize,
            site_name,
            image_seo,
            keyword_seo,
            description_seo,
            updated_at,
            created_at
        FROM post
        WHERE ABS(id - _post_id ) > 0 AND  FIND_IN_SET(id, _diff) < 0  
        ORDER BY ABS(id - _post_id ) ASC, created_at DESC
        LIMIT _limit;
	END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `background` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `excerpt`, `thumbnail`, `background`, `description`, `site_name`, `image_seo`, `keyword_seo`, `description_seo`, `created_at`, `updated_at`) VALUES
(1, '店舗テンプレート', 'store-template-店舗テンプレート', '1000を超える非常に美しく、常に更新されるWebインターフェイス', '/upload/images/thiet-ke-web-chuan-seo.jpg', '/upload/images/seo.jpeg', '自分のスタイルに合わせて簡単に変更', 'プロのSEOウェブデザイン、モバイル互換性', '/upload/images/slim-r.jpg', '美しいウェブサイトインターフェース、プロフェッショナルなウェ', '美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。', '2020-03-22 12:37:21', '2020-03-26 20:48:22'),
(2, '店舗テンプレート category', '店舗テンプレート category', '1000を超える非常に美しく、常に更新されるWebインターフェイス', '/upload/images/avatar.jpg', '/upload/images/slim-r.jpg', '自分のスタイルに合わせて簡単に変更', 'プロのSEOウェブデザイン、モバイル互換性', '/upload/images/php.png', '美しいウェブサイトインターフェース、プロフェッショナルなウェ', '美しいウェブサイトインターフェース、プロフェッショナルなウェブサイトデザイン、評判のSEO基準、高速なウェブデザイン時間、最も安い価格を保管してください。', '2020-03-22 12:37:21', '2020-03-26 20:47:40'),
(3, 'âm nhạc', 'am-nhac', 'âm nhạc nè', '/upload/images/graduation.jpg', '/upload/images/graduation-mobile.jpg', 'âm nhạc ahy', 'site', '/upload/images/bg_title.png', 'key META DESCRIPTION \r\nMETA KEYWORD\r\nMETA KEYWORD\r\nMETA KEYWORD\r\nMETA KEYWORD\r\nMETA KEYWORD', 'á META DESCRIPTION', '2020-03-26 20:00:31', '2020-03-26 20:47:10'),
(5, 'dịch vụ', 'dich-vu', 'dịch vụ lậpt rình', '/upload/images/php.png', '/upload/images/graduation-mobile.jpg', 'mô tả là dịch vụ lập trình', 'dịch vụ lạpa trình ưeb', '/upload/images/graduation.jpg', 'key lập trình dịch vụ', 'ahihi', '2020-03-28 12:14:18', '2020-03-28 12:14:18'),
(6, 'php', 'php', 'php PHP Là Gì - Giới Thiệu Về Ngôn Ngữ PHP', '/upload/images/php.png', '/upload/images/php.png', 'Ngôn ngữ lập trình PHP có thể được sử dụng trên nhiều hệ điều hành khác nhau bao gồm Windows, Mac OS và Linux', 'PHP Là Gì - Giới Thiệu Về Ngôn Ngữ PHP', '/upload/images/php.png', 'META KEYWORD', 'META DESCRIPTION', '2020-04-08 03:33:13', '2020-04-08 03:33:13'),
(7, 'JAVA', 'java', 'Java là gì? Tại sao bạn nên học lập trình Java?', '/upload/images/c82-java-logo.png', '/upload/images/c82-java-logo.png', 'Java là gì? Tại sao bạn nên học lập trình Java?Java là gì? Tại sao bạn nên học lập trình Java?', 'Java là gì? Tại sao bạn nên học lập trình Java?', '/upload/images/c82-java-logo.png', 'Java là gì? Tại sao bạn nên học lập trình Java?', 'Java là gì? Tại sao bạn nên học lập trình Java?', '2020-04-08 03:41:21', '2020-04-08 03:41:21'),
(8, 'JAVASCRIPT', 'javascript', 'Javascript là gì? – Giới thiệu về Javascript – SOGO xSchool', '/upload/images/slim.jpg', '/upload/images/javascript-la-gi.jpg', 'Javascript là gì? – Giới thiệu về Javascript – SOGO xSchool', 'Javascript là gì? – Giới thiệu về Javascript – SOGO xSchool', '/upload/images/__thumbs/javascript-la-gi.jpg/javascript-la-gi__600x338.jpg', 'Javascript là gì? – Giới thiệu về Javascript – SOGO xSchool', 'Javascript là gì? – Giới thiệu về Javascript – SOGO xSchool', '2020-04-08 03:43:33', '2020-04-08 03:43:33'),
(9, 'spring', 'spring', 'spring framework', '/upload/images/spring-framework.png', '/upload/images/spring-framework.png', 'spring framework', 'spring framework ahihi', '/upload/images/spring-framework.png', 'spring framework', 'dspring framework', '2020-04-08 04:14:15', '2020-04-08 04:14:15'),
(10, 'DESIGN PATTERN', 'design-pattern', 'DESIGN PATTERN', '/upload/images/design-patterns.jpg', '/upload/images/design-patterns.jpg', 'DESIGN PATTERN', 'DESIGN PATTERN', '/upload/images/design-patterns.jpg', 'DESIGN PATTERN', 'DESIGN PATTERN', '2020-04-08 04:22:39', '2020-04-08 04:22:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_style`
--

CREATE TABLE `category_style` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `background` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_type_id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_style`
--

INSERT INTO `category_style` (`id`, `name`, `slug`, `excerpt`, `thumbnail`, `background`, `description`, `site_name`, `image_seo`, `description_seo`, `keyword_seo`, `category_type_id`, `created_at`, `updated_at`) VALUES
(1, 'giao diện thương mại điện tử ahihi đồ ngốc', 'thuong-mai-dien-tu-ahihi-do-ngoc', 'thương mại điển tử rất có lợi nhuận', NULL, NULL, 'áo thun nam, áo thun nam xuất khẩu, áo thun nam ngoại, áo thun nam chất lượng, áo thun nam giá rẻ, đồng hồ xách tay', 'kho giao diện đẹp thương mại điện tử', NULL, '', '', 1, '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(2, 'giới nthieeuj công ty ahihi đồ ngu', 'gioi-thieu-cong-ty-ahihi-do-ngu', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', 1, '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(3, 'category style 2 không liên quan 1', 'category-style-2-khong-lien-quan-1', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', 2, '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(4, 'category style 3 có liên quan 1', 'category-style-3-co-lien-quan-1', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', 1, '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(5, 'giới thiệu ahihi hùng đẹp trai', 'gioi-thieu-ahihi-hung-dep-trai', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', 3, '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(6, 'thêm mới kiểu dáng', 'them-moi-kieu-dang', 'thêm mới kiểu dáng', '/upload/images/seo.jpeg', '/upload/images/graduation-mobile.jpg', 'thêm mới kiểu dángthêm mới kiểu dángthêm mới kiểu dángthêm mới kiểu dáng', 'thêm mới kiểu dáng', '/upload/images/graduation.jpg', 'thêm mới kiểu dáng des', 'thêm mới kiểu dáng key', 6, '2020-03-28 21:09:54', '2020-03-28 21:09:54'),
(7, 'âm nhạc kiểu dáng 1', 'am-nhac-kieu-dang-1', 'âm nhạc kiểu dáng 1 ưe ahihi', '/upload/images/graduation.jpg', '/upload/images/php.png', 'âm nhạc kiểu dáng 1 m', 'âm nhạc kiểu dáng 1 s', '/upload/images/avatar.jpg', 'âm nhạc kiểu dáng 1 d', 'âm nhạc kiểu dáng 1 m', 6, '2020-03-28 21:15:43', '2020-03-28 21:28:48'),
(8, 'âm nhạc hùng đẹp trai style', 'am-nhac-hung-dep-trai-style', 'âm nhạc hùng đẹp trai style edit', '/upload/images/slim-r.jpg', '/upload/images/avatar.jpg', 'âm nhạc hùng đẹp trai style m', 'sdf âm nhạc hùng đẹp trai style', '/upload/images/php.png', 'âm nhạc hùng đẹp trai style f', 'âm nhạc hùng đẹp trai style k', 6, '2020-03-28 21:25:29', '2020-03-28 21:28:40');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_type`
--

CREATE TABLE `category_type` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `background` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `site_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_seo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_type`
--

INSERT INTO `category_type` (`id`, `name`, `slug`, `excerpt`, `thumbnail`, `background`, `description`, `category_id`, `site_name`, `image_seo`, `keyword_seo`, `description_seo`, `created_at`, `updated_at`) VALUES
(1, 'giao diện thương mại điện tử', 'thuong-mai-dien-tu', 'thương mại điển tử rất có lợi nhuận', NULL, NULL, 'áo thun nam, áo thun nam xuất khẩu, áo thun nam ngoại, áo thun nam chất lượng, áo thun nam giá rẻ, đồng hồ xách tay', 1, 'kho giao diện đẹp thương mại điện tử', NULL, '', '', '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(2, 'giới nthieeuj công ty', 'gioi-thieu-cong-ty', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 1, 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(3, 'giới nthieeuj công ty 3', 'gioi-thieu-cong-ty', 'giới thiệu công ty', NULL, NULL, 'fgjdgnfdj', 2, 'kho giao diện đẹp thương mại điện tử', NULL, 'giới thiệu công ty', 'giới thiệu công ty', '2020-03-22 12:37:21', '2020-03-22 12:37:21'),
(4, 'dịch vụ phân loại edit', 'dich-vu-phan-loai-edit', 'dịch vụ phân loại edit', '/upload/images/graduation-mobile.jpg', '/upload/images/php.png', 'dịch vụ phân loại 1', 5, 'dịch vụ phân loại', '/upload/images/php.png', 'key', 'des', '2020-03-28 13:18:08', '2020-03-28 13:43:06'),
(5, 'ahihii  dfsfs phân loại', 'ahihiidfsfs-phan-loai', 'fgdfg', '/upload/images/graduation-mobile.jpg', '/upload/images/graduation-mobile.jpg', 'fghfh', 3, 'sdf', '/upload/images/graduation.jpg', 'sdf', 'sdfds', '2020-03-28 17:37:04', '2020-03-28 17:37:04'),
(6, 'phân loại mới', 'phan-loai-moi', 'dfsdf', '/upload/images/php.png', '/upload/images/graduation-mobile.jpg', 'ádsad', 3, 'ád', '/upload/images/graduation.jpg', 'ád', 'ádsa', '2020-03-28 19:22:47', '2020-03-28 19:22:47'),
(7, 'php core', 'php-core', 'php core', '/upload/images/AdvanceyourSkillsasaPHPDeveloper-CorePHP_1420x630-1503427756924.jpg', '/upload/images/AdvanceyourSkillsasaPHPDeveloper-CorePHP_1420x630-1503427756924.jpg', 'php core', 6, 'php core', '/upload/images/AdvanceyourSkillsasaPHPDeveloper-CorePHP_1420x630-1503427756924.jpg', 'php core php core', 'php core php core php core', '2020-04-08 03:45:18', '2020-04-08 03:45:18'),
(8, 'laravel', 'laravel', 'laravel', '/upload/images/laravel_top.png', '/upload/images/laravel_top.png', 'laravel', 6, 'laravel framework', '/upload/images/laravel_top.png', 'laravel', 'laravel', '2020-04-08 04:10:38', '2020-04-08 04:10:38'),
(9, 'jsp', 'jsp', 'jsp', '/upload/images/JSP-vs-Servlet.jpg', '/upload/images/JSP-vs-Servlet.jpg', 'jssp sẻvlet', 7, 'jsp servlet', '/upload/images/JSP-vs-Servlet.jpg', 'jsp', 'servlet', '2020-04-08 04:12:50', '2020-04-08 04:12:50'),
(10, 'spring framework', 'spring-framework', 'spring framework', '/upload/images/graduation.jpg', '/upload/images/spring-framework.png', 'spring framework', 7, 'spring framework', '/upload/images/spring-framework.png', 'spring framework', 'spring framework', '2020-04-08 04:15:14', '2020-04-08 04:15:14'),
(11, 'spring framework boot', 'spring-framework-boot', 'spring framework boot', '/upload/images/spring-boot-1.png', '/upload/images/spring-boot-1.png', 'spring framework boot', 9, 'spring framework boot', '/upload/images/spring-boot-1.png', 'spring framework boot', 'spring framework boot', '2020-04-08 04:16:33', '2020-04-08 04:16:33'),
(12, 'hibernate', 'hibernate', 'hibernate', '/upload/images/1_GI9m2zoDYsNNU59q20nMsg.jpeg', '/upload/images/1_GI9m2zoDYsNNU59q20nMsg.jpeg', 'hibernate', 7, 'hibernate', '/upload/images/1_GI9m2zoDYsNNU59q20nMsg.jpeg', 'hibernate', 'hibernate', '2020-04-08 04:18:21', '2020-04-08 04:18:21'),
(13, 'nodejs', 'nodejs', 'nodejs', '/upload/images/eye_nodejs-667x410.png', '/upload/images/eye_nodejs-667x410.png', 'nodejs', 8, 'nodejs', '/upload/images/eye_nodejs-667x410.png', 'nodejs', 'nodejs', '2020-04-08 04:19:35', '2020-04-08 04:19:35'),
(14, 'jquery', 'jquery', 'jquery EXCERPT -- ĐOẠN TRÍCH jquery EXCERPT -- ĐOẠN TRÍCH jquery EXCERPT -- ĐOẠN TRÍCH jquery EXCERPT -- ĐOẠN TRÍCH jquery EXCERPT -- ĐOẠN TRÍCH', '/upload/images/ta%CC%89i%20xuo%CC%82%CC%81ng.jpeg', '/upload/images/ta%CC%89i%20xuo%CC%82%CC%81ng.jpeg', 'jqueryTừ module hiệu ứng cho đến module truy vấn selector. jQuery được sử dụng đến 99% trên tổng số website trên thế giới. Vậy các module chính của jQuery là gì2020-04-09 13:13:44Từ module', 8, 'jquery', '/upload/images/ta%CC%89i%20xuo%CC%82%CC%81ng.jpeg', 'jquery', 'jquery', '2020-04-08 04:20:56', '2020-04-09 04:14:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_03_09_043355_create-table-service', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `picture`
--

CREATE TABLE `picture` (
  `id` int UNSIGNED NOT NULL,
  `src` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `width` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `galery` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foreign_id` bigint NOT NULL,
  `table` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `thumbnail` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_type_id` int UNSIGNED NOT NULL,
  `like` int NOT NULL DEFAULT '1',
  `view` int NOT NULL DEFAULT '1',
  `publish` int NOT NULL DEFAULT '1',
  `site_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_seo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `keyword_seo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description_seo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image_resize` varchar(550) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `title`, `slug`, `excerpt`, `content`, `thumbnail`, `category_type_id`, `like`, `view`, `publish`, `site_name`, `image_seo`, `keyword_seo`, `description_seo`, `created_at`, `updated_at`, `image_resize`) VALUES
(1, 'mẫu ưeb thương mại diẹn tử chuyên nghiệp', 'mau-web-thuong-mai-dien-tu', 'mẫu ưeb site bán hàng', '<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;n nghiệp.</p>\r\n\r\n<p>Website thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ mộ</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>t phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Webs</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ite thương mại điện tử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết sản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;c</p>\r\n\r\n<p>h hợp cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng, th&acirc;n thiện với người sử dụng. Để l&agrave;m được điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh.</p>\r\n\r\n<p>H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>', '/upload/images/slim-r.jpg', 1, 1, 1, 1, 'Mẫu website thương mại điện tử đẹp chuyên nghiệp', '/upload/images/slim-r.jpg', 'mẫu web', 'mẫu hậu', '2020-03-22 12:37:21', '2020-04-17 18:01:04', '{\"medium\":\"\\/upload\\/images\\/medium\\/slim-r.jpg\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/slim-r.jpg\",\"small\":\"\\/upload\\/images\\/small\\/slim-r.jpg\"}'),
(3, 'bài viết số edit thử', 'bai-viet-so-edit-thu', 'ahihi', '<p>content&nbsp;</p>', '/upload/images/php.png', 2, 1, 1, 1, 'site', '/upload/images/seo.jpeg', 'meta key', 'meta des', '2020-03-24 20:45:32', '2020-04-17 18:14:07', '{\"medium\":\"\\/upload\\/images\\/medium\\/php.png\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/php.png\",\"small\":\"\\/upload\\/images\\/small\\/php.png\"}'),
(4, 'hùng đẹp trai', 'hung-dep-trai', 'ahihi', '<p>conetnt</p>\r\n\r\n<p><img alt=\"hùng đẹp trai\" src=\"http://ebudezain.com/upload/images/graduation-mobile.jpg\" /></p>\r\n\r\n<p>ahihi</p>\r\n\r\n<pre>\r\n<code class=\"language-php\">call_user_func(array($class_name, &#39;doSomething&#39;));\r\ncall_user_func($class_name .&#39;::doSomething&#39;); // &gt;5.2.3</code></pre>\r\n\r\n<pre>\r\n<code class=\"language-html\">&lt;a href=&quot;#&quot; class=&quot;{{ (\\Request::route()-&gt;getName() == &#39;admin&#39;) ? &#39;active&#39; : &#39;&#39; }}&quot;&gt;\r\n//// h&ugrave;ng đẹp trai\r\n/// h&ugrave;ng comment</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<pre>\r\n<code class=\"language-comment\">//// h&ugrave;ng đẹp trai</code></pre>\r\n\r\n<ol>\r\n	<li>Dr Mohammad&nbsp;<a href=\"https://quickadminpanel.com/blog/laravel-how-to-make-menu-item-active-by-urlroute/#comment-28249\">January 28, 2020 at 7:18 am</a>\r\n\r\n	<p>I don&rsquo;t like the given approaches! I would prefer to create a `sidebar.blade.php` and a `ViewComposerProvider` and a `SidebarViewComposer`. call the `SidebarViewComposer` via `ViewComposerProvider` boot function and pass the current controller and action. The making the decision. You can even make the logic in `SidebarViewComposer` and return one variable for each menu, contains &lsquo;active&rsquo; or &rdquo;. Then place this variable inside the class of the menu,</p>\r\n\r\n	<p>&nbsp;<a href=\"https://quickadminpanel.com/blog/laravel-how-to-make-menu-item-active-by-urlroute/?replytocom=28249#respond\" onclick=\"return addComment.moveForm( &quot;div-comment-28249&quot;, &quot;28249&quot;, &quot;respond&quot;, &quot;1329&quot; )\">Reply</a></p>\r\n	</li>\r\n	<li>\r\n	<p><img alt=\"\" src=\"https://secure.gravatar.com/avatar/9395a7940b3ff6c33a1e7cab20166f15?s=54&amp;d=mm&amp;r=g\" style=\"height:54px; width:54px\" /></p>\r\n	<a href=\"https://twitter.com/prabakar_dev\">Prabakaran T</a>&nbsp;<a href=\"https://quickadminpanel.com/blog/laravel-how-to-make-menu-item-active-by-urlroute/#comment-36212\">March 9, 2020 at 7:03 am</a>\r\n\r\n	<p>I use this helper function.</p>\r\n\r\n	<p>for resource rout</p>\r\n	</li>\r\n</ol>', '/upload/images/graduation-mobile.jpg', 1, 1, 1, 1, 'sdfds', '/upload/images/bg_title.png', 'ád', 'fds', '2020-03-24 21:14:30', '2020-04-17 18:14:13', '{\"medium\":\"\\/upload\\/images\\/medium\\/graduation-mobile.jpg\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/graduation-mobile.jpg\",\"small\":\"\\/upload\\/images\\/small\\/graduation-mobile.jpg\"}'),
(5, 'mẫu ưeb thương mại diẹn tử chuyên nghiệp edit', 'mau-ueb-thuong-mai-dien-tu-chuyen-nghiep-edit', 'mẫu ưeb site bán hàng edit', '<p>Mẫu website thương mại điện tử đẹp chuy&ecirc;</p>\r\n\r\n<p>n nghiệp Website thương mại điện tử l&agrave; trang th&ocirc;ng tin điện tử được thiết lập nhằm phục vụ một phần hoặc to&agrave;n bộ qu&aacute; tr&igrave;nh hoạt động mua b&aacute;n h&agrave;ng h&oacute;a cũng như cung ứng dịch vụ. Từ việc trưng b&agrave;y, giới thiệu h&agrave;ng h&oacute;a</p>\r\n\r\n<p>, dịch vụ, b&aacute;n h&agrave;ng h&oacute;a dịch vụ, thanh to&aacute;n v&agrave; dịch vụ sau b&aacute;n h&agrave;ng. Hay c&oacute; thể n&oacute;i một c&aacute;ch đơn giản hơn, Website thương mại điện t</p>\r\n\r\n<p>ử l&agrave; một loại của website b&aacute;n h&agrave;ng.Khi l&ecirc;n kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem x&eacute;t nhiều yếu tố như th&ocirc;ng tin chi tiết s</p>\r\n\r\n<p>ản phẩm, h&igrave;nh ảnh sản phẩm, qu&aacute; tr&igrave;nh thanh to&aacute;</p>\r\n\r\n<p>n đơn giản v&agrave; minh bạch, c&aacute;c bộ lọc sản th&iacute;ch hợp</p>\r\n\r\n<p>cũng như c&aacute;c t&ugrave;y chọn t&igrave;m kiếm, dịch vụ kh&aacute;ch h&agrave;ng lựa chọn c&oacute; đ&aacute;ng tin cậy hay kh&ocirc;ng, c&aacute;c phương thức thanh to&aacute;n, giao diện</p>\r\n\r\n<p>website được thiết kế c&oacute; hấp dẫn, thu h&uacute;t người d&ugrave;ng,</p>\r\n\r\n<p>th&acirc;n thiện với người sử dụng. Để l&agrave;m đư</p>\r\n\r\n<p>ợc điều n&agrave;y quả l&agrave; điều kh&ocirc;ng hề đơn giản.Đ&acirc;y cũng ch&iacute;nh l&agrave; l&yacute; do m&agrave; trước khi thiết kế website thương mại điện tử mới hoặc n&acirc;ng cấp gian h&agrave;ng trực tuyến hiện tại của m&igrave;nh. H&atilde;y t&igrave;m hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để l&ecirc;n những &yacute; tưởng hấp dẫn cho dự &aacute;n của m&igrave;nh tại Expro Việt Nam.</p>', '/upload/images/avatar.jpg', 3, 1, 1, 1, 'Mẫu website thương mại điện tử đẹp chuyên nghiệp', '/upload/images/slim-r.jpg', 'mẫu web edit', 'mẫu hậu', '2020-03-25 20:13:51', '2020-04-17 18:14:16', '{\"medium\":\"\\/upload\\/images\\/medium\\/avatar.jpg\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/avatar.jpg\",\"small\":\"\\/upload\\/images\\/small\\/avatar.jpg\"}'),
(7, 'PHP là gì', 'php-la-gi', 'php là viết tắt của Hypertext Preprocessor. \r\nScript hay Scripting Language (hay Ngôn ngữ Script) chính là Ngôn ngữ hướng kịch bản.', '<p><strong>Script hay Scripting Language (hay Ng&ocirc;n ngữ Script) ch&iacute;nh l&agrave; Ng&ocirc;n ngữ hướng kịch bản. Ng&ocirc;n ngữ hướng kịch bản l&agrave; một ng&ocirc;n ngữ m&agrave; kh&ocirc;ng đ&ograve;i hỏi một bước bi&ecirc;n dịch. Ng&ocirc;n ngữ kịch bản thường th&ocirc;ng dịch (Interpreted) thay v&igrave; bi&ecirc;n dịch (Compiled).<br />\r\n=&gt; Mạnh dạn ph&aacute;t biểu PHP chạy chậm</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><strong>#</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Scripting</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Programming</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Examples</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>PHP, JavaScript, Perl, Python ...</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Java, C, C++, ...&nbsp;</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Execution</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Th&ocirc;ng dịch</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Bi&ecirc;n dịch</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Learning</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Dễ học hơn, mất &iacute;t thời gian hơn Ng&ocirc;n ngữ Lập tr&igrave;nh</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Cần c&oacute; một thời gian đ&aacute;ng kể</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Nature</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Viết code &iacute;t hơn</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Cần viết nhiều code hơn</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Requirement</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Kh&ocirc;ng cần tạo tệp m&atilde; nhị ph&acirc;n</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Tạo ra m&atilde; nhị ph&acirc;n</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Complexity</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Dễ hiểu, dễ viết code hơn so với ng&ocirc;n ngữ lập tr&igrave;nh</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Hơi kh&oacute; hiểu cho người mới bắt đầu học Lập tr&igrave;nh</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Formation</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Dựa tr&ecirc;n &yacute; tưởng về kịch bản được viết để điều khiển chương tr&igrave;nh</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>C&oacute; một bộ hướng dẫn được chuyển đổi th&agrave;nh tệp thực thi</strong></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Running</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Chạy b&ecirc;n trong chương tr&igrave;nh kh&aacute;c</strong></p>\r\n			</td>\r\n			<td>\r\n			<p><strong>Chạy độc lập với chương tr&igrave;nh b&ecirc;n ngo&agrave;i</strong></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>php ph&ugrave; hợp với dự &aacute;n nhỏ v&agrave; c&oacute; tốc độ ho&agrave;n th&agrave;nh dự &aacute;n nhanh hơn c&aacute;c ng&ocirc;n ngữ bi&ecirc;n dịch.</strong></p>', '/upload/images/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFvqpcfqbie88x1PhnWzAA9D26BjhbLqad3jDPygALn1k.png', 7, 1, 1, 1, 'php - Hypertext Preprocessor.', '/upload/images/php.png', 'php là viết tắt của Hypertext Preprocessor.', 'php là viết tắt của Hypertext Preprocessor. php là viết tắt của Hypertext Preprocessor. php là viết tắt của Hypertext Preprocessor.', '2020-04-08 05:05:36', '2020-04-17 18:14:20', '{\"medium\":\"\\/upload\\/images\\/medium\\/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFvqpcfqbie88x1PhnWzAA9D26BjhbLqad3jDPygALn1k.png\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFvqpcfqbie88x1PhnWzAA9D26BjhbLqad3jDPygALn1k.png\",\"small\":\"\\/upload\\/images\\/small\\/3W72119s5BjWMGm4Xa2MvD5AT2bJsSA8F9WeC71v1s1fKfGkK9mMKuc3LcvF4KigbWg9UsrpEPFvqpcfqbie88x1PhnWzAA9D26BjhbLqad3jDPygALn1k.png\"}'),
(8, 'hello world với jsp', 'hello-world-voi-jsp', 'hello world với jsp', '<h3><strong>Tạo chương tr&igrave;nh hello word với servlet</strong></h3>\r\n\r\n<p><strong>---------------------------------------------------------</strong></p>\r\n\r\n<p><strong>I. chi tiết c&aacute;ch tạo chương tr&igrave;nh hello world với jsp</strong></p>\r\n\r\n<h2><strong>1. Tạo một Dynamic Web Project</strong></h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Để tạo một dự &aacute;n với jsp/serlvet,ở tr&ecirc;n thanh menu chọn File &ndash;&gt; New &ndash;&gt; Dynamic Web Project.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Nhập &ldquo;HelloWorldJSP&rdquo;&nbsp; đ&acirc;y l&agrave; t&ecirc;n gọi của dự &aacute;n. Sau đ&oacute; sẽ thiết lập th&ecirc;m server tomcat</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Click v&agrave;o n&uacute;t &ldquo;Next&rdquo;.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Kiểm tra dự &aacute;n của bạn đ&atilde; chọn check Generate web.xml chưa. Sau đ&oacute; nhấn v&agrave;o n&uacute;t &ldquo;Finish&rdquo; v&agrave; Eclipse IDE sẽ tạo ra c&aacute;c dự &aacute;n web tự động như h&igrave;nh dưới&nbsp; đ&acirc;y :</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong><img alt=\"Generated web project\" src=\"https://lh6.googleusercontent.com/nPsccNAnRxS-5k01FTyWB2Sg6IVWsIpfvsfjJ6Z-SpY_udGgxzLRLu3gXNS87mEgM0GDXgatAa2DxoXCXKHoTJP4MV7J79Oj35fOWQgk5X5peAaan5_fXjiTB-OByoCSvykub35o\" style=\"height:227px; width:319px\" /></strong></p>\r\n	</li>\r\n</ul>\r\n\r\n<h2><strong>2. Tạo trang Jsp</strong></h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Nhấp chuột phải v&agrave;o thư mục &lsquo;WebContent&rsquo; v&agrave; chọn từ menu new file.jsp -&gt; JSP File.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Đặt t&ecirc;n file jsp l&agrave; &ldquo;helloWorld.jsp&rdquo;&nbsp; trong &ocirc; input &ldquo;File Name&rdquo; sau đ&oacute; nhấn &ldquo;Finish&rdquo;.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Ecipse sẽ tạo ra một trang jsp v&agrave; mở file JSP n&agrave;y trong tr&igrave;nh soạn thảo như h&igrave;nh dưới đ&acirc;y :</strong></p>\r\n	</li>\r\n</ul>\r\n\r\n<pre>\r\n<code class=\"language-java\">&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=ISO-8859-1&quot;\r\n&nbsp; &nbsp; pageEncoding=&quot;ISO-8859-1&quot;%&gt;\r\n&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;\r\n&lt;html&gt;\r\n&lt;head&gt;\r\n&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=ISO-8859-1&quot;&gt;\r\n&lt;title&gt;Insert title here&lt;/title&gt;\r\n&lt;/head&gt;\r\n&lt;body&gt;\r\n&lt;/body&gt;\r\n&lt;/html&gt;</code></pre>\r\n\r\n<h2><strong>3. Viết code file JSP</strong></h2>\r\n\r\n<p><strong>sử dụng cặp kh&oacute;a n&agrave;y : &lt;%= &quot;Hello World!&quot; %&gt;</strong></p>\r\n\r\n<h2><strong>4. Chạy dự &aacute;n của bạn</strong></h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Nhấp chuột phải v&agrave;o &lsquo;helloWorld.jsp&rsquo; v&agrave; chọn từ menu &lsquo;Run As&rsquo; &ndash;&gt; &lsquo;Run on Server&rsquo;.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Chọn tomcat server</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Nhấn v&agrave;o n&uacute;t &ldquo;Finish&rdquo;. Ứng dụng web HelloWorldJSP sẽ được triển khai trong tomcat web server.</strong></p>\r\n	</li>\r\n</ul>', '/upload/images/c82-java-logo.png', 9, 1, 1, 1, 'hello world với jsp', '/upload/images/c82-java-logo.png', 'hello world với jsp', 'hello world với jsp', '2020-04-08 05:12:41', '2020-04-17 18:15:35', '{\"medium\":\"\\/upload\\/images\\/medium\\/c82-java-logo.png\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/c82-java-logo.png\",\"small\":\"\\/upload\\/images\\/small\\/c82-java-logo.png\"}'),
(9, 'chương trình Servlet đầu tiên', 'chuong-trinh-servlet-dau-tien', 'chương trình Servlet đầu tiên', '<h2><strong>1. Tạo một Dynamic Web Project</strong></h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Để tạo một dự &aacute;n với jsp/serlvet,ở tr&ecirc;n thanh menu chọn File &ndash;&gt; New &ndash;&gt; Dynamic Web Project.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Nhập &ldquo;HelloWorldJSP&rdquo;&nbsp; đ&acirc;y l&agrave; t&ecirc;n gọi của dự &aacute;n. Sau đ&oacute; sẽ thiết lập th&ecirc;m server tomcat</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Click v&agrave;o n&uacute;t &ldquo;Next&rdquo;.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Kiểm tra dự &aacute;n của bạn đ&atilde; chọn check Generate web.xml chưa. Sau đ&oacute; nhấn v&agrave;o n&uacute;t &ldquo;Finish&rdquo; v&agrave; Eclipse IDE sẽ tạo ra c&aacute;c dự &aacute;n web tự động như h&igrave;nh dưới&nbsp; đ&acirc;y :</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong><img alt=\"Generated web project\" src=\"https://lh6.googleusercontent.com/nPsccNAnRxS-5k01FTyWB2Sg6IVWsIpfvsfjJ6Z-SpY_udGgxzLRLu3gXNS87mEgM0GDXgatAa2DxoXCXKHoTJP4MV7J79Oj35fOWQgk5X5peAaan5_fXjiTB-OByoCSvykub35o\" style=\"height:227px; width:319px\" /></strong></p>\r\n	</li>\r\n</ul>\r\n\r\n<h2><strong>2. Tạo trang Servlet</strong></h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Nhấp chuột phải v&agrave;o thư mục &lsquo;src&rsquo; v&agrave; chọn từ menu new file.servlet-&gt; Servlet File.</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Nhập t&ecirc;n file servlet v&agrave; t&ecirc;n package như h&igrave;nh dưới sau đ&oacute; chọn &ldquo;Finish&rdquo;:</strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong><img alt=\"Define Servlet class\" src=\"https://lh6.googleusercontent.com/A5fp0KvkwfVFncFrLjp5fHSqpPJ8eNPwTpbOXF_b-PENmy_sjSETX4gxBknEiYzDRraNzsyCdSi-UvRhx-QRz7FlSq0NubOOdZMIbOVTm8AekEPG0KjI9x6Vw4WPPE_ic9UuKTgg\" style=\"height:432px; width:524px\" /></strong></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>File: HelloWorld.java</strong></p>\r\n	</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<pre>\r\n<code class=\"language-java\">\r\npackage com.itphutran.demo;\r\n&nbsp;\r\nimport java.io.IOException;\r\nimport javax.servlet.ServletException;\r\nimport javax.servlet.annotation.WebServlet;\r\nimport javax.servlet.http.HttpServlet;\r\nimport javax.servlet.http.HttpServletRequest;\r\nimport javax.servlet.http.HttpServletResponse;\r\n&nbsp;\r\n/**\r\n* Servlet implementation class HelloWorld\r\n*/\r\n@WebServlet(&quot;/HelloWorld&quot;)\r\npublic class HelloWorld extends HttpServlet {\r\n&nbsp;&nbsp; &nbsp;private static final long serialVersionUID = 1L;\r\n&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;\r\n&nbsp; &nbsp; /**\r\n&nbsp;&nbsp;&nbsp; &nbsp;* @see HttpServlet#HttpServlet()\r\n&nbsp;&nbsp;&nbsp; &nbsp;*/\r\n&nbsp; &nbsp; public HelloWorld() {\r\n&nbsp; &nbsp; &nbsp; &nbsp; super();\r\n&nbsp; &nbsp; &nbsp; &nbsp; // TODO Auto-generated constructor stub\r\n&nbsp; &nbsp; }\r\n&nbsp;\r\n&nbsp;&nbsp; &nbsp;/**\r\n&nbsp;&nbsp; &nbsp; * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)\r\n&nbsp;&nbsp; &nbsp; */\r\n&nbsp;&nbsp; &nbsp;protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\r\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// TODO Auto-generated method stub\r\n&nbsp;&nbsp; &nbsp;}\r\n&nbsp;\r\n&nbsp;&nbsp; &nbsp;/**\r\n&nbsp;&nbsp; &nbsp; * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)\r\n&nbsp;&nbsp; &nbsp; */\r\n&nbsp;&nbsp; &nbsp;protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\r\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// TODO Auto-generated method stub\r\n&nbsp;&nbsp; &nbsp;}\r\n&nbsp;\r\n}</code>\r\n<code class=\"language-java\">\r\n</code></pre>\r\n\r\n<p><strong>ahiii</strong></p>', '/upload/images/c82-java-logo.png', 10, 1, 1, 1, 'chương trình Servlet đầu tiên', '/upload/images/c82-java-logo.png', 'chương trình Servlet đầu tiên', 'chương trình Servlet đầu tiên', '2020-04-08 05:19:10', '2020-04-17 18:15:40', '{\"medium\":\"\\/upload\\/images\\/medium\\/c82-java-logo.png\",\"thumbnail\":\"\\/upload\\/images\\/thumbnail\\/c82-java-logo.png\",\"small\":\"\\/upload\\/images\\/small\\/c82-java-logo.png\"}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post_active_style`
--

CREATE TABLE `post_active_style` (
  `id` int UNSIGNED NOT NULL,
  `post_id` bigint DEFAULT NULL,
  `style_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post_active_style`
--

INSERT INTO `post_active_style` (`id`, `post_id`, `style_id`, `created_at`, `updated_at`) VALUES
(5, 6, 1, '2020-03-25 20:18:08', '2020-03-25 20:18:08'),
(6, 6, 2, '2020-03-25 20:18:08', '2020-03-25 20:18:08'),
(7, 6, 4, '2020-03-25 20:18:08', '2020-03-25 20:18:08'),
(54, 1, 1, '2020-04-17 18:01:04', '2020-04-17 18:01:04'),
(55, 1, 2, '2020-04-17 18:01:04', '2020-04-17 18:01:04'),
(56, 3, 3, '2020-04-17 18:14:07', '2020-04-17 18:14:07'),
(57, 4, 2, '2020-04-17 18:14:13', '2020-04-17 18:14:13'),
(58, 4, 4, '2020-04-17 18:14:13', '2020-04-17 18:14:13'),
(59, 5, 5, '2020-04-17 18:14:16', '2020-04-17 18:14:16');

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `post_new`
-- (See below for the actual view)
--
CREATE TABLE `post_new` (
`id` int unsigned
,`title` varchar(191)
,`slug` varchar(191)
,`excerpt` varchar(191)
,`content` longtext
,`thumbnail` varchar(191)
,`image_resize` varchar(550)
,`category_type_id` int unsigned
,`like` int
,`VIEW` int
,`site_name` varchar(191)
,`image_seo` text
,`keyword_seo` text
,`description_seo` text
,`updated_at` timestamp
,`created_at` timestamp
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rating`
--

CREATE TABLE `rating` (
  `id` int UNSIGNED NOT NULL,
  `username` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rating_active`
--

CREATE TABLE `rating_active` (
  `id` int UNSIGNED NOT NULL,
  `post_id` int UNSIGNED NOT NULL,
  `rating_id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `avatar`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Trương Thanh Hùng', 'upload/images/avatar.jpg', 'thanhhung.code@gmail.com', '$2y$10$seBv.MOIW5gjn0vf5ucpkuJIMik7qxz5bb5OJ3CyXHGzOmFCfijqO', 'gBnxJCPCaV2N27EYPlriqVtltE18rsh95vPY7OmGLmdvJ0iFOJSEWeI7u143', '2020-03-22 12:37:21', '2020-03-22 12:37:21');

-- --------------------------------------------------------

--
-- Cấu trúc cho view `post_new`
--
DROP TABLE IF EXISTS `post_new`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `post_new`  AS  select `post`.`id` AS `id`,`post`.`title` AS `title`,`post`.`slug` AS `slug`,`post`.`excerpt` AS `excerpt`,regexp_replace(`post`.`content`,'(<[^>]+>)|([\\t\\n\\r])','') AS `content`,`post`.`thumbnail` AS `thumbnail`,`post`.`image_resize` AS `image_resize`,`post`.`category_type_id` AS `category_type_id`,`post`.`like` AS `like`,`post`.`view` AS `VIEW`,`post`.`site_name` AS `site_name`,`post`.`image_seo` AS `image_seo`,`post`.`keyword_seo` AS `keyword_seo`,`post`.`description_seo` AS `description_seo`,`post`.`updated_at` AS `updated_at`,`post`.`created_at` AS `created_at` from `post` where (`post`.`publish` = true) order by `post`.`created_at` desc limit 10 ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category_style`
--
ALTER TABLE `category_style`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category_type`
--
ALTER TABLE `category_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_type_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post_active_style`
--
ALTER TABLE `post_active_style`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `rating_active`
--
ALTER TABLE `rating_active`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rating_active_post_id_foreign` (`post_id`),
  ADD KEY `rating_active_rating_id_foreign` (`rating_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `category_style`
--
ALTER TABLE `category_style`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `category_type`
--
ALTER TABLE `category_type`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `picture`
--
ALTER TABLE `picture`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `post_active_style`
--
ALTER TABLE `post_active_style`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT cho bảng `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `rating_active`
--
ALTER TABLE `rating_active`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category_type`
--
ALTER TABLE `category_type`
  ADD CONSTRAINT `category_type_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `rating_active`
--
ALTER TABLE `rating_active`
  ADD CONSTRAINT `rating_active_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `rating_active_rating_id_foreign` FOREIGN KEY (`rating_id`) REFERENCES `rating` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
