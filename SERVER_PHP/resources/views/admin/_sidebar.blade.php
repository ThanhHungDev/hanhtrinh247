<div class="admin-sidebar bg-unique-color-dark">
    <a class="logo-sidebar line-height-0" href="/admin/">
        <img src="/images/logo.png" alt="admin">
    </a>
    <ul>
        <li>
            <a class="{{ Route::is("ADMIN_DASHBOARD") ? 'active' : null}}" 
            href="{{ route('ADMIN_DASHBOARD') }}">
                dashboard
            </a>
        </li>
        <li>
            <a class="block-session">Post</a>
            <ul class="submenu">
                <li>
                    <a class="{{ Route::is("ADMIN_INSERT_POST") ? 'active' : null}}"
                        href="{{ route('ADMIN_INSERT_POST') }}">
                        Thêm bài viết
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_GET_LIST_POST") ? 'active' : null}}"
                    href="{{ route('ADMIN_GET_LIST_POST') }}">
                        Xem danh sách post
                    </a>
                </li>
            </ul>
        </li>
        
    </ul>
</div>