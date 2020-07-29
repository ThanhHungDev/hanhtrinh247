<a class="logo-brand" href="{{ Route('ADMIN_DASHBOARD') }}">
    <img src="{{ asset('/icon-logo-fav.png') }}" alt="admin">
</a>
<a class="top-page-goto" href="{{ Route('TOP_PAGE') }}">
    <i class="hero-icon hero-home-import-outline"></i>
    <span>{{ Route('TOP_PAGE') }}</span>
</a>
<div class="admin-setting">
    <a class="avatar">
        @if(Auth::user())
        <img alt="" src="{{ asset(Auth::user()->avatar) }}" />
        @endif
        <i class="hero-icon hero-menu-down-outline icon-angle-down"></i>
    </a>
    <ul class="submenu">
        @if(Auth::user())
        <li><a href="javascript:void(0)">{{ Auth::user()->email }}</a></li>
        @endif
        <li><a href="{{ Route('ADMIN_LOGOUT') }}">logout</a></li>
    </ul>
</div>

