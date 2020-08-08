

@extends('client.layout.main')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))
@section('keywords', Config::get("app.keywords"))

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
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>
@endsection
@section('content')


<div class="component-intro-theme">
    <div class="component-categories-theme">
        @foreach($tags as $index => $tag )
        <div class="component-category-theme">
            <a class="link-icon-theme" href="#">
                {!! $tag->icon !!}
            </a>
            <a class="link-name-theme" href="{{ $tag->slug }}">
                {{ $tag->name }}
            </a>
        </div>
        @endforeach
    </div>
    <div class="component-intro-theme">
        @foreach ($themes as $theme)
        <div class="component-item-theme wrapper-item-theme">
            <figure class="box-modern-figure">
                <a class="theme-img-scroll" href="{{ Route('THEME_DETAIL', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_laptop }}" alt="">
                </a>
                <figcaption class="box-modern-title">
                    <h5 class="name">{{ $theme->title }}</h5>
                    <h6 class="author">by {{ $theme->author }}</h6>
                    <a class="btn-trial" href="{{ Route('THEME_DETAIL', ['slug' => $theme->slug]) }}">裁判</a>
                </figcaption>
            </figure>
        </div>
        @endforeach
    </div>
</div>
@endsection