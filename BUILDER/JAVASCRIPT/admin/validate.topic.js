function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        rules: {
            name: {
                required : true,
                maxlength: 150
            },
            slug: {
                required : true,
                maxlength: 150
            },
            excerpt : {
                required : true,
                maxlength: 255
            },
            content : {
                cke_required : true
            },
            background : {
                required : true,
                maxlength: 510
            },
            thumbnail : {
                required : true,
                maxlength: 510
            },
            topic_id: {
                required : true
            },
            site_name : {
                required : true,
                maxlength: 150
            },
            image_seo : {
                required : true,
                maxlength: 510
            },
            keyword_seo : {
                required : true,
                maxlength: 255
            },
            description_seo : {
                required : true,
                maxlength: 255
            }
        },
        messages: {
            name: {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là {0}"
            },
            slug: {
                required : "bắt buộc nhập title để tạo slug",
                maxlength: "độ dài slug được tạo ra không vượt quá {0} kí tự"
            },
            excerpt : {
                required : "bắt buộc nhập đoạn trích(excerpt)",
                maxlength: "độ dài đoạn trích(excerpt) không vượt quá {0} kí tự"
            },
            content : {
                cke_required : "cần nhập nội dung"
            },
            background : {
                required : "bắt buộc nhập background",
                maxlength: "đường link vượt {0} kí tự"
            },
            thumbnail : {
                required : "bắt buộc nhập thumbnail",
                maxlength: "đường link vượt {0} kí tự"
            },
            public : {
                required : "bắt buộc nhập public"
            },
            topic_id: {
                required : "bắt buộc nhập topic"
            },
            site_name : {
                required : "cần thêm site_name cho seo",
                maxlength: "phần site_name không vượt quá {0} kí tự"
            },
            image_seo : {
                required : "cần nhập hình ảnh (image_seo) để seo tốt hơn",
                maxlength: "phần hình ảnh (image_seo) không vượt quá {0} kí tự"
            },
            keyword_seo : {
                required : "cần thêm mô tả keyword seo(keyword_seo)",
                maxlength: "phần keyword (keyword_seo) không vượt quá {0} kí tự"
            },
            description_seo : {
                required : "cần thêm mô tả seo(description_seo)",
                maxlength: "phần mô tả (description_seo) không nên vượt quá {0} kí tự "
            }
            
        }
    });
}


function checkCkeditorRequried(element){
    
    return CKEDITOR.instances[$(element).attr('id')].getData()
}

jQuery.validator.addMethod('cke_required', function(value, element) {

    return checkCkeditorRequried(element)
})

/// dom load success
$(document).ready(function() {

    var DF_FORM_VALIDATE = $(".js-validate-form")
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
});