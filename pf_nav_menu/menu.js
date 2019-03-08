
/*Bei Klick auf Hauptmenüpunkt z.B. Produkte, alle anderen ausblenden
außer Produkte und dessen Unterpunkte und bei zurück wieder einblenden */
$(document).ready(function(){
    $(".pf_nav_main_container label[for^='item_']").click(function(){
        $(this).toggleClass("active");
        if ($('.main_item').hasClass('active')) {
          $('.pf_nav_main_container .main_item:not(.active)').css('display','none');
          $('.pf_nav_meta_container .main_item:not(.active)').css('display','none');
          $('.pf_nav_meta_container li').css('border-bottom','none');
          $('.pf_nav_main_container li').css('border-bottom','none');
          $('.pf_nav_main_container').css('border-bottom','none');

        } else {
          $('.pf_nav_main_container .main_item').css('display','block');
          $('.pf_nav_meta_container .main_item').css('display','block');
          $('.pf_nav_meta_container li').css('border-bottom','1px solid #e0e0e0');
          $('.pf_nav_main_container li').css('border-bottom','1px solid #e0e0e0');
          $('.pf_nav_main_container').css('border-bottom','5px solid #e0e0e0');
        }
    });
    /*Bei Klick auf Untermenüpunkt z.B. Industrielle Sensoren, alle anderen ausblenden
    und bei zurück wieder einblenden */
    /* Bei Klick auf Untermenu Punkt den Hauoptmenupunkt ausblenden */
    $(".pf_nav_main_container label[for^='subitem_']").click(function(){
        $(this).toggleClass("active");
        if ($('.sub_item').hasClass('active')) {
          $('.sub_item:not(.active)').css('display','none');
          $('label.main_item.active').css('display','none');
        } else {
          $('.sub_item').css('display','block');
          $('label.main_item.active').css('display','block');
        }
    });
});
/*Wenn Suche geöffnet wird, Klasse active geben, Focus auf Suchfeld legen*/
$(document).ready(function(){
  $("#open_search").click(function(){
      $(this).toggleClass("active");
      $( ".search_container input[type='search']" ).focus();
      if($('#open_search').hasClass('active')){
          $('#overlay_search').addClass('search_overlay_active');
      }else {
          $('#overlay_search').removeClass('search_overlay_active');
      }
  });
});
/*Wenn Menu geöffnet wird, Klasse active geben*/
$(document).ready(function(){
  $("#hamburger").click(function(){
      $(this).toggleClass("active");
  });
});
/* Wenn Menü offen, dann Suche schließen, wenn Suche offen, dann Menü schließen */
$(document).ready(function(){
  $("#open_search").click(function(){
    if ($('#open_search').is(':checked')) {
      $('#hamburger').prop('checked', false);
      $('.pf_content').removeClass('push');
    }
  });
  $("#hamburger").click(function(){
    if ($('#hamburger').is(':checked')) {
      $('#open_search').prop('checked', false);
      $('.pf_content').addClass('push');
    }
  });
});
/* Menu soll Content zur Seite schieben */
$(document).ready(function(){
  $("#hamburger").click(function(){
    if ($('#hamburger').is(':checked')) {
      /*$('body').css('position','fixed');*/
      /*$('body').css('overflow','hidden');*/
      $('body').addClass('stop_scrolling');
      $('.pf_content').addClass('push');
    }
    else {
      /*$('body:not(.off_canvas_menu)').css('overflow','visible');*/
      /*$('body').css('position','static');*/
      $('body').removeClass('stop_scrolling');
      $('.pf_content').removeClass('push');
    }
  });
});
/* wenn gescrollt wurde und Menu offen, Content soll an der Stelle stehen
bleiben und nicht an den Anfang springen */

/*
$(function() {
    var $window = $(window),
        $body = $("body"),
        $modal = $(".off_canvas_menu"),
        scrollDistance = 0;

    $modal.on("#hamburger").click(function(){
      if ($('#hamburger').is(':checked')) {
        scrollDistance = $window.scrollTop();

        $body.css("top", scrollDistance * -1);
      } else {
            $body.css("top", "");
            $window.scrollTop(scrollDistance);
      }
    });
});*/
/*
var stop_scroll = document.getElementsByTagName("body");

stop_scroll.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });


$('body').bind('touchmove', function(e){e.preventDefault();});  */
