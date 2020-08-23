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
            @php $services = SupportDB::getMenuFullService(); @endphp
            <li class='dropdown-menu'>
                <a class="{{ Route::is('SERVICE_LOAD', 'SERVICE_POST') }}" href="{{ Route('SERVICE_LOAD') }}">サービス</a>
                <i class='hero-icon hero-plus-outline' onclick="activeMenuMobile()"></i>
                <ul class="sub-link">
                    @foreach ($services as $item)
                    <li><a href="{{ Route($item->route, [ 'slug' => $item->slug ]) }}">{{ $item->text }}</a></li>
                    @endforeach
                </ul>
            </li>
            <li class='dropdown-menu'>
                <a class="{{ Route::is('CHAT') ? 'active' : null }}">チャット</a>
                <i class='hero-icon hero-plus-outline' onclick="activeMenuMobile()"></i>
                <ul class="sub-link">
                    <li>
                        <a href="{{ Route('CHAT', ['slug' => 'consulting-web-design']) }}">
                            {{ SupportDB::getOption('text-link-consulting-web-design') }}
                        </a>
                    </li>
                    <li>
                        <a href="{{ Route('CHAT', ['slug' => 'technical-support']) }}">
                            {{ SupportDB::getOption('text-link-advisory-system') }}
                        </a>
                    </li>
                    <li>
                        <a href="{{ Route('CHAT', ['slug' => 'submit-web-request']) }}">
                            {{ SupportDB::getOption('text-link-submit-web-request') }}
                        </a>
                    </li>
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
                <a class="{{ Route::is('POST_VIEW') ? 'active': null }}"
                href="{{ Route('POST_VIEW', ['slug' => 'investor']) }}">投資家</a>
            </li>
            
        </ul>
    </div>
    <div class="component-button-hambeger mobile" onclick="toggleMenu()">
        @include('client.partial.icon-align-justify')
    </div>
</div>