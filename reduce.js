let books = [
  {
    title: "Eloquent JavaScript: A modern Introduction to Programming",
    price: 10.0,
    inventory: 10,
  },
  {
    title: "JavaScript & JQuary: Interactive Front-End Web Development",
    price: 10.0,
    inventory: 3,
  },
  {
    title: "JavaScript: The good Parts",
    price: 10.0,
    inventory: 4,
  },
  {
    title: "Eloquent JavaScript: A modern Introduction to Programming",
    price: 10.0,
    inventory: 15,
  },
  {
    title: "JavaScript: The definitive guide",
    price: 25.0,
    inventory: 4,
  },
  {
    title: "You dont know JS",
    price: 6.25,
    inventory: 7,
  },
];

const reducer = (accumulator, item) => {
  console.log(accumulator, item);
  let total = item.price * item.inventory;
  return accumulator += total;
};

let total = books.reduce(reducer, 0);
