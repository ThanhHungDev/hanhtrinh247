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
    <script src="{{ asset('js/validate.post.min.js') }}"></script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">danh sách bài đăng</h2>
            </div>
        </div>
        <div class="admin-wrapper-content-field">
            <div class="row block-content">
                <div class="col-12 bg-white shadows-1 px-4 py-4 ">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>keyword</th>
                                    <th>description</th>
                                    <th>#remove#</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach( $posts as $post)
                                <tr>
                                    <td>
                                        <a href="{{ Route("ADMIN_GET_EDIT_POST", ['id' =>  $post->id]) }}">
                                            {{ $post->getTitle(30) }}
                                        </a>
                                    </td>
                                    <td>{{ $post->getKeywordSeo(30) }}</td>
                                    <td>{{ $post->getDescriptionSeo(30) }}</td>
                                    <td>
                                        <button type="button"
                                        onclick="deleteSlug('{{ $post->id }}', this)"
                                        class="bg-transparent btn-remove-row">
                                            <i class="hero-icon hero-delete-variant"></i>
                                        </button>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="pagi">
                        {{ $posts->onEachSide(3)->links() }}
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection


@section('js_custom_page')
<script>
    var ADMIN_DELETE_POST = "{{ Route('ADMIN_DELETE_POST', ['id' => null ])}}";
    function deleteSlug( id, element ){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': "{{ csrf_token() }}"
            }
        });
        $.ajax({
            type: "DELETE",
            url: ADMIN_DELETE_POST + '/' +id , 
            data : {},
            dataType:"JSON",
            success: function(response){
                if(response.status == 200){
                    $( element ).closest('tr').remove();
                }
            }
        });
    }
</script>
@endsection