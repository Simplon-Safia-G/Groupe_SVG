var $animation_elements = $('.animation-element');
var $window = $(window);
var $manga = $('#manga');
var $mangaOffset = $manga.offset().top;
function apparitionTransition() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    if ((element_bottom_position >= window_top_position) &&
    (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
};

function setHeight(){
  var $separators = $(".separator");
  var $separatorsOffset = $separators[1].offsetTop + ($separators[0].offsetTop + $separators[0].getAttribute("height"));
  manga.setAttribute("height", $separatorsOffset);
  var margin = 0;
  manga.setAttribute("style", "margin-top:"+margin+"px");
};

function drawManga(){
  setHeight();
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  var $manga = $('.manga');
  var $header = $('#header');
  var header_height = $header.outerHeight() + 50;
  var manga_height = $manga.outerHeight();
  var manga_top_position = $manga.offset().top + header_height;
  var manga_bottom_position = (manga_top_position + manga_height + header_height);

  if ((manga_bottom_position > window_top_position) &&
  (manga_top_position < window_bottom_position)) {
    $manga.attr("class", 'manga animated');
  } else {
    $manga.attr("class", 'manga invisible');
  }
};

function drawCat(){
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  var $cat = $('.cat');
  var cat_height = $cat.outerHeight();
  var cat_top_position = $cat.offset().top;
  var cat_bottom_position = (cat_top_position + cat_height);

  if ((cat_bottom_position > window_top_position) &&
  (cat_top_position < window_bottom_position)) {
    $cat.attr("class", 'cat cat-animated');
  } else {
    $cat.attr("class", 'cat cat-invisible');
  }
};


$window.on('scroll resize', apparitionTransition);
$window.on('scroll resize', drawManga);
$window.on('scroll resize', drawCat);
$window.on('load', setHeight);
$window.trigger('scroll');
