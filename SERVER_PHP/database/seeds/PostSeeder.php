<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
                    'topic_id'        => 1,
                    'title'           => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp-321',
                    'slug'            => 'mau-web-thuong-mai-dien-tu1',
                    'excerpt'         => 'mẫu ưeb site bán hàng',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp ',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'view'            => 131,
                    'background'      => '/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'topic_id'        => 2,
                    'title'           => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp2',
                    'slug'            => 'mau-web-thuong-mai-dien-tu-2',
                    'excerpt'         => 'mẫu ưeb site bán hàng',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp ',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'view'            => 231,
                    'background'      => '/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'topic_id'        => 3,
                    'title'           => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp3',
                    'slug'            => 'mau-web-thuong-mai-dien-tu-3',
                    'excerpt'         => 'mẫu ưeb site bán hàng',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp ',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'view'            => 21,
                    'background'      => '/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'topic_id'        => 4,
                    'title'           => 'mẫu ưeb thương mại diẹn tử chuyên nghiệp4',
                    'slug'            => 'mau-web-thuong-mai-dien-tu-4',
                    'excerpt'         => 'mẫu ưeb site bán hàng',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp ',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'view'            => 23,
                    'background'      => '/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
