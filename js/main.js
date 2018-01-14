$(document).ready(function(){
  $('#clock').countdown('2017/10/25', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%D<b>days</b></span><i>:</i>'
     + '<span>%H<b>hours</b></span><i>:</i>'
     + '<span>%M<b>min</b></span><i>:</i>'
     + '<span>%S<b>sec</b></span>'));
 });
  $('#footer_clock').countdown('2017/10/25', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%D<b>days</b></span><i>:</i>'
     + '<span>%H<b>hours</b></span><i>:</i>'
     + '<span>%M<b>min</b></span><i>:</i>'
     + '<span>%S<b>sec</b></span>'));
 });
  $('.play_video').on('click', function() {
	$('.video-container').append('<iframe width="854" height="480" src="https://www.youtube.com/embed/cbV190MjKiU?autoplay=1&fmt=22" frameborder="0" allowfullscreen></iframe>');
	$(this).fadeOut(500);
});
  $('.media_slider_block__slider').slick({
  	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    	}
     },
     {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	  }
    ]
  });
  $('.trading_block__predictions__slider_block').slick({
  	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
    {
      breakpoint: 971,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.our_team_block__slider').slick({
  	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    	}
     },
     {
	      breakpoint: 911,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	  }
    ]
  });
  $('.tokens_block__slider').slick({
  	dots: true,
	infinite: true,
	speed: 300,
	autoplay:true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.faq_block__ul__li_but').click(function(){
  	$(this).parent('.faq_block__ul__text_block__before_but').next('.faq_block__ul__li_info_block').slideToggle(750);
  	if($(this).hasClass('faq_block__ul__li_but__rotate')){
  		$(this).removeClass('faq_block__ul__li_but__rotate');
  	}
  	else{
  		$(this).addClass('faq_block__ul__li_but__rotate');
  	}
  })
  $('.trading_block__predictions__slider_block__card__body__top_line_block__right_span').mouseover(function() {
  	$(this).parent('.trading_block__predictions__slider_block__card__body__top_line_block').next('.trading_block__predictions__slider_block__card__body__hover_info').addClass('trading_block__predictions__slider_block__card__body__hover_info__dn');
  });
  $('.trading_block__predictions__slider_block__card__body__top_line_block__right_span').mouseout(function() {
  	$(this).parent('.trading_block__predictions__slider_block__card__body__top_line_block').next('.trading_block__predictions__slider_block__card__body__hover_info').removeClass('trading_block__predictions__slider_block__card__body__hover_info__dn');
  });
})
