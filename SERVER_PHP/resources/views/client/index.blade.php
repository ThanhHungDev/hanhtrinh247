<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> @yield('title') </title>
    {{-- <meta name="robots" content="index, follow" /> --}}
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />

    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:image" content="@yield('image_seo')" />
    <meta property="og:description" content="@yield('description')" />
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">

    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('android-icon-192x192.png') }}"/>
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
</head>
<body>
    
    <div class="wrapper-page">
        <div class="component-header wrapper-header-home-page bg-gradient-home-page position-relative">
            <div class="component-menu menu-home-page">
                <ul class="wrapper-link">
                    <li>
                        <a aria-current="page" class="active" href="/">ホームページ</a>
                    </li>
                    <li>
                        <a href="/service">サービス</a>
                    </li>
                    <li>
                        <a href="/chat">チャット</a>
                    </li>
                    <li>
                        <a href="/theme">意匠</a>
                    </li>
                </ul>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6 col-sm-12 js-nomal-height">
                        <div class="component-logo">
                            <h2 class="logo">
                                <a aria-current="page" class="active" href="/">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa"><g class="fa-group"><path fill="currentColor" d="M12.41 236.31L70.51 210l161.63 73.27a57.64 57.64 0 0 0 47.72 0L441.5 210l58.09 26.33c16.55 7.5 16.55 32.5 0 40L266.64 381.9a25.68 25.68 0 0 1-21.29 0L12.41 276.31c-16.55-7.5-16.55-32.5 0-40z" class="fa-secondary"></path><path fill="currentColor" d="M12.41 148l232.94 105.7a25.61 25.61 0 0 0 21.29 0L499.58 148c16.55-7.51 16.55-32.52 0-40L266.65 2.32a25.61 25.61 0 0 0-21.29 0L12.41 108c-16.55 7.5-16.55 32.52 0 40zm487.18 216.11l-57.87-26.23-161.86 73.37a57.64 57.64 0 0 1-47.72 0L70.29 337.88l-57.88 26.23c-16.55 7.5-16.55 32.5 0 40L245.35 509.7a25.68 25.68 0 0 0 21.29 0l233-105.59c16.5-7.5 16.5-32.5-.05-40z" class="fa-primary"></path></g></svg> 
                                    EBUDEZAIN
                                </a>
                            </h2>
                        </div>
                        <h1 class="des-create-explore position-relative">
                            あなたのウェブサイトを作成
                            <div class="decor-element animated fadeIn">
                                <svg class="rotate-circle polygon-svg-rotate" viewBox="0 0 176 198" fill="none"><path opacity="0.05" d="M85.5 10.9904C87.047 10.0972 88.953 10.0972 90.5 10.9904L162.969 52.8301C164.516 53.7233 165.469 55.3739 165.469 57.1603V140.84C165.469 142.626 164.516 144.277 162.969 145.17L90.5 187.01C88.953 187.903 87.047 187.903 85.5 187.01L13.0314 145.17L8.03143 153.83L13.0314 145.17C11.4844 144.277 10.5314 142.626 10.5314 140.84V57.1603C10.5314 55.3739 11.4844 53.7233 13.0314 52.8301L85.5 10.9904Z" stroke="#020549" stroke-width="20"></path></svg>
                            </div>
                        </h1>
                        <div class="button-click-interactive">
                            <a class="btn btn-success btn-create-service animate-support animated tada" href="/service">利用サービス</a>
                            <a class="link-create-explore" href="/theme">探検する</a>
                        </div>
                        <h4 class="service-description">私たちはプロのウェブサイトデザインユニットです。 エブデザインは、日本企業の成長に対応できることをうれしく思います。</h4>
                        <a class="text-bordered" href="/chat">クリックしてチャット</a>
                    </div>
                    <div class="col-6 col-sm-12 pc">
                        <div class="component-web-design-image  position-relative" style="height: 612px;">
                            <img class="img-classic box-samples-img-1 animated jackInTheBox" src="image/general/img-sample-1-413x566.jpg" alt="" width="413" height="566" style="top: 20%;">
                            <img class="img-classic box-samples-img-2 animated rollIn" src="image/general/img-sample-2-413x566.jpg" alt="" width="413" height="566" style="top: 10%;">
                            <img class="img-classic box-samples-img-3 animated zoomIn" src="image/general/img-sample-3-413x566.jpg" alt="" width="413" height="566" style="bottom: 10%; right: 20%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/app.min.js') }}"></script>
</body>
</html>