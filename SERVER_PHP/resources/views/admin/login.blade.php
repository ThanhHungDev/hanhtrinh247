<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Admin login </title>
    @include('genneral/css/admin/login') 
    @include('genneral/css/animate') 
    @include('genneral/css/main') 
    @include('genneral/css/progress')
    @include('genneral/css/alert') 
</head>
<body>
    <div class="page-login blue-gradient-rgba animated fast fadeIn">
        <div class="login-form-control animated fast fadeIn">
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
                    <span class="svg-icon"> @include ("genneral/svg/email") </span>
                    <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Email Address" />
                </div>
                @if($errors->has('email'))
                    <div class="text-danger text-left">{{ $errors->first('email') }}</div>
                @endif
                <div class="input-group">
                    <span class="svg-icon"> @include ("genneral/svg/password") </span>
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