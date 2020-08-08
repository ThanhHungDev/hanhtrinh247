<div class="component-header wrapper-header-home-page position-relative">
    <div class="component-menu menu-home-page">
        <ul class="wrapper-link">
            <li><a class="{{ Route::is('HOME_PAGE') ? 'active' : null }}" href="{{ Route('HOME_PAGE') }}">ホームページ</a></li>
            <li><a class="{{ Route::is('SERVICE_LOAD') ? 'active' : null }}" href="{{ Route('SERVICE_LOAD') }}">サービス</a></li>
            <li><a class="{{ Route::is('CHAT') ? 'active' : null }}" href="{{ Route('CHAT') }}">チャット</a></li>
            <li><a class="{{ Route::is('THEME_LOAD') ? 'active' : null }}" href="{{ Route('THEME_LOAD') }}">意匠</a></li>
        </ul>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 js-nomal-height">
                <div class="component-logo">
                    <h2 class="logo">
                        <a href="{{ Route('HOME_PAGE') }}" class="link-logo">
                            @include('client.partial.icon-logo') {{ Config::get('app.company') }}
                        </a>
                    </h2>
                </div>
                <h1 class="des-create-explore position-relative">
                    あなたのウェブサイトを作成
                    <div class="decor-element animated fadeIn">
                        <svg class="rotate-circle polygon-svg-rotate" viewBox="0 0 176 198" fill="none">
                            <path opacity="0.05" d="M85.5 10.9904C87.047 10.0972 88.953 10.0972 90.5 10.9904L162.969 52.8301C164.516 53.7233 165.469 55.3739 165.469 57.1603V140.84C165.469 142.626 164.516 144.277 162.969 145.17L90.5 187.01C88.953 187.903 87.047 187.903 85.5 187.01L13.0314 145.17L8.03143 153.83L13.0314 145.17C11.4844 144.277 10.5314 142.626 10.5314 140.84V57.1603C10.5314 55.3739 11.4844 53.7233 13.0314 52.8301L85.5 10.9904Z" stroke="#020549" stroke-width="20"></path>
                        </svg>
                    </div>
                </h1>
                <div class="button-click-interactive">
                    <a class="btn btn-success btn-create-service animate-support animated tada" href="/service">利用サービス</a>
                    <a class="link-create-explore" href="/theme">探検する</a>
                </div>
                <h4 class="service-description">私たちはプロのウェブサイトデザインユニットです。 エブデザインは、日本企業の成長に対応できることをうれしく思います。</h4>
                <a class="text-bordered" href="/chat">クリックしてチャット</a>
            </div>
            <div class="col-md-6 pc">
                <div class="component-web-design-image  position-relative" style="height: 488px;">
                    <img class="img-classic box-samples-img-1 animated jackInTheBox" src="/images/home-page/img-sample-1-413x566.jpg" alt="" width="413" height="566" style="top: 70%;">
                    <img class="img-classic box-samples-img-2 animated rollIn" src="/images/home-page/img-sample-2-413x566.jpg" alt="" width="413" height="566" style="top: -40%;">
                    <img class="img-classic box-samples-img-3 animated zoomIn" src="/images/home-page/img-sample-3-413x566.jpg" alt="" width="413" height="566" style="bottom: -40%; right: -30%;">
                </div>
            </div>
        </div>
    </div>
</div>