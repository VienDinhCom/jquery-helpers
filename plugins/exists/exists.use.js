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
