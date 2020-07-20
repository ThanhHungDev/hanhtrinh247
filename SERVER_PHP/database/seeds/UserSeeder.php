<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ///user supper admin
        DB::table('users')->insert(
            [
                'name'       => 'Trương Thanh Hùng',
                'email'      => 'thanhhung.code@gmail.com',
                'avatar'     => 'upload/images/avatar.jpg',
                'password'   => bcrypt('123456789'),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]
        );
    }
}
