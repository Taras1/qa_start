$(document).ready(function () {
    var posit;
    var pos;
    var div = 'html';
    var fl = true;
    var amount = $("#menu li").size();//amount of pages
    var site_scroll = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
    var extra_height = site_scroll - $("#content_Contacts").offset().top - 230
    if (extra_height > 0)
        $("#fix_height").css("height", extra_height)
    //var scroll = $(document).scrollTop()
    try{
        destination = $(location.hash).offset().top;
        $(document).scrollTop(destination-148)
    } catch(e) {

    }
    $("a").click(function () {
        if ($(this).attr("href").substr($(this).attr("href").indexOf('#'), 9) == '#content_') {
            fl = false;
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            if ($.browser.webkit) {div='body'}
            $(div).animate({ scrollTop: destination - 148}, 600, function () {
                fl = true
            });
            elem_id = $(elementClick).attr("id")
            $(elementClick).attr("id", "set_anchor")
            location.hash = $(this).attr("href");
            $("#set_anchor").attr("id", elem_id)
            return false;
        }
    });
    var doc = 0;
    setInterval(SetActBut, 250);

    function SetActBut() {
        new_doc = $(div).attr('scrollTop');
        if ((new_doc != doc) && (fl)) {
            doc = new_doc;
            for (var i = 1; i <= amount; i++) {
                elem = $('#menu .nav' + i + ' a').attr("href");
                pos = $(elem).offset().top;
                if ((pos - doc - 148) <= 20) {
                    $('#menu li').removeClass('menu_active');
                    $('#menu .nav' + i).addClass('menu_active');
                    Cufon.refresh();
                }
            }
        }
    }
    var anchor = location.hash
    $('body').scrollTop(0)
});