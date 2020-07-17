@section('title', 'Mypage')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/slick-theme.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="employer">
    <div class="max-width-1080 emp-mypage">
        <div class="nav-mypage nav-top">
            <a href="{{ Route('EMPLOYER_EDIT_PROFILE')}} ">
                <button class="btn btn-edit">編集する</button>
            </a>
            {{-- <button class="btn btn-register">登録する</button> --}}
            <a href="{{ Route('EMPLOYER_CHAT') }}">
                <button class="btn btn-chat"><img src="{{asset('image/icons/icon-message.png')}}" alt="" srcset=""> チャットする
                </button>
            </a>
        </div>
        <div class="body-mypage ">
            <div class="row wapper-mypage">
                <div class="col-md-4 col-xs-12 left-mypage">
                    <div class="em-wapper-image">
                        <div class="em-avatar boder-img">
                            @if($profile['avatar'] != '')
                                <img type="avatar" src="{{ asset($profile['avatar']) }}" alt="{{handelGetAvatarName($profile['avatar'])}}">
                            @else
                                <img type="avatar" class="image" src="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" alt="">
                            @endif
                            <img src="{{ asset('image/icons/icon-upload.png') }}" class="upload-icon" alt="upload avatar">
                            <div data-status="@if(!empty($profile['avatar'])){{'active'}}@endif" class="delete_avatar">
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div class="em-identity-card boder-img">
                            @foreach ($galaries as $item_galaries)
                                <img src="{{ asset($item_galaries->path.$item_galaries->name) }}" alt="{{$item_galaries->url}}">
                            @endforeach
                        </div>
                        <input type="file" accept="image/*" onchange="uploadAvatar(this);" name="avatar" style = "display:none" id="">
                    </div>
                    <div class="em-note">
                        <p>身分証は公開されません</p>
                    </div>
                </div>
                <div class="col-md-8 col-xs-12 right-mypage">
                    <div class="em-wapper-info">
                        {{-- nick name --}}
                        <div class="em-title-info">
                            ニックネーム
                        </div>
                        <div class="em-content-info">
                            <p>{{ @$profile['nick_name'] }}</p>
                        </div>

                        {{-- full address --}}
                        <div class="em-title-info">
                            お住まい
                        </div>
                        <div class="em-content-info">
                            <p>{{ @$profile['full_address'] }}</p>
                        </div>

                        {{-- family info --}}
                        <div class="em-title-info">
                            家族構成・お子さま
                        </div>

                        <div class="em-content-info">
                            @foreach ($family as $item)

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.CHILD'))
                                    {{-- child --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-5 pl-0">
                                                    <label class="label-color" for="">お子様のお名前</label>
                                                </div>
                                                <div class="col-md-7 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳{{ $item['age_month'] }}ヶ月</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-6 pl-0">
                                                    <label class="label-color" for="">性別</label>
                                                </div>
                                                <div class="col-md-6 pl-0">
                                                    <p>{{ $item['gender'] == config('constant.GENDER.FEMALE') ? '女の子' : '男の子'}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-5 pl-0">
                                                    <label class="label-color" for="">アレルギー</label> <span> @if($item['allergic']) 有 @else 無 @endif</span>
                                                </div>
                                                <div class="col-md-7 pl-0">
                                                    <label class="label-color" for="">持病、特別なケア</label> <span> @if($item['chronic']) 有 @else 無 @endif </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-5">
                                        </div>

                                        <div class="col-md-2">
                                        </div>
                                    </div>
                                    {{-- end child --}}
                                @endif

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.FATHER'))
                                    {{-- parent --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-5 pl-0">
                                                    <label class="label-color" for="">夫のお名前</label>
                                                </div>
                                                <div class="col-md-7 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    {{-- end father --}}
                                @endif

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.MOM'))
                                    {{-- parent --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-5 pl-0">
                                                    <label class="label-color" for="">妻のお名前</label>
                                                </div>
                                                <div class="col-md-7 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    {{-- end father --}}
                                @endif
                            @endforeach
                        </div>

                        {{-- message --}}
                        <div class="em-title-info">
                            シッターさんへのメッセージ
                        </div>
                        <div class="em-content-info">
                        <p>{{ @$profile['note'] }}</p>
                        </div>
                        {{-- end message --}}
                    </div>
                    <div class="em-note">
                        <p>上記情報がベビーシッターさんにお伝えされます</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-mypage nav-bottom">
            <a href="{{ Route('EMPLOYER_EDIT_PROFILE')}} ">
                <button class="btn btn-edit">編集する</button>
            </a>
            {{-- <button class="btn btn-register">登録する</button> --}}
            <a href="{{ Route('EMPLOYER_CHAT') }}">
                <button class="btn btn-chat"><img src="{{asset('image/icons/icon-message.png')}}" alt="" srcset=""> チャットする
                </button>
            </a>
        </div>

    </div>
</div>
{{-- data hidden upload avatar --}}
<form action="{{ route('AJAX_UPLOAD_AVATAR') }}" class="form-upload-avatar" method="post"></form>
<form action="{{ route('REMOVE_FILE') }}" class="form-delete-avatar" method="post"></form>
<input type="hidden" name="type_upload_file" value="{{config('constant.UPLOAD_FILE.AVATAR')}}">
<input type="hidden" name="link_image" value="{{ asset('') }}">
<input type="hidden" name="link_image_df" value="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}">
{{-- end --}}
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/employer-mypage.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/employer-upload-avatar.min.js') }}"></script>
@endsection