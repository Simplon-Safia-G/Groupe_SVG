//# require jquery.js

function main(){

  var navbar = $("nav");
  var offsetTop = $(window).height() + (navbar.offset().top - navbar.height());

  function fixNavBar(){
    var offset = $(this).scrollTop();

    if(offsetTop < offset){
      navbar.addClass("fixed");
      navTitle("show");
    } else {
      navbar.removeClass("fixed");
      navTitle("hide");
    };
  };

  function navTitle(action){
    var title = $(".heading-container");
    var back = $(".back-container");
    if(action == "show"){
      title.removeClass("closed");
      back.removeClass("closed");
    } else if(action == "hide"){
      title.addClass("closed");
      back.addClass("closed");
    };
  };

  function scrollToElem(){
    event.preventDefault();
    if($(event.target).attr("id") == "toTop") return toTop(event);
    var $href = $(event.target).attr("href");
    var target = $($href);
    $('html, body').animate({
      scrollTop: target.offset().top - 10
    }, 1000);
  };

  function toTop(){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  };

  $("ul a").click(scrollToElem);

  $(window).scroll(fixNavBar);
  $(document).ready(fixNavBar);
};

$(document).ready(main);
