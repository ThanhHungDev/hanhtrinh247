

@extends('client.layout.main')

@section('title', $tag->name)
@section('description', $tag->description_seo )
@section('keywords', $tag->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $tag->name . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $tag->description }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $tag->site_name }}" />
    <meta property="og:image" content="{{ $tag->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $tag->description }}" />
    <meta name="twitter:title" content="{{ $tag->name . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $tag->site_name }}" />
    <meta name="twitter:image" content="{{ $tag->image_seo }}" />
@endsection
@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>
@endsection
@section('content')

<div class="headfull" style="background: url('{{ $tag->background }}') no-repeat scroll center top;">
    <div class="wrapper-intro-search">
        <h2 class="introduce-tag">{{ SupportDB::getOption('tag-theme-title-introduce') }}</h2>
        <h2 class="custommer-intro">{{ SupportDB::getOption('tag-theme-custommer-introduce') }}</h2>

        <form class="search-post-type" action="{{ Route('SEARCH_THEME') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="検索ウェブサイトテンプレート..">
            <button class="btn-search-post-type"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>
<div class="component-categories-theme">
    @foreach($tags as $index => $_tag )
    <h4 class="component-category-theme {{ $_tag->slug == $tag->slug ? 'active' : null }}">
        <a class="link-icon-theme" href="{{ Route('TAG_THEME_VIEW', ['slug' => $_tag->slug ]) }}">
            {!! $_tag->icon !!}
        </a>
        <a class="link-name-theme" href="{{ Route('TAG_THEME_VIEW', ['slug' => $_tag->slug ]) }}">
            {{ $_tag->name }}
        </a>
    </h4>
    @endforeach
</div>
<div class="component-intro-theme clearfix">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-danger">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                管理者に連絡しました。
                管理者が後で連絡します
            </div>
            @endif
            @if(!empty($errors->all()))
                @foreach ($errors->all() as $error)
                <div class="alert alert-warning">
                    {{ $error }}
                </div>
                @endforeach
            @endif
        </div>
    </div>

    @if($themes_in_tag)
    @foreach ($themes_in_tag as $theme)
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
@if($themes_in_tag)
<div class="pagination">
    {{ $themes_in_tag->onEachSide(3)->links() }}
</div>
@endif

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
        <input id="slug-hidden" name="slug" type="hidden" value="{{ $tag->slug }}">
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