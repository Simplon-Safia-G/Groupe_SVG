//# require jquery.js

function main(){

  var navbar = $("nav");
  var offsetTop = navbar.offset().top + $(window).height();

  function fixNavBar(){
    var offset = $(this).scrollTop();
    console.log(offset);
    console.log(offsetTop);

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
    if(action == "show"){
      title.removeClass("closed");
    } else if(action == "hide"){
      title.addClass("closed");
    }
  };

  $(window).scroll(fixNavBar);
};

$(document).ready(main);
