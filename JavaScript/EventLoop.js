// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n * n);
// }

// function printSquare(n) {
//   var squared = square(n);
//   console.log(squared);
// }

// printSquare(4);

[1, 2, 3, 4].forEach(function (i) {
  console.log("sync", i);
});

function asyncForEach(array, cb) {
  array.forEach(function () {
    setTimeout(cb, 0);
  });
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log("async", i);
});
// 여러개의 콜백을 큐에 쌓고, 스택이 비워지면 실제로 쌓인 콜백들이 실행되게 된다. (sync가 워낙 빠르기 때문에 여기서는 async의 진가가 나오지 않는다)
