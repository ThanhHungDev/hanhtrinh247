<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagActiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('post_tag_active')->insert(
            [
                [
                    'post_id' => 1,
                    'tag_id'  => 1
                ]
            ]
        );
    }
}
