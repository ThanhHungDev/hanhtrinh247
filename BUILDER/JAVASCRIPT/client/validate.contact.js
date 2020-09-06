function validateForm(formJquery){
    formJquery.validate({
        ignore: ".ignore", // validate all hidden select elements
        rules: {
            name: {
                required : true,
                maxlength: 150
            },
            email: {
                required : true,
                email: 150
            },
            mobile: {
                required : true,
                number: true
            }
        },
        messages: {
            name: {
                required : "bắt buộc phải nhập title",
                maxlength: "title có độ dài lớn nhất là {0}"
            },
            email: {
                required : "bắt buộc nhập email",
                email: "email đã nhập không đúng định dạng",
            },
            mobile: {
                required : "bắt buộc nhập số điện thoại",
                number: "số điện thoại đã nhập không đúng định dạng",
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