@extends('admin._layout')

@section('title', 'Thêm rating')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/library/wanakana.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
    <script src="{{ asset('js/validate.rating.min.js') }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left"> {{ $rating->id ? 'chỉnh sửa rating' : 'thêm mới rating'}} </h2>
            </div>
        </div>
        <div class="admin-wrapper-content-field">
            <div class="row">
                <div class="col-12">
                    @if (Session::has(Config::get('constant.SAVE_ERROR')))
                    <div class="alert alert-warning">
                        {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
                    </div>
                    @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
                    <div class="alert alert-success">
                        lưu rating thành công
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
            <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_RATING', ['id' => $rating->id]) }}" method="POST">
                {!! csrf_field() !!}
                <div class="col-md-8">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">tên rating</h2>
                            <input name="username" type="text" value="{{ old('username', $rating->username ) }}"/>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4" id="js-check-slug">
                            <h2 class="title">avatar</h2>
                            <div class="position-relative wrapper__selectImageWithCKFinder type-select-ckfinder__inline">
                                <input name="avatar" class="img__outputCKFinder" type="text" value="{{ old('avatar', $rating->avatar) }}" />
                                <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                                type="button" onclick="selectImageWithCKFinder(this)">chọn ảnh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <section class="pb-4">
                                <h2 class="title text-center">bấm lưu mới rating</h2>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-save-data">
                                        Lưu
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection