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
                    'key'        => "hùng đẹp trai",
                    'type'       => 1,
                    'value_text' => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp',
                    'value_html' => null,
                    'language'   => 'vi'
                ],
                [
                    'key'        => "ahihi đồ ngốc",
                    'type'       => 1,
                    'value_text' => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp',
                    'value_html' => null,
                    'language'   => 'vi'
                ],
                [
                    'key'        => "ahihi đồ ngốc ádsa",
                    'type'       => 2,
                    'value_text' => null,
                    'value_html' => "<p>hung</p>",
                    'language'   => Config::get('app.locale')
                ]
            ]
        );
    }
}
