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

    
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="@minhnn250385" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />

    <meta name="msvalidate.01" content="" />
    <meta name="google-site-verification" content="" />
    <meta name="yandex-verification" content="" />
    <link rel='dns-prefetch' href='' />
    <link rel="alternate" type="application/rss+xml" title="{{ Config::get("app.alternate_name") }}" href="" />



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
            "alternateName":"{{ Config::get("app.alternate_name") }}",
            "potentialAction":{
                "@type":"SearchAction",
                "target":"{{ Route('SEARCH', [ 'q' => null ]) }}/{search_term_string}",
                "query-input":"required name=search_term_string"
            }
        }
    </script> 
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "{{ Config::get("app.company_name") }}",
            "alternateName": "{{ Config::get("app.alternate_name") }}",
            "url": "{{ asset('/') }}",
            "telephone": "[ {{ Config::get("app.phone_one") }} , {{ Config::get("app.phone_two") }} ]",
            "description": "{{ Config::get("app.description") }}",
            "priceRange": "{{ Config::get("app.price_range") }}",
            "logo": "{{ Config::get("app.logo") }}",
            "image":"{{ Config::get("app.image") }}",
            "hasMap": "{{ Config::get("app.map_link") }}", 
            "email": "mailto:{{ Config::get("app.company_mail") }}",
                "founder": "{{ Config::get("app.founder") }}",
                "address": {
                "@type": "PostalAddress", 
                    "addressLocality": "{{ Config::get("app.company_address_locality") }}",
                    "addressCountry": "{{ Config::get("app.company_address_country") }}",
                    "addressRegion": "{{ Config::get("app.company_address_region") }}",
                    "postalCode":"{{ Config::get("app.company_postcode") }}",
                    "streetAddress": "{{ Config::get("app.company_address_street") }}"
                },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": {{ Config::get("app.map_lat") }},
                "longitude": {{ Config::get("app.map_long") }}
            }
        }
    </script> 
    <script type='application/ld+json'>
    {
        "@context":"https://schema.org/",
        "@type":"Book",
        "name":"{{ Config::get("app.name") }}",
        "description":"{{ Config::get("app.description") }}",
        "aggregateRating":{
            "@type":"AggregateRating",
            "ratingValue":"{{ Config::get("app.rate_value") }}",
            "bestRating":"{{ Config::get("app.rate_max") }}",
            "ratingCount":"{{ Config::get("app.rate_view") }}"
        }
    }
    </script>



    <script>
        const CONFIG_COMPANY_NAME = "{{ Config::get("app.company_name") }}";
        const CONFIG_COMPANY_ADDRESS = "{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}"
    </script>
</head>
<body>
    
    <div class="wrapper-page bg-gradient-home-page">
        <div class="header">
            <h2 class="logo">
                <a href="{{ Route('HOME_PAGE') }}" class="link-logo">
                    @include('client.partial.icon-logo') {{ Config::get('app.company') }}
                </a>
            </h2>
            @include('client.partial.menu-mini')
        </div>
        @include('client.partial.footer')
        @include('client.partial.backtop')
        @include('client.partial.alo-now')
    </div>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>

</body>
</html>