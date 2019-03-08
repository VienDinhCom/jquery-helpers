console.log(`There are ${$('.element').exists()} elements in the page.`);

$('.element').exists((element, length) => {
	console.log({element, length});
});

$('.element').exists(null, () => {
	console.log(null);
});

$('.element').exists((element, length) => {
	console.log({element, length});
}, () => {
	console.log(null);
});
