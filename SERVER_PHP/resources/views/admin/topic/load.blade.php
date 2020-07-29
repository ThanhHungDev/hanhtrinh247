@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script>
        var ADMIN_DELETE_POST = "{{ Route('ADMIN_DELETE_TOPIC', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_POST == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_TOPIC")
            }
            if (result) {
                /// delete
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
                            $( element ).closest('.row').remove();
                        }
                    }
                });
            }
        }
    </script>
@endsection

@section('content_admin')
<div class="wrapper-admin-page">
    @include ("admin._sidebar")
    <div class="admin-main-content">
        <div class="page-title">
            <div class="clear">
                <h2 class="headding float-left">danh sách topic</h2>
            </div>
        </div>
        <div class="admin-wrapper-content-field">
            <div class="row block-content">
                <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
                    <div class="row thead-list">
                        <div class="col-4">name</div>
                        <div class="col-4">keyword</div>
                        <div class="col-3">description</div>
                        <div class="col-1">#remove#</div>
                    </div>
                    @foreach( $topics as $topic)
                    <div class="row trow-list">
                        <div class="col-4">
                            <a href="{{ Route("ADMIN_STORE_TOPIC", ['id' =>  $topic->id]) }}">
                                {{ $topic->getName(30) }}
                            </a>
                        </div>
                        <div class="col-4">{{ $topic->getKeywordSeo(30) }}</div>
                        <div class="col-3">{{ $topic->getDescriptionSeo(30) }}</div>
                        <div class="col-1">
                            <button type="button"
                            onclick="deleteComponent('{{ $topic->id }}', this)"
                            class="bg-transparent btn-remove-row">
                                <i class="hero-icon hero-delete-variant"></i>
                            </button>
                        </div>
                    </div>
                    @endforeach

                    <div class="pagi">
                        {{ $topics->onEachSide(3)->links() }}
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
