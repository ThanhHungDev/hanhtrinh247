

$(document).ready(function () {
    console.log("hùng đẹp trai sửa lần 3", detectDevice())
    handleDevice(detectDevice())

    drawGoogleMap();
    drawMapContact();

    jQuery(window).on("resize", function (e) {
        drawGoogleMap();
        drawMapContact();
    });

    formatHeightHeader()
    window.addEventListener("resize", function(){
        formatHeightHeader();
    });
    
    formatPositionHomePage()
    window.addEventListener("scroll", function () {
    
        formatPositionHomePage()
    });

    checkInViewPosition($(".animate-support"))
    $( window ).scroll(function() {

        checkInViewPosition($(".animate-support"))
    });


    
})


function backToTop() {

    if (window.pageYOffset > 0) {

        window.scrollBy(0, -80);
        setTimeout(this.backToTop, 10);
    }
    
}

function detectDevice(){
    var winWidth = window.innerWidth,
    _device = "laptop-device"
    if( winWidth < 767 ){
      _device = "mobile-device"
    }
    if( winWidth > 767 && winWidth <= 960){
      _device = "tablet-device"
    }
    if( winWidth > 960 ){
      _device = "laptop-device"
    }
    
    return _device

}
function handleDevice( device ){
    if( typeof device == 'undefined' ){
        device = detectDevice()
    }

    
    var domStyle = document.getElementById("js-style-device")
    if( domStyle ){
        if( device == "laptop-device" ){
            var iframe = document.getElementById("js-iframe-review-template")
            var menuThemeDetail = document.getElementById("js-menu-theme-detail")
            if( iframe && menuThemeDetail ){
            var height = menuThemeDetail.clientHeight;
            domStyle.style.height = ( window.innerHeight - height - 5 ) + "px";
            }else{
            domStyle.style.height = null;
            }
        }else if( device == "tablet-device" ){
            domStyle.style.height = "768px";
        }else if( device == "mobile-device" ){
            domStyle.style.height = "540px";
        }
        if(domStyle.classList.contains(device)){
            return;
        }
        domStyle.classList.remove("laptop-device")
        domStyle.classList.remove("tablet-device")
        domStyle.classList.remove("mobile-device")
        domStyle.classList.add(device)
    }
    
    $("#js-icon-laptop-device").removeClass('active')
    $("#js-icon-tablet-device").removeClass('active')
    $("#js-icon-mobile-device").removeClass('active')
    $("#js-icon-" + device).addClass('active')
}


function checkInViewPosition ($animations) {

    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = window_top_position + window_height;
  
    $.each($animations, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
  
      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.removeClass("animated-initial");
      } else {
        $element.addClass("animated-initial");
      }
    });
  }

function formatPositionHomePage(){
    var DF_SCALE_PERCENT = 0.5;
    var scroll = this.scrollY;
    var wrapperComponent = document.getElementsByClassName(
      "component-web-design-image"
    );
    if (wrapperComponent.length) {
      var positionScroll = wrapperComponent[0].clientHeight;

      var scale = 0;
      if (scroll > positionScroll) {
        scale = 100;
      } else {
        scale = parseInt((scroll * 100 * 100) / positionScroll) / 100.0;
      }
      scale *= DF_SCALE_PERCENT;

      document.getElementsByClassName("box-samples-img-1")[0]['style']['top'] = 20 + scale + '%';
      document.getElementsByClassName("box-samples-img-2")[0]['style']['top'] = 10 - scale + '%';
      document.getElementsByClassName("box-samples-img-3")[0]['style']['bottom'] = 10 - scale + '%';
      document.getElementsByClassName("box-samples-img-3")[0]['style']['right'] = 20 - scale + '%';
    }
}

function formatHeightHeader(){

    if (document.getElementsByClassName('js-nomal-height').length) {
        var heightPrevColumn = document.getElementsByClassName('js-nomal-height')[0].clientHeight;
        document.getElementsByClassName('component-web-design-image')[0]['style']['height'] = heightPrevColumn + "px";
    }
}


function drawGoogleMap(){
    var styles = [
        {
            stylers: [{ saturation: 0 }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                //  { lightness: 100 },
                { visibility: "simplified" },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Google Map",
    });
    var myLatlng = new google.maps.LatLng(10.651623, 107.270763);
    var mapOptions = {
        zoom: 10,
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
        },
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/images/map-icon.png'
    });
    var map = new google.maps.Map(
        document.getElementById("map-canvas"),
        mapOptions
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    marker.setMap(map);

    var address_detail =
        '<div class="address_detail_map">' +
        '<h4 class="main_color">' +
        CONFIG_COMPANY_NAME +
        '</h4>' +
        CONFIG_COMPANY_ADDRESS +
        "</div>";

    address_detail = address_detail.split("\n").join("<br />");
    var infowindow = new google.maps.InfoWindow({
        content: address_detail,
    });

    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}


function closeMenuToggle() {
    if (window.innerWidth > 767) {
        return;
    }
    document.getElementById('js-toggle-menu-mobile').classList.toggle('open');
    document.body.classList.remove('neo-scroll')
}
function activeMenuMobile() {
    if (window.innerWidth > 767) {
        return;
    }
    var dropdownClick = event.target.parentElement;
    if (dropdownClick.classList.contains('active')) {
        dropdownClick.classList.remove('active');
    } else {
        dropdownClick.classList.add('active-temp');
    }
    var lstDropDown = document.getElementById('js-toggle-menu-mobile').getElementsByClassName('dropdown-menu');
    if (lstDropDown.length) {
        for (var index = 0; index < lstDropDown.length; index++) {

            if (lstDropDown[index].classList.contains('active')) {
                lstDropDown[index].classList.remove('active');
            }
            if (lstDropDown[index].classList.contains('active-temp')) {
                lstDropDown[index].classList.remove('active-temp');
                lstDropDown[index].classList.add('active');
            }
        }
    }
}

function toggleMenu(){
    
    var wrapperLink = document.getElementById('js-toggle-menu-mobile');
    if(wrapperLink){

      wrapperLink.classList.toggle('open');
      document.body.classList.toggle('neo-scroll')
    }
}


function drawMapContact() {
    if(!document.getElementById("map-contact-canvas")){
        return false
    }

    var styles = [
        {
            stylers: [{ saturation: 0 }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 0 },
                { visibility: "simplified" },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Google Map",
    });
    var myLatlng = new google.maps.LatLng(35.707616, 139.669912);
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
        },
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/images/map-icon.png'
    });
    var map = new google.maps.Map(
        document.getElementById("map-contact-canvas"),
        mapOptions
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    marker.setMap(map);

    var address_detail =
        '<div class="address_detail_map">' +
        '<h4 class="main_color">' +
        CONFIG_COMPANY_NAME +
        '</h4>' +
        CONFIG_COMPANY_ADDRESS +
        "</div>";

    address_detail = address_detail.split("\n").join("<br />");
    var infowindow = new google.maps.InfoWindow({
        content: address_detail,
    });

    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}


$.modal.BEFORE_BLOCK = 'modal:before-block';    // Fires just before the overlay (blocker) appears.
$.modal.BLOCK = 'modal:block';                  // Fires after the overlay (block) is visible.
$.modal.BEFORE_OPEN = 'modal:before-open';      // Fires just before the modal opens.
$.modal.OPEN = 'modal:open';                    // Fires after the modal has finished opening.
$.modal.BEFORE_CLOSE = 'modal:before-close';    // Fires when the modal has been requested to close.
$.modal.CLOSE = 'modal:close';                  // Fires when the modal begins closing (including animations).
$.modal.AFTER_CLOSE = 'modal:after-close';      // Fires after the modal has fully closed (including animations).



$('a.btn-select-theme').click(function(event) {
    $('#slug-hidden').val($(this).attr('data-slug'))
    $("#select-theme-model").modal({
        fadeDuration: 250,
        fadeDelay: 1.5
    });
    return false;
});

