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

    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('android-icon-192x192.png' }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png' }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon-96x96.png' }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png' }}">
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' }}">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    @yield('stylesheets')

</head>
<body>
<div class="page-login blue-gradient-rgba animated fast fadeIn">
        <div class="login-form-control animated fast fadeIn">
            <form class="login-form" action="http://ebudezain.com/admin/login" method="POST">
                <input type="hidden" name="_token" value="tYUF2h4rY0klaqVACrS6TmQVRykeBCP2yj9dDNk1">
                                                <h1 class="title"> Welcome Admin </h1>
                <div class="input-group">
                    <span class="svg-icon"> <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa">
    <path fill="#adb5bd" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" stroke="none" stroke-width="1px"></path>
</svg> </span>
                    <input name="email" ref="email" type="text" autocorrect="off" autocapitalize="none" class="input-control" placeholder="Email Address">
                </div>
                                <div class="input-group">
                    <span class="svg-icon"> <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="lock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa">
    <path fill="#adb5bd" d="M224 420c-11 0-20-9-20-20v-64c0-11 9-20 20-20s20 9 20 20v64c0 11-9 20-20 20zm224-148v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h16v-64C64 71.6 136-.3 224.5 0 312.9.3 384 73.1 384 161.5V224h16c26.5 0 48 21.5 48 48zM96 224h256v-64c0-70.6-57.4-128-128-128S96 89.4 96 160v64zm320 240V272c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z" stroke="none" stroke-width="1px"></path>
</svg> </span>
                    <input name="password" ref="password" type="password" autocorrect="off" autocapitalize="none" class="input-control" placeholder="Password">
                </div>
                                <button type="submit" class="btn btn-login blue-gradient-rgba">
                    Log In Admin
                </button>
            </form>
        </div>
    </div>
</body>
</html>