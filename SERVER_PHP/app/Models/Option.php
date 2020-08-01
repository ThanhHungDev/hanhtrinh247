<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Option extends Model
{
    protected $table = 'option';

    protected $fillable = ['id', 'key', 'value', 'language' ];

    public function getValue( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function convertSlugKey(){

        if( $this->key ){
            return SupportString::createSlug( $this->key );
        }
        return null;
    }
}
