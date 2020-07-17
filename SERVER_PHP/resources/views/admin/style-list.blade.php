@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("layout/admin/partial/sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">danh sách style </h2>
            </div>
        </div>
        <div class="admin-wrapper-content-field">
            <div class="row block-content">
                <div class="col-12 bg-white shadows-1 px-4 py-4 ">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>keyword</th>
                                    <th>description</th>
                                    {{-- <th>#remove#</th> --}}
                                </tr>
                            </thead>
                            <tbody>
                                @foreach( $styles as $style)
                                <tr>
                                    <td>
                                        <a href="{{ Route("ADMIN_GET_EDIT_STYLE", ['id' =>  $style->id]) }}">
                                            {{ limitText($style->name, 30) }}
                                        </a>
                                    </td>
                                    <td>{{ limitText($style->keyword_seo, 30) }}</td>
                                    <td>{{ limitText($style->description_seo, 30) }}</td>
                                    {{-- <td>
                                        <button type="button"
                                        onclick="deleteSlug('{{ $style->id }}', this)"
                                        class="bg-transparent btn-remove-row">
                                            @include ("genneral/svg/remove")
                                        </button>
                                    </td> --}}
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


@section('js_custom_page')
<script>
    var ADMIN_DELETE_STYLE = "{{ Route('ADMIN_DELETE_STYLE', ['id' => null ])}}";
    function deleteSlug( id, element ){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': "{{ csrf_token() }}"
            }
        });
        $.ajax({
            type: "DELETE",
            url: ADMIN_DELETE_STYLE + '/' +id , 
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