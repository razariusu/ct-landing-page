var o, i, t, h;

$(window).on('load', function() {
  $('.flexslider').flexslider({
    animation: "slide",
    start: function() {
      console.log('init');
      o = $('.footer').offset().top;
      h = $('.footer').innerHeight() / 2;
      t = o + h;
    },
  })
  console.log("Done");
});

$(document).ready(function() {
  $('.searchForm').mouseenter(function() {
    if ($(window).width() < 1367) {
      $('.divSearchForm').addClass('extend');
      $('.navMid').addClass('navMidMove');
    }
  });

  $('.inputField').focus(function() {
    if ($(window).width() < 1367) {
      $('.divSearchForm').addClass('extend');
      $('.navMid').addClass('navMidMove');
    }
  })

  $('.searchForm').mouseleave(function() {
    if ($(window).width() < 1367 && (!$('.inputField').is(':focus'))) {
      $('.divSearchForm').removeClass('extend');
      $('.navMid').removeClass('navMidMove');
    }
  })

  $('.inputField').focusout(function() {
    $('.divSearchForm').removeClass('extend');
    $('.navMid').removeClass('navMidMove');
  })

  $(window).scroll(function() {
    if ($(document).scrollTop() + $(window).height() > t) {
      $('.stickyFixed').addClass('changedOpacity');
    } else {
      $('.stickyFixed').removeClass('changedOpacity');
    }

  });

  $('.searchContainer').click(function() {
    $('.inputMobileContainer').toggleClass('toggleSearch');
  })

  $('.menuContainer').click(function() {
    $('.navUlMobile').toggleClass('toggleUl');
  })

  $('.liUl').click(function() {

    if ($('.nestedUl').hasClass('showMore')) {
      $('.overlay').removeClass('overlayShow');
      $('.showMore').fadeTo(150, 0, function() {
        $('.nestedUl').removeClass('showMore');
        $('.liUl').removeClass('activeMore');

      });

    } else {
      $('.overlay').addClass('overlayShow');
      $('.liUl').addClass('activeMore');
      $('.nestedUl').addClass('showMore');
      $('.showMore').fadeTo(150, 1);
    };
  });

  $('.overlay').click(function() {
    if ($('.nestedUl').hasClass('showMore')) {
      $('.overlay').removeClass('overlayShow');
      $('.showMore').fadeTo(150, 0, function() {
        $('.nestedUl').removeClass('showMore');
        $('.liUl').removeClass('activeMore');

      });

    } else {
      $('.overlay').addClass('overlayShow');
      $('.liUl').addClass('activeMore');
      $('.nestedUl').addClass('showMore');
      $('.showMore').fadeTo(150, 1);
    };
  })

  $('.buttonMenu').click(function() {


    $('body').toggleClass('mobile-nav-active');
    $('.buttonMenuI').toggleClass('fa-times fa-bars');
    $('.mobile-nav-overly').toggle();
  });

  $('.mobileAnchorDropdown').click(function() {
    $(this).next().toggle();
  })


  $('.currencyDropdown li a').click(function() {
    var clicked = $(this).html();
    console.log(clicked);
    $('.changeCurrency').html(clicked);
  })

  $('.clickSearch').click(function() {
    if ($('.mobileSearchToggle').css('display') === 'none') {
      console.log("not shown");
      $('.mobileSearchToggle').toggle();
      $('.mobileAnchorSearch').toggle();
    }
  });

  $('.mobile-nav').click(function(e) {
    var tar = $(e.target).attr('class');
    if ($('.mobileSearchToggle').css('display') !== 'none' && (tar !== 'searchToggle' && tar !== 'mobileAnchorWithIcon mobileAnchorSearch' && tar !== "mobileSearchToggleForm" && tar !== 'clickSearch' && tar !== "mobileAnchorSearch" && tar !== "mobileSearchToggle")) {
      console.log(tar);
      $('.mobileSearchToggle').css('display', 'none');
      $('.mobileAnchorSearch').css('display', 'flex');
    };
  });

  $('.mobile-nav-overly').click(function() {
    $('body').toggleClass('mobile-nav-active');
    $('.buttonMenuI').toggleClass('fa-times fa-bars');
    $('.mobile-nav-overly').toggle();
  });
});
