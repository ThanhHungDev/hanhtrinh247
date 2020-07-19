<?php

namespace App\Providers;

use App\Factory\BaseModel;
use App\Factory\FactoryModelInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(FactoryModelInterface::class, BaseModel::class);
    }
}
