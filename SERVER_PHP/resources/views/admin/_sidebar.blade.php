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
                    <a class="{{ Route::is("ADMIN_STORE_POST") ? 'active' : null}}"
                        href="{{ route('ADMIN_STORE_POST') }}">
                        lưu trữ bài viết
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_POST") ? 'active' : null}}"
                    href="{{ route('ADMIN_LOAD_POST') }}">
                        Xem danh sách post
                    </a>
                </li>
            </ul>
        </li>

        <li>
            <a class="block-session">Tag</a>
            <ul class="submenu">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_TAG") ? 'active' : null}}"
                        href="{{ route('ADMIN_STORE_TAG') }}">
                        lưu trữ tag
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_TAG") ? 'active' : null}}"
                    href="{{ route('ADMIN_LOAD_TAG') }}">
                        Xem danh sách tag
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>