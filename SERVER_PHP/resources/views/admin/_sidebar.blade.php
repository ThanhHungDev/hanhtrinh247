<div class="admin-sidebar full-sidebar">
    
    <ul>
        <li>
            <a class="block-session {{ Route::is("ADMIN_DASHBOARD") ? 'active' : null}}" 
            href="{{ Route('ADMIN_DASHBOARD') }}">
                <i class="hero-icon hero-monitor-dashboard"></i>dashboard
            </a>
        </li>
        <li>
            <a class="block-session {{ Route::is("ADMIN_STORE_OPTION") ? 'active' : null}}" 
            href="{{ Route('ADMIN_STORE_OPTION') }}">
                <i class="hero-icon hero-segment"></i>Option
            </a>
        </li>
        <li>
            <a class="block-session {{ Route::is("ADMIN_CHAT") ? 'active' : null}}" 
            href="{{ Route('ADMIN_CHAT') }}">
                <i class="hero-icon hero-message-bulleted"></i>chat
            </a>
        </li>
        <li class="{{ Route::is("ADMIN_STORE_POST", "ADMIN_LOAD_POST") ? 'active show' : null}}" >
            <a class="block-session">
                <i class="hero-icon hero-file-document-edit-outline"></i>Post
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_POST", "ADMIN_LOAD_POST") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_POST") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_POST') }}">
                        lưu trữ bài viết
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_POST") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_POST') }}">
                        Xem danh sách post
                    </a>
                </li>
            </ul>
        </li>

        <li class="{{ Route::is("ADMIN_STORE_TAG", "ADMIN_LOAD_TAG") ? 'active show' : null}}" >
            <a class="block-session">
                <i class="hero-icon hero-tag"></i>Tag
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_TAG", "ADMIN_LOAD_TAG") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_TAG") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_TAG') }}">
                        lưu trữ tag
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_TAG") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_TAG') }}">
                        Xem danh sách tag
                    </a>
                </li>
            </ul>
        </li>

        <li class="{{ Route::is("ADMIN_STORE_TOPIC", "ADMIN_LOAD_TOPIC") ? 'active show' : null}}">
            <a class="block-session">
                <i class="hero-icon hero-scatter-plot-outline"></i>Topic
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_TOPIC", "ADMIN_LOAD_TOPIC") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_TOPIC") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_TOPIC') }}">
                        lưu trữ topic
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_TOPIC") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_TOPIC') }}">
                        Xem danh sách topic
                    </a>
                </li>
            </ul>
        </li>

        <li class="{{ Route::is("ADMIN_STORE_THEME", "ADMIN_LOAD_THEME") ? 'active show' : null}}">
            <a class="block-session">
                <i class="hero-icon hero-theme-light-dark"></i>Theme
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_THEME", "ADMIN_LOAD_THEME") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_THEME") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_THEME') }}">
                        lưu trữ theme
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_THEME") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_THEME') }}">
                        Xem danh sách theme
                    </a>
                </li>
            </ul>
        </li>



        <li class="{{ Route::is("ADMIN_STORE_TAG_THEME", "ADMIN_LOAD_TAG_THEME") ? 'active show' : null}}">
            <a class="block-session">
                <i class="hero-icon hero-tag-text-outline"></i>Tag Theme
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_TAG_THEME", "ADMIN_LOAD_TAG_THEME") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_TAG_THEME") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_TAG_THEME') }}">
                        lưu trữ tag theme
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_TAG_THEME") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_TAG_THEME') }}">
                        Xem danh sách tag theme
                    </a>
                </li>
            </ul>
        </li>
        
        <li class="{{ Route::is("ADMIN_STORE_RATING", "ADMIN_LOAD_RATING") ? 'active show' : null}}">
            <a class="block-session">
                <i class="hero-icon hero-table-star"></i>Rating
                <i class="hero-icon hero-chevron-custom-sidebar"></i>
            </a>
            <ul class="submenu {{ Route::is("ADMIN_STORE_RATING", "ADMIN_LOAD_RATING") ? 'open' : null}}">
                <li>
                    <a class="{{ Route::is("ADMIN_STORE_RATING") ? 'active' : null}}"
                        href="{{ Route('ADMIN_STORE_RATING') }}">
                        lưu trữ rating
                    </a>
                </li>
                <li>
                    <a class="{{ Route::is("ADMIN_LOAD_RATING") ? 'active' : null}}"
                    href="{{ Route('ADMIN_LOAD_RATING') }}">
                        Xem danh sách rating
                    </a>
                </li>
            </ul>
        </li>
        
    </ul>
    
</div>