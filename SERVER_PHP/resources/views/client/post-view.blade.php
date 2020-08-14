

@extends('client.layout.main')

@section('title', $post->title)
@section('description', $post->description_seo )
@section('keywords', $post->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $post->description_seo }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $post->site_name }}" />
    <meta property="og:image" content="{{ $post->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $post->description_seo }}" />
    <meta name="twitter:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $post->site_name }}" />
    <meta name="twitter:image" content="{{ $post->image_seo }}" />

    <script type="application/ld+json">
        {
          "@context": "http://schema.org/",
          "@type": "Review",
          "author": "{{ $rateAuthor->username }}",
          "reviewBody": "{{ $post->excerpt }}",
          "itemReviewed": {
            "@type": "Post",
            "name": "{{ $post->title }}"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": {{ $post->rate_value }},
            "worstRating": 1,
            "bestRating": 5
          }
        }
        </script>
@endsection

@section('javascripts')
    
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/jquery.rateit.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>
@endsection
@section('content')

<div class="headfull__post-view" style="background: url('{{ $post->background }}') no-repeat scroll center top;">
    <div class="wrapper-intro-search__post-view">
        <h3 class="introduce__post-view">
            {{ $post->excerpt }}
        </h3>
        <form class="search__post-view" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="検索ウェブサイトテンプレート..">
            <button class="btn-search__post-view"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>

<div class="post-view-detail">
    <div class="result__post-view">
        <div class="result__post-view-left">
            <h1 class="title__post-view-left">
                {{ $post->title }}
            </h1>
            <div class="catalogue">
                <div class="catalogue__title">
                    目次 
                    <span>
                    [
                    <a class="catalogue__btn" href="javascript:void(0)" data-toggle="1" 
                    onclick="toggleCatalogue(this)">hide</a>
                    ]
                    </span>
                </div>
                <div class="catalogue__body">
                    {!!  $post->catalogue  !!}
                </div>
            </div>
            <div class="publisher">
                <span>
                    <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                    {{ date('Y-m-d', strtotime($post->created_at ))}}
                </span>
                <span>
                    <i class="hero-icon hero-eye-outline text-color-blue"></i>
                    {{ $post->view }} 表示モード
                </span>
            </div>
            <div class="rating__item">
                <div class="rateit" data-rateit-value="{{ $post->rate_value }}"  data-rateit-readonly="true"></div>
                <span>{{ $rateAuthor->username }}</span>
            </div>
            <div class="main-view-theme-content">
                {!! $post->content !!}
            </div>
            
        </div>
        
        <div class="result__post-view-right">
            <div class="wrapper__right-item">
                <div class="title__right-item">
                    <i class="hero-icon hero-tag-heart"></i>関連タグ
                </div>
                <div class="description__r-tag">
                    @foreach ($tags as $tag)
                    <div class="tag__relate">
                        <div class="background__relate-tag">
                            <a href="{{ Route('TAG_THEME_VIEW', ['slug' => $tag->slug ]) }}">
                                <img src="{{ $tag->background }}" alt="bg-tag-theme-{{ $tag->name }}">
                            </a>
                        </div>
                        <div class="content__relate-tag">
                            <h4 class="title_content__relate-tag">
                                <a href="{{ Route('TAG_THEME_VIEW', ['slug' => $tag->slug ]) }}">
                                    {{-- {!! $tag->icon !!}  --}}
                                    {{ $tag->name }}
                                </a>
                            </h4>
                            <h5 class="create__relate-tag">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($tag->created_at ))}}</i>
                            </h5>
                            <h6 class="excerpt_content__relate-tag">
                                <a href="{{ Route('TAG_THEME_VIEW', ['slug' => $tag->slug ]) }}">
                                    {{ SupportString::limitText( $tag->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection