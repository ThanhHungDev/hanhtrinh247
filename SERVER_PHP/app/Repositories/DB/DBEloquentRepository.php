<?php
namespace App\Repositories\DB;

use App\Helpers\SupportString;
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
        $query = strtolower ( $query );
        $words = SupportString::createSlug($query, "|");

        // $strQuery          = SupportString::createSlug($query, "");
        $lstCharacterQuery = mb_str_split( preg_replace('/\s+/', '', $query) );              // preg_replace("/(.)/i", "$1|", );
        $lstQuery = $lstCharacterQuery;

        $length = count($lstCharacterQuery);
        for( $index = 0; $index < $length; $index ++ ){
            $strPrev = $strNext = null;
            if( isset($lstCharacterQuery[$index - 1]) ){
                $strPrev = $lstCharacterQuery[$index - 1];
            }

            if( isset($lstCharacterQuery[$index + 1]) ){
                $strNext = $lstCharacterQuery[$index + 1];
            }

            $lstQuery[] = $lstCharacterQuery[$index] . "" . $strNext;
            $lstQuery[] = $strPrev . "" . $lstCharacterQuery[$index];
        }
        $lstQuery = array_unique($lstQuery);
        $strQuery = implode("|", $lstQuery );
        return $this->_model::table('view_search_theme')
                ->whereRaw("search @@ to_tsquery('$strQuery')")
                ->select('*')
                ->addSelect(DB::raw("ts_headline('simple', title, to_tsquery('simple', '$words')) as title"))
                ->addSelect(DB::raw("ts_headline('simple', search_document, to_tsquery('simple', '$words')) as search_document"))
                ->orderByRaw("ts_rank(search, to_tsquery('$strQuery')) DESC");
    }
}