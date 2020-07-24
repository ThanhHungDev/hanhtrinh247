
function showErrorSystem(text){
    alert(" có lỗi ")
    console.log(text) 
}
function deleteSlug( slug, table, element ){
    var result = confirm("Có chắc muốn xóa không?");
    if(typeof SYSTEM_DELETE_SLUG_ACTION == 'undefined'){
        
        showErrorSystem("SYSTEM_DELETE_SLUG_ACTION")
    }
    if (result) {
        /// delete
        $.ajax({
            type: "DELETE",
            url: SYSTEM_DELETE_SLUG_ACTION,
            data : { slug , table },
            dataType:"JSON",
            success: function(response){
                if(response.status == 200){
                    $( element ).closest('tr').remove();
                }else{
                    alert( response.message )
                }
            }
        });
    }
}
function showImageToBrowser( imageSrc, elementId ){
    //. remove img class output-image-finder is exist
    var img_exist = document.getElementsByClassName("output-image-finder");
    if( img_exist.length ){
        img_exist[0].remove()
    }
    var blockShow = document.getElementsByClassName( elementId )[0];
    // console.log(blockShow);
    // blockShow.click();
    blockShow.value = imageSrc;
    // blockShow.blur();
    var img_finder           = document.createElement("img");
        img_finder.src       = imageSrc;
        img_finder.className = "output-image-finder"
        
    var wrapper              = document.getElementById( elementId );
    wrapper.appendChild(img_finder);
}

function showImageToInput( imageSrc, elementId ){

    var img_finder           = document.createElement("img");
        img_finder.src       = imageSrc;
        img_finder.className = "img-input-append"
    var wrapperInput = elementId.parentElement;
    var images = wrapperInput.getElementsByClassName('img-input-append');
    for(var index = 0; index < images.length; index ++ ){
        images[index].remove();
    }
    wrapperInput.appendChild(img_finder);
    var input = wrapperInput.getElementsByTagName('INPUT')[0];
    input.value = imageSrc;
}

function selectThumbnailWithCKFinder( elementId ) {
    CKFinder.popup( {
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {
                var file = evt.data.files.first();
                var imageSrc = file.getUrl();
                showImageToBrowser( imageSrc, elementId );
            });
            finder.on( 'file:choose:resizedImage', function( evt ) {
                var imageSrc = evt.data.resizedUrl;
                showImageToBrowser( imageSrc, elementId );
            });
        }
    } );
}
function selectImageInputWithCKFinder(element) {
    CKFinder.popup( {
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {
                var file = evt.data.files.first();
                var imageSrc = file.getUrl();
                showImageToInput( imageSrc, element );
            });
            finder.on( 'file:choose:resizedImage', function( evt ) {
                var imageSrc = evt.data.resizedUrl;
                showImageToInput( imageSrc, element );
            });
        }
    } );
}
function createSlug( str ){

    str = str.toLowerCase()

    if( wanakana ) str = wanakana.toRomaji(str)

    //Đổi ký tự có dấu thành không dấu
    str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    str = str.replace(/đ/gi, 'd')
    str = str.replace(/[\u00C0-\u00C5]/ig,'a')
    str = str.replace(/[\u00C8-\u00CB]/ig,'e')
    str = str.replace(/[\u00CC-\u00CF]/ig,'i')
    str = str.replace(/[\u00D2-\u00D6]/ig,'o')
    str = str.replace(/[\u00D9-\u00DC]/ig,'u')
    str = str.replace(/[\u00D1]/ig,'n')
    // str = str.replace(/[^a-z0-9 ]+/gi,'')
    str = str.trim().replace(/ /g,'-')
    str = str.replace(/[\-]{2}/g,'')

    // var slug =  (str.replace(/[^a-z\- ]*/gi,''))
    return str
}

function isExistSlug( title ){

    var DF_ID_RESULT = 'result-slug'
    var slug         = createSlug( title )

    if( !slug ) return false

    /// reset slug input
    $( "input[name=slug]").val( slug )
    document.getElementById(DF_ID_RESULT).remove()
    $("button[type=submit]").attr('disabled', true )

    $.ajax({
        type: "GET",
        url: ACTION_CHECK_SLUG + "/" + slug,
        dataType:"JSON",
        success: function(response){
            showResultSlugExisted(response.data, slug)
        }
    });
}
function showResultSlugExisted(result, slug){
    var DF_MESSAGE_SLUG_EXISTED     = "slug đã tồn tại"
    var DF_MESSAGE_SLUG_NOT_EXISTED = "slug chưa tồn tại"

    var DF_ID_RESULT      = 'result-slug'
    var DF_ERROR_RESULT   = 'text-danger px-2 py-2'
    var DF_SUCCESS_RESULT = 'text-success px-2 py-2'
    
    var parag             = document.createElement("p")
    parag.id = DF_ID_RESULT
        parag.className   = result ? DF_ERROR_RESULT : DF_SUCCESS_RESULT
        parag.textContent = result ? DF_MESSAGE_SLUG_EXISTED : DF_MESSAGE_SLUG_NOT_EXISTED
        $( "input[name=slug]").parent().append( parag )

    // if( !result || document.getElementsByClassName('js-form-edit').length) {
    //     var oldSlug = document.getElementsByName('old-slug');
    //     if(oldSlug.length){
    //         var valueOldSlug = oldSlug[0].value;
    //         if(valueOldSlug != slug){
    //             return false;
    //         }
    //     }
    //     $("button[type=submit]").attr('disabled', false );
    // }
}

function createOptionSelect( value, text, isSelect ){
    return "<option value='"+ value + "' " + (isSelect ? 'selected' : '' ) + ">" + text + " </option>"
}
function runSelect2(dom){
    dom.select2(
        { 
            language: {
                noResults: function(){
                    return "không có kết quả trùng khớp";
                }
            },
        }
    );
}

/// dom load success
$(document).ready(function() {

    var multiSelect = $('.js-multi-select');
    if(multiSelect.length){
        runSelect2(multiSelect);
    }
    var DF_FORM_VALIDATE = $(".js-validate-form");
    if(DF_FORM_VALIDATE.length){
        validateForm(DF_FORM_VALIDATE);
    }
});

if( document.getElementById('editor1') ){
    CKEDITOR.replace( 'editor1' );
}
