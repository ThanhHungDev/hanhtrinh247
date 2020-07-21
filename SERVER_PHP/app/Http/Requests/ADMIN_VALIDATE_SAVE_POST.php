<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ADMIN_VALIDATE_SAVE_POST extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'            => 'required|max:255',
            'slug'             => 'required|max:255',
            'excerpt'          => 'required|max:255',
            'content'          => 'required',
            'thumbnail'        => 'required|max:255',
            'category_type_id' => 'required|max:255',
            'site_name'        => 'required|max:255',
            'image_seo'        => 'required|max:255',
            'keyword_seo'      => 'required|max:255',
            'description_seo'  => 'required|max:255'
        ];
    }

    public function messages(){
        return [
            'title.required'            => ':attribute phải được nhập',
            'title.max'                 => ':attribute vượt quá :max kí tự',
            'slug.required'             => ':attribute phải được nhập',
            'slug.max'                  => ':attribute vượt quá :max kí tự',
            'excerpt.required'          => ':attribute phải được nhập',
            'excerpt.max'               => ':attribute vượt quá :max kí tự',
            'content.required'          => ':attribute phải được nhập',
            'thumbnail.required'        => ':attribute phải được nhập',
            'thumbnail.max'             => ':attribute vượt quá :max kí tự',
            'category_type_id.required' => ':attribute phải được nhập',
            'site_name.required'        => ':attribute phải được nhập',
            'site_name.max'             => ':attribute vượt quá :max kí tự',
            'image_seo.required'        => ':attribute phải được nhập',
            'image_seo.max'             => ':attribute vượt quá :max kí tự',
            'keyword_seo.required'      => ':attribute phải được nhập',
            'keyword_seo.max'           => ':attribute vượt quá :max kí tự',
            'description_seo.required'  => ':attribute phải được nhập',
            'description_seo.max'       => ':attribute vượt quá :max kí tự'
        ];
    }
}
