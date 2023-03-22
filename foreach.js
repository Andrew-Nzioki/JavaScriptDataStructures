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
//STAGE 1
function loopThrough(inventory,foo){
    for(let item of inventory){
        foo(item)
    }
}
//STAGE 2
function logTitle(item){
    console.log(item.title.toUpperCase())
}
//console.log(loopThrough(books,logTitle))

//STAGE 3
//forEach
numbers=[1,2,3,4,1,2,2]
books.forEach(logTitle)

books.forEach((item)=>item.title.toLowerCase())
numbers.forEach((item)=>{
    if(item+item===8){
    console.log(item)}})