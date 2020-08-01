@extends('admin._layout')

@section('title', 'Thêm option')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/library/wanakana.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left"> {{ 'chỉnh sửa option' }} </h2>
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
                        lưu option thành công
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
            <form class="row js-validate-form page-edit-option" action="{{ Route('ADMIN_SAVE_OPTION') }}" method="POST">
                {!! csrf_field() !!}
                <div class="col-md-8">
                    @if($options)
                    @foreach ($options as $index => $option)
                        <div class="row block-content js-group-option">
                            <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                                <div class="row py-1">
                                    <div class="col-6" id="js-input-key-option-{{ $index }}">
                                        <input name="key[]" type="text" value="{{ $option->key }}" />
                                    </div>
                                    <div class="col-6 js-clone-select-option">
                                        <select id="select2-{{ $index }}" name="type[]" class="js__single-select js__select_option_type_format" onchange="listenChangeTypeOption(this)">
                                            @foreach(Config::get('constant.TYPE_OPTION') as $key => $type__option)
                                            <option type="{{ 'type.'.$index . "-". $option->type }}" @if(old('type.'.$index, $option->type) == $type__option) {{ 'selected' }} @endif
                                            value="{{ $type__option }}">{{ $key }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="py-1 js-clone-value-option">
                                    <input name="value_text[]" type="text" value="{{ old('value_text.'.$index, $option->value_text) }}" />
                                    <textarea id="ckeditor-{{ $index }}" name="value_html[]" class="h-100 d-none">{{ old('value_html.'.$index, $option->value_html) }}</textarea>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    @endif

                    <div class="row">
                        <div class="col-12 text-right">
                            <button type="button" onclick="addMoreBlock()" class="btn btn-success"> 
                                Add More 
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4">
                                <h2 class="title text-center">bấm lưu mới option</h2>
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