<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="clear position-relative">
                <ul class="btn-admin-setting float-right">
                    <li>
                        <a>
                            @if(Auth::user())
                            <img class="avatar" alt="" src="{{ asset(Auth::user()->avatar) }}" />
                            @endif
                            <i class="hero-icon hero-menu-down-outline icon-angle-down"></i>
                        </a>
                        <ul class="submenu">
                            @if(Auth::user())
                            <li><a href="javascript:void(0)">{{ Auth::user()->email }}</a></li>
                            @endif
                            <li><a href="{{ Route('ADMIN_LOGOUT') }}">logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>