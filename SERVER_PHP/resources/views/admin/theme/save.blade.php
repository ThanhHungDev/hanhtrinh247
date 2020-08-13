@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/library/wanakana.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
    <script src="{{ asset('js/validate.theme.min.js') }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left"> {{ $theme->id ? 'chỉnh sửa theme' : 'thêm mới theme'}} </h2>
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
                        lưu bài viết thành công
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
            <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_THEME', ['id' => $theme->id]) }}" method="POST">
                {!! csrf_field() !!}
                <div class="col-md-8">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">title theme</h2>
                            <input name="title" type="text" value="{{ old('title', $theme->title ) }}" onblur="isExistSlug(this.value)" />
                            <input name="slug" type="hidden" value="{{ old('slug', $theme->slug ) }}" />
                        </div>
                    </div>

                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">tên người design</h2>
                            <input name="author" type="text" value="{{ old('author', $theme->author ) }}" />
                        </div>
                    </div>

                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">url</h2>
                            <input name="url" type="text" value="{{ old('url', $theme->url ) }}" />
                        </div>
                    </div>
                    
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">excerpt -- đoạn trích</h2>
                            <textarea  class="height-80px" name="excerpt" cols="30" rows="10">{{ old('excerpt', $theme->excerpt) }}</textarea>
                        </div>
                    </div>

                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">description</h2>
                            <textarea name="description" id="editor2" class="h-100">{{ old('description', $theme->description) }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">content</h2>
                            <textarea name="content" id="editor1" class="h-100">{{ old('content', $theme->content) }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">site name SEO</h2>
                            <input name="site_name" type="text" value="{{ old('site_name', $theme->site_name) }}" />
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">hình ảnh SEO</h2>
                            <div class="position-relative wrapper__selectImageWithCKFinder type-select-ckfinder__inline">
                                <input name="image_seo" class="img__outputCKFinder" type="text" value="{{ old('image_seo', $theme->image_seo) }}" />
                                <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                                type="button" onclick="selectImageWithCKFinder(this)">chọn ảnh</button>
                            </div>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">meta keyword</h2>
                            <textarea class="height-80px" name="keyword_seo" cols="30" rows="10">{{ old('keyword_seo', $theme->keyword_seo) }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <h2 class="title">meta description</h2>
                            <textarea class="height-80px" name="description_seo" cols="30" rows="10">{{ old('description_seo', $theme->description_seo) }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4">
                                <h2 class="title text-center">bấm lưu mới theme</h2>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-save-data">
                                        Lưu
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4">
                                <h2 class="title text-center">chọn tag</h2>
                                @if($tags)
                                <select name="tag_id[]" class="js__multi-select" multiple="multiple">
                                    @foreach($tags as $tag)
                                    <option @if(collect(old('tag_id', $tags_id ?? null ))->contains($tag->id)) {{ 'selected' }} @endif
                                    value="{{ $tag->id }}">{{ $tag->name }}</option>
                                    @endforeach
                                </select>
                                @endif
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4 wrapper__selectImageWithCKFinder">
                                <h2 class="title text-center">thiết lập background</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectImageWithCKFinder(this)"
                                        class="btn btn-select-thumb">
                                        Select background
                                    </button>
                                </div>
                                <div class="group-control-img-ckfinder">
                                    <input name="background" class="img__outputCKFinder thumbnail-topic pb-2" 
                                        type="text" value="{{ old('background', $theme->background) }}" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4 wrapper__selectImageWithCKFinder">
                                <h2 class="title text-center">setup image laptop</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectImageWithCKFinder(this)"
                                        class="btn btn-select-thumb">
                                        Select image laptop
                                    </button>
                                </div>
                                <div class="group-control-img-ckfinder">
                                    <input name="image_laptop" class="img__outputCKFinder thumbnail-topic pb-2" 
                                        type="text" value="{{ old('image_laptop', $theme->image_laptop) }}" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4 wrapper__selectImageWithCKFinder">
                                <h2 class="title text-center">setup image tablet</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectImageWithCKFinder(this)"
                                        class="btn btn-select-thumb">
                                        Select image tablet
                                    </button>
                                </div>
                                <div class="group-control-img-ckfinder">
                                    <input name="image_tablet" class="img__outputCKFinder thumbnail-topic pb-2" 
                                        type="text" value="{{ old('image_tablet', $theme->image_tablet) }}" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                            <section class="pb-4 wrapper__selectImageWithCKFinder">
                                <h2 class="title text-center">setup image mobile</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectImageWithCKFinder(this)"
                                        class="btn btn-select-thumb">
                                        Select image mobile
                                    </button>
                                </div>
                                <div class="group-control-img-ckfinder">
                                    <input name="image_mobile" class="img__outputCKFinder thumbnail-topic pb-2" 
                                        type="text" value="{{ old('image_mobile', $theme->image_mobile) }}" />
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