<div class="component-header wrapper-header position-relative">
    <div class="component-logo">
        <h2 class="logo">
            <a href="{{ Route('HOME_PAGE') }}" class="link-logo">
                @include('client.partial.icon-logo') {{ Config::get('app.company') }}
            </a>
        </h2>
    </div>
    <div id='js-toggle-menu-mobile' class="component-menu menu-full">
        <span class="mobile head-line-close-menu" onclick="closeMenuToggle()">
            <i class='hero-icon hero-close-box-outline'></i>
        </span>
        <ul class="wrapper-link">
            <li>
                <a class="{{ Route::is('HOME_PAGE') ? 'active': null }}"
                    href="{{ Route('HOME_PAGE') }}" >ホームページ</a>
            </li>
            <li class='dropdown-menu'>
                <a class="{{ Route::is('SERVICE_LOAD', 'SERVICE_POST') }}" href="{{ Route('SERVICE_LOAD') }}">サービス</a>
                <i class='hero-icon hero-plus-outline' onclick="activeMenuMobile()"></i>
                <ul class="sub-link">
                    <li><a href="{{ Route('SERVICE_POST', [ 'slug' => 'system' ]) }}">サービス</a></li>
                    <li><a href="{{ Route('SERVICE_POST', [ 'slug' => 'hung' ]) }}">hùng</a></li>
                    <li><a href="{{ Route('SERVICE_POST', [ 'slug' => 'nhin' ]) }}">sdfs</a></li>
                </ul>
            </li>
            <li class='dropdown-menu'>
                <a href="/chat">チャット</a>
                <i class='hero-icon hero-plus-outline' onclick="activeMenuMobile()"></i>
                <ul class="sub-link">
                    <li><a href="/chat/consulting-web-design">コンサルティングウェブデザイン</a></li>
                    <li><a href="/chat/technical-support">技術サポート</a></li>
                    <li><a href="/chat/submit-web-request">ウェブサイト作成依頼</a></li>
                </ul>
            </li>
            <li>
                <a class="{{ Route::is('THEME_LOAD') ? 'active': null }}"
                href="{{ Route('THEME_LOAD') }}">意匠</a>
            </li>
            <li>
                <a class="{{ Route::is('CONTACT_PAGE') ? 'active': null }}"
                href="{{ Route('CONTACT_PAGE') }}">お問い合わせ</a>
            </li>
            <li>
                <a class="{{ Route::is('INVESTOR_PAGE') ? 'active': null }}"
                href="{{ Route('INVESTOR_PAGE') }}">投資家</a>
            </li>
            
        </ul>
    </div>
    <div class="component-button-hambeger mobile" onclick="toggleMenu()">
        @include('client.partial.icon-align-justify')
    </div>
</div>