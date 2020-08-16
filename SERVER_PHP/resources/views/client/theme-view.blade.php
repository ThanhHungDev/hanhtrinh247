

@extends('client.layout.main')

@section('title', $theme->title)
@section('description', $theme->description_seo )
@section('keywords', $theme->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $theme->title . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $theme->description_seo }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $theme->site_name }}" />
    <meta property="og:image" content="{{ $theme->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $theme->description_seo }}" />
    <meta name="twitter:title" content="{{ $theme->title . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $theme->site_name }}" />
    <meta name="twitter:image" content="{{ $theme->image_seo }}" />


    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Recipe",
        "author": "{{ $theme->author }}",
        "cookTime": "PT1H",
        "datePublished": "{{ $theme->created_at }}",
        "description": "{{ $theme->description }}",
        "image": "{{ $theme->image_seo }}",
    }
    </script>
@endsection
@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>
@endsection
@section('content')

<div class="headfull" style="background: url('{{ $theme->background }}') no-repeat scroll center top;">
    <div class="wrapper-intro-search">
        <h2 class="introduce-tag">{{ SupportDB::getOption('tag-theme-title-introduce') }}</h2>
        <h2 class="custommer-intro">{{ SupportDB::getOption('tag-theme-custommer-introduce') }}</h2>

        <form class="search-post-type" action="{{ Route('SEARCH_THEME') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="検索ウェブサイトテンプレート..">
            <button class="btn-search-post-type"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>

<div class="page-view-theme">
    
    <div class="theme-detail-intro">
        <div class="description-view-theme">
            <div class="des-content">
                {!! $theme->description !!}
            </div>
            <hr class="hr-divide-description">
            <h6>サポート機器</h6>
            <ul class="view-theme-responsive">

                <li id="js-icon-laptop-device" onClick="viewDevice('laptop-device')"><i class="hero-icon hero-laptop"></i></li>
                <li id="js-icon-tablet-device" onClick="viewDevice('tablet-device')"><i class="hero-icon hero-tablet-ipad"></i></li>
                <li id="js-icon-mobile-device" onClick="viewDevice('mobile-device')"><i class="hero-icon hero-cellphone"></i></li>
            </ul>
            
        </div>
        <div class="wrapper-view-theme"  id="js-type-view">
            <figure class="box-modern-figure" >
                <a class="theme-img-scroll laptop-device-img" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_laptop }}" alt="">
                </a>
                <a class="theme-img-scroll tablet-device-img" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_tablet }}" alt="">
                </a>
                <a class="theme-img-scroll mobile-device-img" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_mobile }}" alt="">
                </a>
            </figure>
        </div>
        <div class="group-btn-more">
            <a href="{{ Route('THEME_DETAIL', ['slug' => $theme->slug]) }}" 
                target="_blank"
                class="btn-view-page">
                詳細を表示
            </a>
            <a class="btn-select-theme" data-slug="{{ $theme->slug }}">
                このデザインを選択
            </a>
        </div>
    </div>

    <div class="content-view-theme">
        <h1 class="title__content-view-theme">{{ $theme->title }}</h1>
        <div class="excerpt">
            <blockquote>
                <p class="excerpt-content">{{ $theme->excerpt }}</p>
                <small>{{ $theme->author }}</small>
            </blockquote>
        </div>
        
        <div class="catalogue">
            <div class="catalogue__title">
                目次 
                <span>
                [
                <a class="catalogue__btn" href="javascript:void(0)" data-toggle="1" 
                onclick="toggleCatalogue(this)">hide</a>
                ]
                </span>
                </div>
            <div class="catalogue__body">
                {!!  $theme->catalogue  !!}
            </div>
        </div>
        <div class="publisher">
            <span>
                <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                {{ date('Y-m-d', strtotime($theme->created_at ))}}
            </span>
            <span>
                <i class="hero-icon hero-eye-outline text-color-blue"></i>
                {{ $theme->view }} 表示モード
            </span>
        </div>

        <div class="hash-tag">
            <p class="title">Tag liên quan</p>
            @foreach ($theme->tags as $tag)
            <h6>
                <a href="{{ Route('TAG_THEME_VIEW', ['slug' => $tag->slug ]) }}">
                    {{ $tag->name }}
                </a>
            </h6>
            @endforeach
        </div>

        <div class="main-view-theme-content">
            {!! $theme->content !!}
        </div>
    </div>
</div>

<div class="prominence">
    <div class="topic-website-selector">
        <div class="title-topic">関係性のあるデザインの卓越性</div>
    </div>
    <div class="component-intro-theme clearfix">

        @if($themes_relation)
        @foreach ($themes_relation as $theme)
        <div class="component-item-theme wrapper-item-theme">
            <figure class="box-modern-figure">
                <a class="theme-img-scroll" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_laptop }}" alt="">
                </a>
                <figcaption class="box-modern-title">
                    <h5 class="name">{{ $theme->title }}</h5>
                    <h6 class="author">by {{ $theme->author }}</h6>
                    <a class="btn-trial" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">裁判</a>
                </figcaption>
            </figure>
            <h4 class="title-theme">{{ $theme->title }}</h4>
            <div class="group-btn-more">
                <a href="{{ Route('THEME_DETAIL', ['slug' => $theme->slug]) }}" 
                    target="_blank"
                    class="btn-view-page float-left">
                    詳細を表示
                </a>
                <a class="btn-select-theme float-right" data-slug="{{ $theme->slug }}">
                    このデザインを選択
                </a>
            </div>
        </div>
        @endforeach
        @endif
    </div>
</div>
<!-- Modal HTML embedded directly into document -->
<div id="select-theme-model" class="modal ">
    <form class="js-validate-form component-contact" action="{{ Route('MAIL_SELECT_THEME_CONTACT') }}" method="post">
        {!! csrf_field() !!}
        <input id="slug-hidden" name="slug" type="hidden" value="">
        <div class="form-contact">
            <div class="form-input">
                <label> あなたのフルネーム <i>✵</i></label>
                <input name="name" type="text" />
            </div>
            <div class="form-input">
                <label> メールアドレス <i>✵</i></label>
                <input name="email" type="text" />
            </div>
            <div class="form-input">
                <label> 電話番号 <i>✵</i></label>
                <input name="mobile" type="text" />
            </div>
            <div class="form-input">
                <label> メッセージ内容 </label>
                <textarea name="message" class="" ></textarea>
            </div>
            <!-- Google reCaptcha -->
            <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY')  }}"></div>
            <!-- End Google reCaptcha -->
            <button rel="modal:close" class="btn-send-mail-contact">メール管理者に送信</button>
        </div>
    </form>
</div>
@endsection