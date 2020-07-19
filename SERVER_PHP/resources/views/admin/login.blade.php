<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> login admin </title>
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
    <link rel="stylesheet" href="{{ asset('css/admin.css')}}">
    @yield('stylesheets')

</head>
<body>

    <div class="login-admin-page purple-gradient-rgba animated fast fadeIn">
        <div class="login-form-wrapper">
            <form class="login-form" action="{{ Route('ADMIN_POST_LOGIN') }}" method="POST" >
                {!! csrf_field() !!}
                @if (Session::has('LOGIN_ERROR'))
                <div class="alert alert-warning">
                    {{ Session::get('LOGIN_ERROR') }}
                </div>
                @endif
                @if($errors->any())
                <div class="alert alert-danger">
                    đã có lỗi, vui lòng kiểm tra lại
                </div>
                @endif
                <h1 class="title"> Welcome Admin </h1>
                <div class="input-group">
                    <i class="hero-icon hero-email-check-outline"></i>
                    <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Email Address" />
                </div>
                @if($errors->has('email'))
                    <div class="text-danger text-left">{{ $errors->first('email') }}</div>
                @endif
                <div class="input-group">
                    <i class="hero-icon hero-lock-outline"></i>
                    <input name="password" ref="password" type="password" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Password" />
                </div>
                @if($errors->has('password'))
                    <div class="text-danger text-left">{{ $errors->first('password') }}</div>
                @endif
                <button type="submit" class="btn btn-login blue-gradient-rgba">
                    Log In Admin
                </button>
            </form>
        </div>
    </div>
</body>
</html>

    