$(window).load(function() {
   $('#slider').nivoSlider({
        effect:'sliceUpDown', //Specify sets like: 'fold,fade,sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown, sliceUpDownLeft' 
        slices:12,
        animSpeed:500,
        pauseTime:6000,
        startSlide:0, //Set starting Slide (0 index)
        directionNav:false, //Next & Prev
        directionNavHide:false, //Only show on hover
        controlNav:true, //1,2,3...
        controlNavThumbs:false, //Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, //Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', //Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
        keyboardNav:true, //Use left & right arrows
        pauseOnHover:true, //Stop animation while hovering
        manualAdvance:false, //Force manual transitions
        captionOpacity:1, //Universal caption opacity
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){} //Triggers after all slides have been shown
    });
});
$(document).ready(function() {
	// initiate tool tip
	// basic usage  
	$('.normaltip').aToolTip();  
		
	// fixed tooltip  
	$('.fixedtip').aToolTip({  
			fixed: true  
	});
	$('.clicktip').aToolTip({  
		clickIt: true,  
		tipContent: 'Hello I am aToolTip with content from param'  
	});
    $( document ).ajaxStart(function() {
        $( "#ajax" ).show();
    });
    $( document ).ajaxStop(function() {
        $( "#ajax" ).hide();
    });
    var opts = {
        lines: 9, // The number of lines to draw
        length: 0, // The length of each line
        width: 12, // The line thickness
        radius: 17, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#F77007', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 100, // Afterglow percentage
        shadow: true, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent in px
        left: '50%' // Left position relative to parent in px
    };
    var target = document.getElementById('ajax');
    var spinner = new Spinner(opts).spin(target);
});
function send_email(){
    var name = "name="+$("input[name=name]").val()
    var email = "email="+$("input[name=email]").val()
    var message = "message="+$("textarea[name=message]").val()
    var token = "authenticity_token="+$("input[name=authenticity_token]").val()
    $.ajax({
        type: "POST",
        url: "/feedback",
        data: name+"&"+email+"&"+message,
        success: function(){
            $("#message").css("display", "block")
            $("#error").css("display", "none")
            document.getElementById('ContactForm').reset()
            //$("form .button").hide(500)
            setTimeout(function(){$("#message").hide(1500)}, 3000)
        },
        error: function(){
            $("#error").css("display", "block")
            $("#message").css("display", "none")
            //setTimeout(function(){$("#error").hide(2000)}, 2000)
        }
        //dataType: dataType
    })
}