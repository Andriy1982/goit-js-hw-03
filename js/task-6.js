const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalCostProduct;

  for (const item of allProducts) {
    if (item.name === productName) {
      //   console.log(Object.values(item));
      return item.price * item.quantity;
      //   console.log("Hello");
    }
    // console.log(Object.keys(item));
    // console.log(item);
    // console.log(item[productName]);
    // console.log(item.name);
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
