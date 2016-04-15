var timeOut;

function squareItem(selector) {
  var items = $(selector);

  items.each(function() {
    var item_width = $(this).width();

    $(this).css( 'height', item_width);
  });
}

function rectangleItem(selector_1, selector_2) {
  var item_rect = $(selector_1);
  var item_sqr = $(selector_2);

  item_rect.each(function() {
    var item_ref = item_sqr.height();
    var item_height = (item_ref-30)/2;

    $(this).css( 'height', item_height);
  });
}

function isMobile() {
  return $(window).width() < 769;
}

function hasSlick(element) {
  try {
    $(element).slick('getSlick');
    return true;
  } catch (e) {
    return false;
  }
}

function buildProductSlider() {

  if (hasSlick('.slider-for')) {
    $('.slider-for').slick('unslick');
  }
  if (hasSlick('.slider-nav')) {
    $('.slider-nav').slick('unslick');
  }

  if ( isMobile() ) {

    $('.slider-for').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000
    });

  } else {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true
    });
  }
}

function centerItem(item) {
  var item_width = $(item).width();
  var item_height = $(item).height();

  $(item).css({
    'margin-top': -(item_height/2),
    'margin-left': -((item_width/2)+30)
  });
}

function verticalAlign(item) {
  var item_height = $(item).outerHeight();

  $(item).css({
    'margin-top': -(item_height/2)
  });
}

$(function() {
  centerItem('.placeholder-info');
  verticalAlign('.blog__item__info');
});
