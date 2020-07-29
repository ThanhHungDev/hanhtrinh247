<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ADMIN_VALIDATE_SAVE_THEME extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'title'           => 'required|max:150',
            'slug'            => 'required|max:150',
            'url'             => 'required|max:255',
            'excerpt'         => 'required|max:255',
            'description'     => 'required',
            'content'         => 'required',
            'background'      => 'required|max:510',
            'image_laptop'    => 'required|max:510',
            'image_tablet'    => 'required|max:510',
            'image_mobile'    => 'required|max:510',
            'site_name'       => 'required|max:150',
            'image_seo'       => 'required|max:510',
            'keyword_seo'     => 'required|max:255',
            'description_seo' => 'required|max:255'
        ];
    }

    public function messages(){
        return [
            'title.required'           => ':attribute phải được nhập',
            'title.max'                => ':attribute vượt quá :max kí tự',
            'slug.required'            => ':attribute phải được nhập',
            'slug.max'                 => ':attribute vượt quá :max kí tự',
            'url.required'             => ':attribute phải được nhập',
            'url.max'                  => ':attribute vượt quá :max kí tự',
            'excerpt.required'         => ':attribute phải được nhập',
            'excerpt.max'              => ':attribute vượt quá :max kí tự',
            'description.required'     => ':attribute phải được nhập',
            'content.required'         => ':attribute phải được nhập',
            'background.required'      => ':attribute phải được nhập',
            'background.max'           => ':attribute vượt quá :max kí tự',
            'image_laptop.required'    => ':attribute phải được nhập',
            'image_laptop.max'         => ':attribute vượt quá :max kí tự',
            'image_tablet.required'    => ':attribute phải được nhập',
            'image_tablet.max'         => ':attribute vượt quá :max kí tự',
            'image_mobile.required'    => ':attribute phải được nhập',
            'image_mobile.max'         => ':attribute vượt quá :max kí tự',
            'site_name.required'       => ':attribute phải được nhập',
            'site_name.max'            => ':attribute vượt quá :max kí tự',
            'image_seo.required'       => ':attribute phải được nhập',
            'image_seo.max'            => ':attribute vượt quá :max kí tự',
            'keyword_seo.required'     => ':attribute phải được nhập',
            'keyword_seo.max'          => ':attribute vượt quá :max kí tự',
            'description_seo.required' => ':attribute phải được nhập',
            'description_seo.max'      => ':attribute vượt quá :max kí tự'
        ];
    }
}
