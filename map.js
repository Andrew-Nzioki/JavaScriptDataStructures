books = [
  {
    title: "Eloquent JavaScript: A modern Introduction to Programming",
    price: 10.0,
    inventory: 10,
  },
  {
    title: "JavaScript & JQuary: Interactive Front-End Web Development",
    price: 10.0,
    inventory: 2,
  },
  {
    title: "JavaScript: The good Parts",
    price: 10.0,
    inventory: 2,
  },
  {
    title: "Eloquent JavaScript: A modern Introduction to Programming",
    price: 10.0,
    inventory: 2,
  },
  {
    title: "JavaScript: The definitive guide",
    price: 25.0,
    inventory: 0,
  },
  {
    title: "You dont know JS",
    price: 6.25,
    inventory: 7,
  },
];


//Return an array of titles

//Loop Through array
//for each item in the array update/change/transform that item without mutating original array
//make a new array to hold the updated/changed/transformed items

// function loopAndUpdate(array,updaterFoo){
//     const updatedArray=[];

//     for(let item of array){
 
//         updatedArray.push(updaterFoo(item))
//     }
//     return updatedArray
// }


const title=books.map((item)=>item.title)




//Return an array of titles
// function titles(item){
//     return item.title
// }
//return an array of prices
function pricesFoo(item){
    console.log('Inside of pricesFoo',item)
    return item.price
}

// const prices=books.map(pricesFoo)


//return an array of inventory
// function inventory(item){
//     return item.inventory
// }

const inventory=books.map((item)=>item.inventory
)
// console.log(inventory)
//return an array of books, 50% iff
function halfOffoo(item){
    let itemCopy=Object.assign({},item)
    itemCopy.price=Math.floor(itemCopy.price/2)
    return itemCopy
}
const halfOff=books.map(halfOffoo)
console.log(halfOff)
// console.log(loopAndUpdate(books,halfOff))
// console.log(loopAndUpdate(books,prices))