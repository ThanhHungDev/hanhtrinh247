function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        rules: {
            username: {
                required : true,
                maxlength: 40
            },
            avatar : {
                required : true,
                maxlength: 510
            }
        },
        messages: {
            username: {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là {0}"
            },
            avatar: {
                required : "bắt buộc nhập title để tạo slug",
                maxlength: "độ dài slug được tạo ra không vượt quá {0} kí tự"
            }
        }
    });
}

/// dom load success
$(document).ready(function() {

    var DF_FORM_VALIDATE = $(".js-validate-form")
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
});