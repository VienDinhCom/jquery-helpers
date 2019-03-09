console.log(`There are ${$('.element').exists()} elements in the page.`);

$('.element').exists(function (element, length) {
	console.log({element, length});
});

$('.element').exists(null, function() {
	console.log(null);
});

$('.element').exists(function (element, length) {
	console.log({element, length});
}, () => {
	console.log(null);
});
