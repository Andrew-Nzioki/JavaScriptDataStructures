let books = [
  { title: "Eloquent Javascript", price: 16.0, inventory: 5 },
  { title: "Eloquent :The good parts", price: 10.0, inventory: 5 },
  { title: "Eloquent Visually", price: 2.0, inventory: 1 },
  { title: "Eloquent Javascript", price: 16.0, inventory: 5 },
  { title: "Eloquent Javascript", price: 16.0, inventory: 2 },
  { title: "Eloquent The definitive Guide", price: 16.0, inventory: 0 },
];
let names = [
  { title: "Andrew", location: "Juja", country: "Kenya", age: 24 ,salary:2000},
  { title: "Ayalo", location: "Mathae", country: "Kenya", age: 24,salary:1000 }
];

function userStat(check) {
  console.log(check(names));
}

//
userStat;
//
function totalUsers(array) {
  let totalUsers = 0;
  for (let item of array) {
    totalUsers ++
  }
  console.log(totalUsers);
  return `Total users: ${totalUsers} users`
}
//
function totalSalaryPaid(array){
let total=0;
for(let salary of array){
    total+=salary.salary
}
return total
}
userStat(totalUsers);
userStat(totalSalaryPaid);
//
function printReport(foo) {
  console.log(foo(names));
  //totalInventoy(books)
}

function totalInventory(array) {
  let total = 0;
  for (let item of array) {
    total += item.inventory;
  }
  return `Total inventory : ${total} items`;
}
//printReport(totalInventory);

function replenish(array) {
  let replenishList = [];
  for (item of array) {
    if (item.inventory < 3) {
      replenishList.push(item.title);
    }
  }
  console.log(replenishList);
  return `Place order for : ${replenishList.join(", ")}`;
}
//printReport(replenish);
