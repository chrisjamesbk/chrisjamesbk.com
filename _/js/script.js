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

});