const findBestEmployee = function(employees) {
    let bestEmployee;
    let value = 0;
for (const key in employees) {
   
    // let bestEmployee;
    // console.log(employees[key]);
    // console.log(bestEmployee);
    // console.log(value);

    if (employees[key] > value) {
        bestEmployee = key;
        value = employees[key];
    }
    // console.log(typeof bestEmployee);
};
// console.log(bestEmployee);
return bestEmployee;
}

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      
      helen: 1,
      lorence: 99,
    }));

    console.log(
        findBestEmployee({
          poly: 12,
          mango: 17,
          ajax: 4,
        }),
      ); // mango
      
      console.log(
        findBestEmployee({
          lux: 147,
          david: 21,
          kiwi: 19,
          chelsy: 38,
        }),
      ); // lux