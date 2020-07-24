@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">insert post </h2>
            </div>
        </div>
        <div class="admin-wrapper-content-field">
            <div class="row">
                <div class="col-12">
                    @if (Session::has('SAVE_ERROR'))
                    <div class="alert alert-warning">
                        {{ Session::get('SAVE_ERROR') }}
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
            <form class="row js-validate-form" action="{{ Route('ADMIN_POST_INSERT_POST') }}" method="POST">
                {!! csrf_field() !!}
                <div class="col-md-8">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">title post</h2>
                            <input name="title" type="text" value="{{ old('title', $post->title ) }}" onblur="isExistSlug(this.value)" />
                            <input name="slug" type="hidden" value="{{ old('slug', $post->slug ) }}" />
                        </div>
                    </div>
                    
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">excerpt -- đoạn trích</h2>
                            <textarea  class="height-150px" name="excerpt" cols="30" rows="10">{{ old('excerpt', $post->excerpt) }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">content</h2>
                            <textarea name="content" id="editor1" class="h-100">{{ old('content') }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4" id="js-check-slug">
                            <h2 class="title">site name SEO</h2>
                            <input name="site_name" type="text" value="{{ old('site_name') }}" />
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4" id="js-check-slug">
                            <h2 class="title">hình ảnh SEO</h2>
                            <div class="position-relative">
                                <input name="image_seo" type="text" value="{{ old('image_seo') }}" />
                                <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                                type="button" onclick="selectImageInputWithCKFinder(this)">chọn ảnh</button>
                            </div>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">meta keyword</h2>
                            <textarea class="height-150px" name="keyword_seo" cols="30" rows="10">{{ old('keyword_seo') }}</textarea>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <h2 class="title">meta description</h2>
                            <textarea class="height-150px" name="description_seo" cols="30" rows="10">{{ old('description_seo') }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <section class="pb-4">
                                <h2 class="title text-center">bấm lưu mới 1 post</h2>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-save-data">
                                        Save
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <section class="pb-4">
                                <h2 class="title text-center">chọn topic</h2>
                                @if($topics)
                                <select name="topic_id" class="js-multi-select">
                                    <option value="">chọn topic</option>
                                    @foreach($topics as $topic)
                                    <option @if(old('topic') == $topic->id) {{ 'selected' }} @endif
                                    value="{{ $topic->id }}">{{ $topic->name }}</option>
                                    @endforeach
                                </select>
                                @endif
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <section class="pb-4">
                                <h2 class="title text-center">thiết lập background</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectThumbnailWithCKFinder('thumbnail-topic')"
                                        class="btn btn-select-thumb">
                                        Select background
                                    </button>
                                </div>
                                <div id="thumbnail-topic">
                                    <input name="thumbnail" class="thumbnail-topic pb-2" 
                                        type="text" value="{{ old('thumbnail') }}" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row block-content">
                        <div class="col-12 bg-color-white shadows-1 px-4 py-4">
                            <section class="pb-4">
                                <h2 class="title text-center">setup thumbnail</h2>
                                <div class="text-center">
                                    <button type="button" onclick="selectThumbnailWithCKFinder('thumbnail-topic')"
                                        class="btn btn-select-thumb">
                                        Select Thumbnail
                                    </button>
                                </div>
                                <div id="thumbnail-topic">
                                    <input name="thumbnail" class="thumbnail-topic pb-2" 
                                        type="text" value="{{ old('thumbnail') }}" />
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