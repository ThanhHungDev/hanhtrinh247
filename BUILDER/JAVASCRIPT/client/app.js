

$(document).ready(function () {
    console.log("hùng đẹp trai sửa lần 3")

    drawGoogleMap();

    jQuery(window).on("resize", function (e) {
        drawGoogleMap();
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