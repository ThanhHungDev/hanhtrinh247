

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
    <script src="{{ asset('js/library/jquery.validate.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/validate.contact.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>

    <script src='https://www.google.com/recaptcha/api.js'></script>
@endsection
@section('content')
<div class="component-contact">

    <div id="map-contact-canvas" class="map-contact"></div>
    <div class="form-contact">

        <h1 class="contact-intro">プロのウェブサイトデザイン会社</h1>
        <h2 class="title-contact">連絡先</h2>
        <div class="left-infor">
            <h2 class="mycompany">{{ Config::get('app.company_name') }}</h2>
            <div class="contact-address">
                <div class="company-name">
                    <i class="hero-icon hero-account-group-outline"></i>
                    <span>{{ Config::get('app.company_name') }}</span>
                </div>
                <div class="tax-code-date">
                    <i class="hero-icon hero-update"></i>
                    <span> {{ Config::get('app.tax_code_date') }} </span>
                </div>
                <div class="address">
                    <i class="hero-icon hero-home-map-marker"></i>
                    <span>{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}</span>
                </div>
                <div class="phone">
                    <i class="hero-icon hero-cellphone-nfc"></i>
                    <span>
                        日本の電話：
                        <a href="tel:{{ Config::get('app.phone_one') }}">
                            {{ Config::get('app.phone_one') }}
                        </a>
                    </span>
                </div>
                <div class="email">
                    <i class="hero-icon hero-card-account-mail-outline"></i>
                    <span>
                        <a href="mailto:{{ Config::get("app.company_mail") }}">
                            {{ Config::get("app.company_mail") }}
                        </a>
                    </span>
                </div>
            </div>
            <h3 class="intro-chat-contact">
                あなたは私たちのチャットアカウントを作成し、管理者からインセンティブを受け取ることができます
                <a href="/chat" >チャットページに行く</a>
            </h3>
        </div>
        <div class="right-form-contact">
            <form class="js-validate-form" action="{{ Route('MAIL_CONTACT') }}" method="post">
                {!! csrf_field() !!}
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
                <div class="form-input">
                    <label> あなたのフルネーム <i>✵</i></label>
                    <input name="name" type="text" value="{{ old('name' ) }}"/>
                </div>
                <div class="form-input">
                    <label> メールアドレス <i>✵</i></label>
                    <input name="email" type="text" value="{{ old('email' ) }}"/>
                </div>
                <div class="form-input">
                    <label> 電話番号 <i>✵</i></label>
                    <input name="mobile" type="text" value="{{ old('mobile' ) }}" />
                </div>
                <div class="form-input">
                    <label> メッセージ内容 </label>
                    <textarea name="message" class="" >{{ old('message' ) }}</textarea>
                </div>
                <!-- Google reCaptcha -->
                <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY')  }}"></div>
                <!-- End Google reCaptcha -->
                <button class="btn-send-mail-contact">メール管理者に送信</button>
            </form>
        </div>
    </div>
    
</div>
@endsection