/*---------------------------------Employee Wage--------------------------------------*/

console.log("Welcome to Employee Wage Problem");

//variable initialization

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
let Attendance=Math.floor(Math.random()*2);
console.log(Attendance);

//Checking employee is present or absent
//Present=1    Absent=0
if(Attendance==1){
    console.log("Employee is Present !!!");

    let Employee_Hours=getWorkignHours();

    console.log("Employee is Present for "+Employee_Hours+" Hours");
    let Employee_Wage=Employee_Hours*WAGE_PER_HRs;
    console.log("Employee Wage is : "+Employee_Wage);    

   }else{
    console.log("Employee is Absent");
}

function getWorkignHours(){
    let Attendance_Time=Math.floor(Math.random()*2);

    //Part_Time=0 Full_Time=1
    switch(Attendance_Time){
        case 0:
            return PART_TIME_HRs;
            break;

        case 1:
            return FULL_TIME_HRs   
            break;
        default:
            console.log(" ");
            break;
        }
 
}