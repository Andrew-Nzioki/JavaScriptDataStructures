const students=[
    {name:'Alexander',age:12,status:'admitted',fee:12000,registered:true},
    {name:'Alexander',age:12,status:'admitted',fee:12000,registered:false},
    {name:'Alexander',age:12,status:'admitted',fee:12000,registered:false}

]

function studentsReport(report){
    return console.log(report(students))
}

function getStudentNumber(array){
    let totalStudents=0
    for(let item of array){
        totalStudents++
    }
    return `Total students in the school : ${totalStudents}`
}

function calculateFees(array){
    let TotalFeeCollected=0;
    for(let item of array){
        TotalFeeCollected+=item.fee
    }
    return `Totall Fees collected from students : ${TotalFeeCollected}`
}
function calculateRegistered(array){
    let registered=0;
    for(item of array){
        registered+=item.registered
    }
    return `The number of Registered students : ${registered}`
}

studentsReport(getStudentNumber)
studentsReport(calculateFees)
studentsReport(calculateRegistered)