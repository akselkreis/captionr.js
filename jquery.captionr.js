// jquery.captionr.js: caption an image with it's alt tag
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreismedia.com

(function( $ ){
  $.fn.captionr = function(options) {
    return this.each(function() {
    var caption = $(this).attr('alt');
    if (caption !== ''){ // Do nothing if there is no alt tag
      $(this).wrap('<div class="caption" />').after('<p>'+ caption +'</p>');
    }
    });
  };
})( jQuery );