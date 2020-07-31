<div class="menu-mini">
    <ul class="wrapper-link">
        <li><a class="{{ Route::is('HOME_PAGE') ? 'active' : null }}" href="{{ Route('HOME_PAGE') }}">ホームページ</a></li>
        <li><a class="{{ Route::is('SERVICE') ? 'active' : null }}" href="{{ Route('SERVICE') }}">サービス</a></li>
        <li><a class="{{ Route::is('CHAT') ? 'active' : null }}" href="{{ Route('CHAT') }}">チャット</a></li>
        <li><a class="{{ Route::is('THEME') ? 'active' : null }}" href="{{ Route('THEME') }}">意匠</a></li>
    </ul>
</div>