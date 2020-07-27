<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TopicSeeder::class);
        $this->call(PostSeeder::class);
        $this->call(PostTagActiveSeeder::class);
        $this->call(RatingSeeder::class);
        $this->call(TagSeeder::class);
        $this->call(TagThemeSeeder::class);
        $this->call(ThemeSeeder::class);
        $this->call(UserSeeder::class);
        
    }
}
