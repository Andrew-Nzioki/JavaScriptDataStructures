let students=[
    {
        name:'Joan',
        age:12,
        stipend:13.00,
        fees:100
    }
    ,
    {
        name:'John',
        age:19,
        stipend:12.00,
        fees:100
    },
    {
        name:'Evans',
        age:18,
        stipend:19.00,
        fees:100
    },
    {
        name:'Jenna',
        age:17,
        stipend:30.00,
        fees:100
    }
]

let isOldEnough=students.find(OldEnough)
let findStipend=students.find((item)=>{
    return item.stipend>15
})
function OldEnough(item){
    return item.age>14
}

console.log(isOldEnough)
console.log(findStipend)