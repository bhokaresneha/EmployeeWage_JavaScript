/*---------------------------------Employee Wage--------------------------------------*/

console.log("Welcome to Employee Wage Problem");

/*Check Employe is Present or Absent Using Random Function*/

let Attendance=Math.floor(Math.random()*2);
console.log(Attendance);

//Checking employee is present or absent
//Present=1    Absent=0
if(Attendance==1){
    console.log("Employee is Present !!!");
}else{
    console.log("Employee is Absent !!!");
}