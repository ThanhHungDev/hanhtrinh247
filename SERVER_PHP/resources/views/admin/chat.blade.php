@extends('admin._layout')

@section('title', 'Trang Quản Trị')
@section('javascripts')
    <script>
        localStorage.setItem('auth', null)
        const CONFIG_APP = {!! json_encode(Config::get('SPA'), JSON_PRETTY_PRINT) !!};
        const CONFIG_EVENT = {!! json_encode(Config::get('event-chat'), JSON_PRETTY_PRINT) !!};
        const CONFIG_EMOJIS = {!! json_encode(Config::get('emoji'), JSON_PRETTY_PRINT) !!};
    </script>
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
    <script src="{{ asset('js/index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/vendors~main.index.bundle.js' . Config::get('app.version')) }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin/_sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">
                    đây là page chat
                </h2>
            </div>
        </div>
        <div id="ROOT" class="position-relative text-center">loading...</div>
    </div>
</div>
@endsection
