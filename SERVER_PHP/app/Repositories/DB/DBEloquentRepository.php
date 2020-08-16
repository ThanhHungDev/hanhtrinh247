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
        // $query = SupportString::convertLang($query);
        $words = preg_replace('/\s+/', ' ', $query);
        $words = preg_replace('/\s+/', '|', $words);

        // $strQuery          = SupportString::createSlug($query, "");
        $lstCharacterQuery = mb_str_split( preg_replace('/\s+/', '', SupportString::convertLang($query)) );              // preg_replace("/(.)/i", "$1|", );
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
        return $this->_model::table('theme')
                ->whereRaw("search_tsv @@ to_tsquery('$strQuery')")
                ->select('*')
                ->addSelect(DB::raw("ts_headline(title, to_tsquery('$words')) as title"))
                ->addSelect(DB::raw("ts_headline('simple', search_doc, to_tsquery('simple', '$words')) as search_document"))
                ->orderByRaw("ts_rank(search_tsv, to_tsquery('$strQuery')) DESC");
    }




    public function searchPost( $query ){
        // $query = SupportString::convertLang($query);
        $words = preg_replace('/\s+/', ' ', $query);
        $words = preg_replace('/\s+/', '|', $words);

        // $strQuery          = SupportString::createSlug($query, "");
        $lstCharacterQuery = mb_str_split( preg_replace('/\s+/', '', SupportString::convertLang($query)) );              // preg_replace("/(.)/i", "$1|", );
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
        return $this->_model::table('post')
                ->whereRaw("search_tsv @@ to_tsquery('$strQuery')")
                ->select('*')
                ->addSelect(DB::raw("ts_headline(title, to_tsquery('$words')) as title"))
                ->addSelect(DB::raw("ts_headline('simple', search_doc, to_tsquery('simple', '$words')) as search_document"))
                ->orderByRaw("ts_rank(search_tsv, to_tsquery('$strQuery')) DESC");
    }

    
}