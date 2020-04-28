//menu open
$("#menu-click").click(function(){
  $("#nav-menu-mobil").toggle(1000);
});

//menu close
$("#close").click(function(){
  $("#nav-menu-mobil").toggle(1000);
});

//grid open and close
$(".but-activ").click(function () {
      $(".activ-text-grid").hide(500);
      $(this).parent().next().show(500);
  });

$(".close-grid").click(function () {
    $(this).parent().hide(500);
  });

//icon background
$(function(){
  $("#icon li").click(function(){
    $("img").removeClass("active");
    $(this).find("img").toggleClass("active");
  });
});

//scrol

function slowScroll (id) {
  var offset = 0;
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 1000);
  return false;
}

$(".nav-menu-mobil-but").click(function(){
  $("#nav-menu-mobil").hide();
  function slowScroll (id) {
    var offset = 90;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset -$('header')
    }, 1000);
    return false;
  }
})

// header



//pagenation-container show - hide
$(document).ready(function(){
    if ( $(window).width() > 1070 )
    {

      jQuery(function(f){
        var element = f('.pagenation-container');
        f(window).scroll(function(){
          element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
        });
      });

    }
    else {
      $(window).scroll(function(e) {
        var top = $(document).scrollTop();
        if (top < 90) $("nav").removeClass("activ-head");
        else $("nav").addClass("activ-head");
      });
    }
});




//
