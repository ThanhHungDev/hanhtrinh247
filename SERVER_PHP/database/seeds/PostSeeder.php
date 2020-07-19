<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('post')->insert(
            [
                [
                    'topic_id'         => 1,
                    'title'           => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp',
                    'slug'            => 'mau-web-thuong-mai-dien-tu',
                    'excerpt'         => 'mẫu ưeb site bán hàng',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp ',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
