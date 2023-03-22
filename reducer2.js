const products = [
  {
    name: 'MX',
    quantity: 4,
    price: 15
  },
  {
    name: 'Bn',
    quantity: 6,
    price: 5
  },
  {
    name: 'CT',
    quantity: 7,
    price: 5
  }
];

const reducer = (accumulator, item) => {
  let inStock = item.quantity > 4;
  if (inStock) {
    accumulator.push(item.name);
  }
  return accumulator;
};

let inStockItems = products.reduce(reducer, []);
console.log('In stock items:', inStockItems);
