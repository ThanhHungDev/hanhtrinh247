@extends('admin._layout')

@section('title', 'Trang Quản Trị')
@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin/_sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">đây là page dashboard</h2>
            </div>
        </div>
    </div>
</div>
@endsection
