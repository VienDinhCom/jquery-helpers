# jQuery Helpers

## Installing
Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them. jQuery must come first, and then our plugins.

`
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://unpkg.com/jquery-helpers@latest/dist/jquery.helpers.js"></script>
`

## Usage

### $('.element').exists()
`$('.element').exists()` function helps us to check whether an element exists or not.

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
