function sum(...args) {
  var total = 0;
  args.forEach((arg) => {
    total += arg;
  });
  console.log(total);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
