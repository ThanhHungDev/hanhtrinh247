function validateForm(formJquery){
    formJquery.validate({
        rules: {
            title: {
                required : true,
                maxlength: 255
            },
            slug: {
                required : true,
                maxlength: 100
            },
            excerpt : {
                required : true,
                maxlength: 255
            },
            content : {
                required : true
            },
            thumbnail : {
                required : true,
                maxlength: 255
            },
            site_name : {
                required : true,
                maxlength: 255
            },
            image_seo : {
                required : true,
                maxlength: 255
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
            title: {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là 255"
            },
            slug: {
                required : "bắt buộc nhập title để tạo slug",
                maxlength: "độ dài slug được tạo ra không vượt quá 255 kí tự"
            },
            excerpt : {
                required : "bắt buộc nhập đoạn trích",
                maxlength: "độ dài đoạn trích không vượt quá 255 kí tự"
            },
            content : {
                required : "cần nhập nội dung"
            },
            thumbnail : {
                required : "cần thêm link thumbnail",
                maxlength: "đường link vượt 255 kí tự"
            },
            site_name : {
                required : "cần thêm site_name cho seo",
                maxlength: "phần site_name không vượt quá 255 kí tự"
            },
            image_seo : {
                required : "cần nhập hình ảnh để seo tốt hơn",
                maxlength: "phần hình ảnh không vượt quá 255 kí tự"
            },
            keyword_seo : {
                required : "cần thêm mô tả keyword seo",
                maxlength: "phần keyword không vượt quá 255 kí tự"
            },
            description_seo : {
                required : "cần thêm mô tả seo",
                maxlength: "phần mô tả không nên vượt quá 255 kí tự "
            }
        }
    });
}