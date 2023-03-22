const products=[{
    name:'MX',
    quantity:4,
    price:15
},
{
    name:'Bn',
    quantity:5,
    price:5
},
{
    name:'CT',
    quantity:1,
    price:5
}
]

const reducer = (accumulator, item,fun) => {

const total=()=>{ return item.price* item.quantity;}

const replenish=()=>{return item.quantity<3}

return accumulator+=replenish();
};


let total=products.reduce(reducer,0)
let replenish=products.reduce(reducer,0)
console.log(total)