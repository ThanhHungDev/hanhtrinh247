

@extends('client.layout.main')

@section('title', $topic->name)
@section('description', $topic->description_seo )
@section('keywords', $topic->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $topic->name . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $topic->description }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $topic->site_name }}" />
    <meta property="og:image" content="{{ $topic->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $topic->description }}" />
    <meta name="twitter:title" content="{{ $topic->name . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $topic->site_name }}" />
    <meta name="twitter:image" content="{{ $topic->image_seo }}" />
@endsection
@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>
@endsection
@section('content')

<div class="headfull" style="background: url('/images/background/bg-developer-pc.jpg') no-repeat scroll center top;">
    
    <div class="wrapper-intro-search__post-view">
        <h3 class="introduce__post-view">
            {{ $topic->excerpt }}
        </h3>
        <form class="search__post-view" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="検索ウェブサイトテンプレート..">
            <button class="btn-search__post-view"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>


<div class="search-detail">
    <div class="topic-website-selector">
        <div class="title-topic"> トピックの投稿 </div>
    </div>
    <div class="result-search">
        <div class="result-search__left">
            @if($posts_in_topic->isEmpty())
                検索結果はありません
            @else
            @foreach ($posts_in_topic as $post)
            <div class="wrapper-search-detail-block">
                <div class="background">
                    <a href="{{ Route('POST_VIEW', ['slug' => $post->slug]) }}">
                        <img src="{{ $post->background }}" alt="background-theme-{{ $post->title }}">
                    </a>
                </div>
                <div class="infor-theme-search">
                    <h3>
                        <a class="title-search-detail" href="{{ Route('POST_VIEW', ['slug' => $post->slug]) }}">
                            {!! $post->title !!}
                        </a>
                    </h3>
                    <small class="create-search-detail">
                        <span>
                            <i class="hero-icon hero-calendar"></i>
                            <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                        </span>
                    </small>
                    <h6 class="content-search-document">
                        {{ SupportString::limitText( $post->excerpt, 50, "..." ) }}
                    </h6>                    
                </div>
            </div>
            @endforeach
            <div class="pagination">
                {{ $posts_in_topic->onEachSide(3)->links() }}
            </div>
            @endif


        </div>
        
        <div class="result-search__right">

            @if($topics)
            <div class="wrapper__right-item">
                <div class="title__right-item">
                    <i class="hero-icon hero-scatter-plot-outline"></i>主題
                </div>
                <div class="description__r-tag">

                    @foreach ($topics as $topic)
                    <div class="tag__relate">
                        <div class="background__relate-tag">
                            <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                <img src="{{ $topic->background }}" alt="bg-tag-theme-{{ $topic->name }}">
                            </a>
                        </div>
                        <div class="content__relate-tag">
                            <h4 class="title_content__relate-tag">
                                <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                    {{-- {!! $tag->icon !!}  --}}
                                    {{ $topic->name }}
                                </a>
                            </h4>
                            <h5 class="create__relate-tag">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($topic->created_at ))}}</i>
                            </h5>
                            <h6 class="excerpt_content__relate-tag">
                                <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                    {{ SupportString::limitText( $topic->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    @endforeach
                    
                </div>
            </div>
            @endif

        </div>
    </div>
</div>





<div class="search-detail">
    
    <div class="result-search">
        <div class="result-search__left">
            

            <div class="content-tag-view">
                <h1 class="title__tag-view">
                    {{ $topic->name }}
                </h1>
                
                <div class="publisher">
                    <span>
                        <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                        {{ date('Y-m-d', strtotime($topic->created_at ))}}
                    </span>
                    <span>
                        <i class="hero-icon hero-eye-outline text-color-blue"></i>
                        {{ $topic->view }} 表示モード
                    </span>
                </div>
                
                <div class="main__tag-view-content">
                    {!! $topic->content !!}
                </div>
                
            </div>

        </div>
        
        <div class="result-search__right">

            @if(!$posts_relation->isEmpty())
            <div class="wrapper__right-item">
                <div class="title__right-item">
                    <i class="hero-icon hero-file-document-edit-outline"></i>興味があるかもしれません
                </div>
                <div class="description__r-tag">
                    @foreach ($posts_relation as $post)
                    <div class="tag__relate">
                        <div class="background__relate-tag">
                            <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                <img src="{{ $post->background }}" alt="bg-tag-theme-{{ $post->name }}">
                            </a>
                        </div>
                        <div class="content__relate-tag">
                            <h4 class="title_content__relate-tag">
                                <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                    {{-- {!! $tag->icon !!}  --}}
                                    {{ $post->title }}
                                </a>
                            </h4>
                            <h5 class="create__relate-tag">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                            </h5>
                            <h6 class="excerpt_content__relate-tag">
                                <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                    {{ SupportString::limitText( $post->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            @endif

        </div>
    </div>
</div>





@endsection