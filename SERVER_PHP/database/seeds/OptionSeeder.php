<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('option')->insert(
            [
                [
                    'key'        => "footer-title",
                    'type'       => 1,
                    'value_text' => 'チャットシステムでお客様を年中無休でサポート',
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "footer-go-to-chat",
                    'type'       => 1,
                    'value_text' => 'クリックしてチャット',
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "des-footer",
                    'type'       => 1,
                    'value_text' => "経験豊富なスタッフのチームにより、ウェブサイトから問題を導き対処するだけでなく、 コンサルティングを行い、ビジネスと共に成長します。",
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "text-link-consulting-web-design",
                    'type'       => 1,
                    'value_text' => "コンサルティングウェブデザイン",
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "text-link-advisory-system",
                    'type'       => 1,
                    'value_text' => "技術サポート",
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "text-link-submit-web-request",
                    'type'       => 1,
                    'value_text' => "Webリクエストを送信",
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "footer-menu-service",
                    'type'       => 1,
                    'value_text' => '<p> <i class="hero-icon hero-google-ads"></i> <a href="/create-web-standard-seo">SEO標準Webデザイン</a> </p> <p> <i class="hero-icon hero-message-text-outline"></i> <a href="/create-web-chat-realtime">リアルタイムWebチャットの設計</a> </p> <p> <i class="hero-icon hero-human-male-child"></i> <a href="/create-web-recruit">採用されたウェブデザイン</a> </p> <p> <i class="hero-icon hero-newspaper-variant-outline"></i> <a href="/create-web-news">ニュースウェブデザイン</a> </p> <p> <i class="hero-icon hero-ballot-recount-outline"></i> <a href="/create-web-marketing-sale-online">販売ウェブデザイン</a> </p> <p> <i class="hero-icon hero-responsive"></i><a href="/create-web-responsive">モバイルレスポンシブウェブデザイン</a> </p>',
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ]
            ]
        );
    }
}
