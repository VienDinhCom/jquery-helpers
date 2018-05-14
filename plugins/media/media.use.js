var isMobile = $(window).media('(max-width: 767px)');

if (isMobile) {
  console.log('Mobile');
} else {
  console.log('Desktop');
}

$(window).media('(max-width: 767px)', function (matches) {
  return (matches) ? $('box').hide() : $('box').show();
});

$(window).media('(max-width: 767px)', function (matches) {
  if (matches) {
    $('body').css('background', 'blue');
  } else {
    $('body').css('background', 'red');
  }
});

$(window).media('(max-width: 767px)', function () {
  $('h1').css('color', 'red');
}, function () {
  $('h1').css('color', 'blue');
});

// ///////////////////////////////

$(window).media('(max-width: 767px)', function (matches) {
  if (matches) {
    $('body').css('background', 'blue');
  } else {
    $('body').css('background', 'red');
  }
}, null, false);

$(window).media('(max-width: 767px)', function () {
  $('h1').css('color', 'red');
}, function () {
  $('h1').css('color', 'blue');
}, false);
