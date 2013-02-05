jQuery.colorbox.imgZoom = {
    selector: "a[rel='img-zoom'],.img-zoom",
    current: "{current} / {total}",
    opacity: "0.6",
    loop:    false,
    rel:     true,
    photo:   true
};
jQuery.imgZoom = function()
{
    jQuery(jQuery.colorbox.imgZoom.selector).colorbox(jQuery.colorbox.imgZoom);
}
jQuery(document).ready(function($){
    $.imgZoom();
});
