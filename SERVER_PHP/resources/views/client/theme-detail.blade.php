<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> {{ $theme->title . " | " .Config::get("app.name") }} </title>
    <meta name="robots" content="index, follow" />
    <meta property="author" content="{{ $theme->author }}" />
    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="{{ $theme->title . " | " . Config::get("app.name") }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset($theme->url) }}" />
    <meta property="og:image" content="{{ $theme->image_seo }}" />
    <meta property="og:description" content="{{ $theme->description }}" />
    <meta name="description" content="{{ $theme->description_seo }}">
    <meta name="keywords" content="{{ $theme->keyword_seo }}">

    
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $theme->title . " | " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $theme->description_seo }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $theme->site_name . " | " . Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ $theme->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $theme->description_seo }}" />
    <meta name="twitter:title" content="{{ $theme->site_name }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ $theme->image_seo }}" />

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



    <script>
        const CONFIG_COMPANY_NAME = "{{ Config::get("app.company_name") }}";
        const CONFIG_COMPANY_ADDRESS = "{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}"
    </script>
</head>
<body>
    
    <div class="wrapper-page">
        <div class="component-detail-theme">
            <div id="js-menu-theme-detail" class="wrapper-component-menu">
                <div class="component-menu-theme">
                    <a href="{{ Route('HOME_PAGE') }}">
                        @include('client.partial.icon-logo')
                    </a>
                    <ul id="js-handle-device" class="component-menu-detail-theme-responsive">
                        <li><img src="{{ asset('/images/responsive.png') }}" /></li>
                        <li id="js-icon-laptop-device" onClick="handleDevice('laptop-device')"><i class="hero-icon hero-laptop"></i></li>
                        <li id="js-icon-tablet-device" onClick="handleDevice('tablet-device')"><i class="hero-icon hero-tablet-ipad"></i></li>
                        <li id="js-icon-mobile-device" onClick="handleDevice('mobile-device')"><i class="hero-icon hero-cellphone"></i></li>
                    </ul>
                    <div class="selector-theme">
                        <span>
                            <a href="{{ Route('CHAT') }}" class="btn-goto-chat-detail-theme">
                                <i class="hero-icon hero-cellphone-message"></i>
                                管理者とチャットする
                            </a>
                        </span>
                        <span>
                            <a href="{{ Route('CONTACT_PAGE') }}" class="btn-select-design-here">
                                <i class="hero-icon hero-hand-pointing-right"></i> 
                                このデザインを選択 
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div id="js-iframe-review-template" class="wrapper-theme-detail-iframe">
                <div id="js-style-device">
                    <iframe src="http://hanhtrinh247.dev.com/" 
                    frameBorder="0" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>

</body>
</html>