$(document).ready(function() {

    // add prettyprint class to all <pre><code></code></pre> blocks
    var prettify = false;
    $("pre code").parent().each(function() {
        $(this).addClass('prettyprint');
        prettify = true;
    });

    // if code blocks were found, bring in the prettifier ...
    if ( prettify ) {
        $.getScript("./libs/prettify.js", function() { prettyPrint(); });
    }
    
    // nav drop-down on mobile
    $('.morenav').click(function(){
        $('.l-header').toggleClass('is-header-expanded');
        $('.nav-header').toggleClass('is-nav-active');
    });
    var currentWidth = $(window).width();
    /* not sure we need this */
    $(window).resize(function(){
        var newWidth = $(window).width();
        if ((currentWidth < 479) && (newWidth >= 480)) {
            $('.l-header').removeClass('is-header-expanded');
            $('.nav-header').removeClass('is-nav-active');
        }
        currentWidth = $(window).width();
    });

});