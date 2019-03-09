# jQuery Helpers
A set of jQuery Helpers for front-end development.

## Quick start
Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, and then our plugins.

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://unpkg.com/jquery-helpers@1.0.1/dist/jquery.helpers.js"></script>
```

## Download
Download ready-to-use compiled code to easily drop into your project: [https://unpkg.com/jquery-helpers@1.0.1/dist/](https://unpkg.com/jquery-helpers@1.0.1/dist/)

## Usage

### jQuery('.element').exists()
This code lets you check whether an element exists or not.

```
var length = $('.element').exists();

console.log('There are' + length + 'elements in the page.');
```

```
$('.element').exists(function (element, length) {
	console.log({element, length});
}, () => {
	console.log(null);
});
```

```
$('.element').exists(function (element, length) {
	console.log({element, length});
});
```

```
$('.element').exists(null, function() {
	console.log(null);
});
```

### jQuery(window).matchMedia()
This code lets you handle things differently when the window is very narrow.

```
var isMobile = $(window).matchMedia('(max-width: 767px)');

if (isMobile) {
  console.log('Mobile');
} else {
  console.log('Desktop');
}
```

```
$(window).matchMedia('(max-width: 767px)', function (matches) {
  if (matches) {
    console.log('Mobile');
  } else {
    console.log('Desktop');
  }
});
```

```
$(window).matchMedia('(max-width: 767px)', function () {
  console.log('Mobile');
}, function () {
  console.log('Desktop');
});
```
