<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> {{ Config::get("app.name") }} </title>
    <meta name="robots" content="index, follow" />

    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="{{ Config::get("app.name") }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:image" content="@yield('image_seo')" />
    <meta property="og:description" content="{{ Config::get("app.description") }}" />
    <meta name="description" content="{{ Config::get("app.description") }}">
    <meta name="keywords" content="{{ Config::get("app.keywords") }}">

    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('android-icon-192x192.png' . Config::get('app.version')) }}"/>
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon-96x96.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">
    <link rel="stylesheet" href="{{ asset('css/app.css' . Config::get('app.version'))}}">

    <script type='application/ld+json'>
        {
            "@context":"https://schema.org/",
            "@type":"WebSite",
            "@id":"#website",
            "url":"{{ asset('/') }}",
            "name":"{{ Config::get("app.name") }}",
            "alternateName":"Công ty thiết kế web chuyên nghiệp - Expro Việt Nam",
            "potentialAction":{"@type":"SearchAction","target":"https://thietkewebnhanh247.com/?post_type=products?s={search_term_string}","query-input":"required name=search_term_string"}
        }
    </script> 
    <script type="application/ld+json">
        {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Expro Việt Nam",
      "alternateName": "Công Ty Thiết kế Web Chuyên Nghiệp - Expro Việt Nam",
      "url": "https://thietkewebnhanh247.com",
      "telephone": "[+84987468234,+84989069632]",
      "description": "Công Ty Thiết Kế Website uy tín Chuyên Nghiệp Tại Hồ Chí Minh (TPHCM) và Hà Nội, Thời gian làm web nhanh, giá rẻ nhất hàng đầu Việt Nam",
      "priceRange": "4700000đ-19900000đ",
      "logo": "https://thietkewebnhanh247.com/wp-content/uploads/2016/11/white-new-logo.png",
      "image":"https://thietkewebnhanh247.com/wp-content/uploads/2017/02/dich-vu-thiet-ke-website-gia-re-tai-quan-5_s1309.jpg",
      "hasMap": "https://www.google.com/maps/place/C%C3%B4ng+ty+TNHH+Gi%E1%BA%A3i+Ph%C3%A1p+S%E1%BB%91+Expro+Vi%E1%BB%87t+Nam/@10.7308828,106.7353163,15z/data=!4m12!1m6!3m5!1s0x0:0x655e2ac7bf13f262!2zQ8O0bmcgdHkgVE5ISCBHaeG6o2kgUGjDoXAgU-G7kSBFeHBybyBWaeG7h3QgTmFt!8m2!3d10.7308828!4d106.7353163!3m4!1s0x0:0x655e2ac7bf13f262!8m2!3d10.7308828!4d106.7353163", 
      "email": "mailto:thietkewebnhanh247@gmail.com",
        "founder": "Nguyễn Như Minh",
        "address": {
          "@type": "PostalAddress", 
          "addressLocality": "Ho Chi Minh City",
            "addressCountry": "VIỆT NAM",
          "addressRegion": "Dakao",
          "postalCode":"700000",
          "streetAddress": "6B Nguyễn Thành Ý"
        },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7308828,
        "longitude": 106.7353163
      } ,
      "sameAs": [
        "https:\/\/www.facebook.com\/thietkewebnhanh247\/",
        "https:\/\/www.linkedin.com\/in\/thiet-ke-web-nhanh\/",
        "https:\/\/plus.google.com\/u\/0\/communities\/103757250998763928825",
        "https:\/\/www.youtube.com\/channel\/UCPtsZOB2bwf6nUyuFaN4mCw",
        "https:\/\/twitter.com\/minhnn250385"
      ]
    }
</script> 
<script type='application/ld+json'>
    {
        "@context":"https://schema.org/",
        "@type":"Book",
        "name":"Công ty TNHH giải pháp số Expro Việt Nam",
        "description":"Công Ty Thiết Kế Website uy tín Chuyên Nghiệp Tại Hồ Chí Minh (TPHCM) và Hà Nội, Thời gian làm web nhanh, giá rẻ nhất",
        "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","bestRating":"5","ratingCount":"89"}
    }
</script>



<title>Công ty thiết kế web nhanh chuyên nghiệp, ✅ Làm website giá rẻ chuẩn SEO</title>
<meta name="description" content="Công ty thiết kế web Expro ✅ thiết kế website 
chuyên nghiệp, cao cấp, chuẩn SEO ✅. Bảo hành và hỗ trợ trọn đời. 
Không làm web giá rẻ kém chất lượng."/>
<link rel="canonical" href="https://thietkewebnhanh247.com/" />
<link rel="next" href="https://thietkewebnhanh247.com/page/2/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Thiết kế web nhanh uy tín chuyên nghiệp chuẩn SEO, 
Tương thích Mobile" />
<meta property="og:description" content="Thiết kế web nhanh chuyên nghiệp theo chuẩn SEO, 
sử dụng công nghệ HTML5, CSS3 Mobile Responsive tương thích Di động, Giá rẻ nhất" />
<meta property="og:url" content="https://thietkewebnhanh247.com/" />
<meta property="og:site_name" content="Thiết kế web chuyên nghiệp chuẩn SEO, 
Tương thích Mobile" />
<meta property="fb:app_id" content="1827321970886345" />
<meta property="og:image" content="https://thietkewebnhanh247.com/wp-content/uploads/2017/
01/thiet-ke-website-tai-tuyen-quang.jpg" />
<meta property="og:image:secure_url" content="https://thietkewebnhanh247.com/
wp-content/uploads/2017/01/thiet-ke-website-tai-tuyen-quang.jpg" />
<meta property="og:image:width" content="680" />
<meta property="og:image:height" content="300" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Công ty thiết kế web Expro ✅ 
thiết kế website chuyên nghiệp, cao cấp, chuẩn SEO ✅. Bảo hành và hỗ trợ trọn đời. 
Không làm web giá rẻ kém chất lượng." />
<meta name="twitter:title" content="Công ty thiết kế web nhanh chuyên nghiệp, ✅ 
Làm website giá rẻ chuẩn SEO" />
<meta name="twitter:site" content="@minhnn250385" />
<meta name="twitter:image" content="https://thietkewebnhanh247.com/wp-content/uploads/20
17/01/thiet-ke-website-tai-tuyen-quang.jpg" />
<meta name="msvalidate.01" content="FD383F4DBB2596ABA50323D671399646" />
<meta name="google-site-verification" content="3WBnde_0RwyVdJg0hwq0d-
5Y3ZIcI5cu1ivOReKywsk" />
<meta name="yandex-verification" content="5355f63e7bdc617e" />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Thiết kế web chuyên nghiệp ch
uẩn SEO, Tương thích Mobile &raquo; Feed" href="https://thietkewebnhanh247.com/feed/" />



</head>
<body>
    
    <div class="wrapper-page bg-gradient-home-page">
        <div class="header">
            hung
        </div>
        hug
    </div>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
</body>
</html>