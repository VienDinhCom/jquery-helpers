var exists = $('.sec-header').exists();
var amount = exists;

console.log(amount);

if (exists) {
  console.log(1);
} else {
  console.log(0);
}

$('.sec-header').exists(function () {
  console.log(1);
});

$('.sec-header').exists(null, function () {
  console.log(0);
});

$('.sec-header').exists(function () {
  console.log(1);
}, function () {
  console.log(0);
});
