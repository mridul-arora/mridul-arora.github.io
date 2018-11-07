(function($) {

  //Home Background Slider

  $(function() {

    $.mbBgndGallery.buildGallery({
      containment: "#intro",
      timer: 1500,
      effTimer: 1000,
      controls: "#controls",
      grayScale: false,
      shuffle: false,
      preserveWidth: false,
      effect: "fade",
      effect: {
        enter: {
          left: 0,
          opacity: 0
        },
        exit: {
          left: 0,
          opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
      },

      // If your server allow directory listing you can use:
      // (however this doesn't work locally on your computer)

      //folderPath:"testImage/",

      // else:

      image: [
        "img/bgslides/1.jpg",
        "img/bgslides/2.jpg",
        "img/bgslides/3.jpg"
      ],


      onStart: function() {},
      onPause: function() {},
      onPlay: function(opt) {},
      onChange: function(opt, idx) {},
      onNext: function(opt) {},
      onPrev: function(opt) {}
    });


  });

  // featured text
  $("#rotator .1strotate").textrotator({
    animation: "dissolve",
    speed: 2500
  });
  $("#rotator .2ndrotate").textrotator({
    animation: "dissolve",
    speed: 2500
  });

  // Carousel
  $('.service .carousel').carousel({
    interval: 500
  })

  //works
  $(function() {
    Grid.init();
  });

  //animation
  new WOW().init();

})(jQuery);

var Grid = (function() {

		// list of items
	var $grid = $( '#og-grid' ),
		// the items
		$items = $grid.children( 'li' ),
		// current expanded item's index
		current = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos = -1,
		// extra amount of pixels to scroll the window
		scrollExtra = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded = 10,
		$window = $( window ), winsize,
		$body = $( 'html, body' ),
		// transitionend events
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support = Modernizr.csstransitions,
		// default settings
		settings = {
			minHeight : 500,
			speed : 350,
			easing : 'ease'
		};
})();

var bgslider=[
    {
        pic: "img/bgslides/1.jpg",
    },
     {
        pic: "img/bgslides/2.jpg",
    },
     {
        pic: "img/bgslides/3.jpg",
    },
];

function change_bg()
{
    var i = Math.floor((Math.random() * 4));
    document.getElementById("slider").src =bgslider[i].pic;
}
setInterval(function(){
    change_bg();
}, 1500);
