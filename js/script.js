(function($) {

    function ratio() {
        var width = $(window).width();
        var height = $(window).height();
        
        if ( width >= height ) {
            $(".rotate-device-screen").hide();
            $(".svg").removeClass("greaterHeight");
            $(".svg").addClass("greaterWidth");
            var ratio = width / height;
            
            if ( ratio > 1.3  ) {
                $(".svg").removeClass("ratio-1point0");
                $(".svg").addClass("ratio-1point3");
            } else if ( ratio > 1 && ratio < 1.3 ) {
                $(".svg").removeClass("ratio-1point3");
                $(".svg").addClass("ratio-1point0");
            }
        } else {
            $(".rotate-device-screen").show();
            $(".svg").removeClass("greaterWidth");
            $(".svg").removeClass("ratio-1point3");
            $(".svg").removeClass("ratio-1point0");
            $(".svg").addClass("greaterHeight");
            var ratio = height / width;
        }
    }
    ratio();
    $(window).resize(function() {
        ratio();
    });
    
})(jQuery);