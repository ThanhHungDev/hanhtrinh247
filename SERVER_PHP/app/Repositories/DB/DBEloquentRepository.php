<?php
namespace App\Repositories\DB;

use App\Repositories\EloquentRepository;
use Illuminate\Support\Facades\DB;

class DBEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return DB::class;
    }
    
    public function searchTheme( $query ){
        
        $query = preg_replace("/(\s+)/i", "|", $query);
        return $this->_model::table('theme')
                ->whereRaw("search_tsv @@ to_tsquery('$query')");
    }
}