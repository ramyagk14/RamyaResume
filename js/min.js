jQuery(document).ready(function(){
  jQuery(".header-line1").click(function(){
    //alert("hello");
    jQuery(".content-line1 ul").slideToggle("slow");
    jQuery(".header-line1 img").toggleClass("uparrow");
    if (jQuery('.header-line1 img').hasClass('uparrow')) {
    var p = jQuery(".header-line2");
    var offset = p.offset();

    jQuery(".header-line2 img").offset({ top: offset.top - 94});
    }
    else {
      var p = jQuery(".header-line2");
      var offset = p.offset();
      jQuery(".header-line2 img").offset({ top: offset.top + 74});
    }

    if (jQuery('.header-line1 img').hasClass('uparrow')) {
      var q = jQuery(".header-line3");
      var offset = q.offset();
  
      jQuery(".header-line3 img").offset({ top: offset.top - 94});
      }
      else {
        var q = jQuery(".header-line3");
        var offset = q.offset();
        jQuery(".header-line3 img").offset({ top: offset.top + 74});
      }
  });

  jQuery(".header-line2").click(function(){
    jQuery(".content-line2 ul").slideToggle("slow");
    jQuery(".header-line2 img").toggleClass("uparrow");
    if (jQuery('.header-line2 img').hasClass('uparrow')) {
      var p = jQuery(".header-line3");
      var offset = p.offset();
  
      jQuery(".header-line3 img").offset({ top: offset.top - 74});
      }
      else {
        var p = jQuery(".header-line3");
        var offset = p.offset();
    
        jQuery(".header-line3 img").offset({ top: offset.top + 54});
      }
  });

  jQuery(".header-line3").click(function(){
    jQuery(".content-line3 ul").slideToggle("slow");
    jQuery(".header-line3 img").toggleClass("uparrow");
  });


  jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

});