<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class READ_CACHE
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $url = $request->url();
        
        if( Cache::has($url) ){
            $buffer = Cache::get($url);
            $response = new Response();
            $response->setContent($buffer);
            ini_set('zlib.output_compression', 'On'); // If you like to enable GZip, too!
            return $response;
        }
        return $next($request);
    }
}
