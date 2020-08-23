

@extends('client.layout.main')

@section('title', 'chat | ' . Config::get("app.name"))
@section('description', Config::get("app.name"))
@section('keywords', Config::get("app.name"))


@section('meta-seo')
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
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />

@endsection
@section('javascripts')

    <script>
        
        const CONFIG_APP = {!! json_encode(Config::get('SPA'), JSON_PRETTY_PRINT) !!};
        const CONFIG_EVENT = {!! json_encode(Config::get('event-chat'), JSON_PRETTY_PRINT) !!};
        const CONFIG_EMOJIS = {!! json_encode(Config::get('emoji'), JSON_PRETTY_PRINT) !!};
    </script>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/vendors~main.index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>

    

@endsection
@section('content')
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<div>
    <div id="ROOT" class="position-relative text-center">loading...</div>
</div>
@endsection