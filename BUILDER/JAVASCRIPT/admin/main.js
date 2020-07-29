
function showErrorSystem(text){
    alert(" có lỗi ")
    console.log(text) 
}


function showImage__InputCKFinder( imageSrc, btnOrInputDom ){
    //. remove img class output-image-finder is exist
    var DF_ID_RESULT_IMAGE_CK            = "output-image-finder",
        DF_CLASS_INPUT_OUTPUT_IMAGE      = "img__outputCKFinder",
        DF_CLASS_GROUP_CKFINDER_SELECTOR = "wrapper__selectImageWithCKFinder"

    var groupJQUERY = $(btnOrInputDom).closest( "." + DF_CLASS_GROUP_CKFINDER_SELECTOR ),
        img_result  = groupJQUERY.find( "." + DF_ID_RESULT_IMAGE_CK )

    if( img_result ){

        img_result.remove()
    }
    
    var input = groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE)
    if( input ){
        input.val(imageSrc)
        input.valid()
    }
    
    var img_output_show           = document.createElement("img")
        img_output_show.id        = DF_ID_RESULT_IMAGE_CK
        img_output_show.className = DF_ID_RESULT_IMAGE_CK
        img_output_show.src       = imageSrc

    groupJQUERY.find("input." + DF_CLASS_INPUT_OUTPUT_IMAGE).parent().append( img_output_show )
}

function selectImageWithCKFinder( ele ) {
    
    CKFinder.popup( {
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {

                var file     = evt.data.files.first(),
                    imageSrc = file.getUrl()
                showImage__InputCKFinder( imageSrc, ele )
            });
            finder.on( 'file:choose:resizedImage', function( evt ) {

                var imageSrc = evt.data.resizedUrl
                showImage__InputCKFinder( imageSrc, ele )
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
    $("#"+DF_ID_RESULT).remove()
    $("button[type=submit]").attr('disabled', true )

    fetch( ACTION_CHECK_SLUG + "/" + slug, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        
        if( !res.ok ){
            return showResultSlugExisted( false )
        }else{
            return showResultSlugExisted( true )
        }
    })
    .catch(error => {
        alert("có lỗi")
    })
}
function showResultSlugExisted(result){

    var DF_MESSAGE        = "slug đã tồn tại",
        DF_CLASS_RESULT   = 'text-color-danger',
        DF_ID_RESULT      = 'result-slug'
    if( !result ){

        DF_MESSAGE = "slug chưa tồn tại"
        DF_CLASS_RESULT = 'text-color-success-color-dark'
    }

    var parag             = document.createElement("p")
        parag.id          = DF_ID_RESULT
        parag.className   = DF_CLASS_RESULT
        parag.textContent = DF_MESSAGE

    $( "input[name=slug]").parent().append( parag )
    $("button[type=submit]").attr('disabled', result )
}


function runSelect2Single(dom){
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
function runSelect2Multi(dom){
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

function showAllImagesCkfinderOnload( imgs ){

    imgs.each(function( indexInputImg ){
        var imageSrc = $( this ).val()
        
        if( imageSrc ){
            showImage__InputCKFinder( imageSrc, this )
        }
    })
}

function toggleSidebar(){
    // $(".admin-sidebar .submenu .active").closest('.submenu').closest('li').addClass("open")
    $(".admin-sidebar .block-session").click(function(){

        $(".admin-sidebar>ul>li").removeClass("open")
        $(this).closest("li").addClass("open")
    })
}

/// dom load success
$(document).ready(function() {

    //// load select 2 
    var singleSelect = $('.js__single-select'),
        multiSelect  = $(".js__multi-select")
    if(singleSelect.length){
        runSelect2Single(singleSelect)
    }
    if(multiSelect.length){
        runSelect2Multi(multiSelect)
    }
    //// load image of ckfinder input to dom show image
    var imgsCkfinder = $(".img__outputCKFinder")
    if(imgsCkfinder.length){
        
        showAllImagesCkfinderOnload(imgsCkfinder)
    }
    toggleSidebar()
});

if( $("textarea[id^='editor']").length ){
    $("textarea[id^='editor']").each( function( index ) {
        
        CKEDITOR.replace( $(this).attr('id') );
    })
}

