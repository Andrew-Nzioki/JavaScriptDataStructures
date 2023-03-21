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
      inventory: 2,
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

   
  //will loop through inventory
  //find the first object whose condition returns true based on a callback

//   function loopThroughAndFind(inventory,finder){
//     let result=null
//     for(let item of inventory){
//         if(finder(item)===true){
//             result=item
//             break
//         }
//     }
//     return result
//   }


//ALTERNATIVE BETTER APPROACH
let foundItem=books.find(stockFirst)
let InStockItem=books.find(InStock)
  //will find given book

  function isBook(book){
    return book.title==='JavaScript: The definitive guide'
  }
//   console.log(loopThroughAndFind(books,isBook))

  //will find first book that needs to be stocked
  function stockFirst(item){
    return item.inventory<3
  }
  function InStock(item){
    return item.inventory>5
  }

console.log(foundItem)
console.log(InStockItem)