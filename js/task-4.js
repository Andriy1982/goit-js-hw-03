const countTotalSalary = function (employees) {
  const arrays = Object.values(employees);
  //   console.log(arrays);

  let result = 0;
  for (const array of arrays) {
    result += array;
  }
  return result;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
