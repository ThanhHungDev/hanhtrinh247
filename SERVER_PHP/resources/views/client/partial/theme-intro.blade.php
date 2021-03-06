<div class="component-intro-theme">
    <div class="topic-website-selector">
        <div class="title-topic">絶妙なデザイン</div>
    </div>
    <div class="component-intro-theme">
        
        @foreach ($themes as $theme)
        <div class="component-item-theme wrapper-item-theme">
            <figure class="box-modern-figure">
                <a class="theme-img-scroll" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">
                    <img src="{{ $theme->image_laptop }}" alt="">
                </a>
                <figcaption class="box-modern-title">
                    <h5 class="name">{{ $theme->title }}</h5>
                    <h6 class="author">by {{ $theme->author }}</h6>
                    <a class="btn-trial" href="{{ Route('THEME_VIEW', ['slug' => $theme->slug]) }}">裁判</a>
                </figcaption>
            </figure>
        </div>
        @endforeach
    </div>
</div>