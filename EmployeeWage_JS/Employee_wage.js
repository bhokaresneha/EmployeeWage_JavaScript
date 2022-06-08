/*---------------------------------Employee Wage--------------------------------------*/

console.log("Welcome to Employee Wage Problem");

//variable initialization
const prompts=require("prompt-sync")();

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
let Employee_Hours=0;
let Employee_Total_Working_Hours=0;
let Attendance=Math.floor(Math.random()*2);
console.log(Attendance);

//Checking employee is present or absent
//Present=1    Absent=0
if(Attendance==1){
    console.log("Employee is Present !!!");

    getWageforMultipleDays();
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
function getWageforMultipleDays(){
    let Total_Working_Days=prompts("Enter Total Number of Working Days : ");
    for(let i=0;i<Total_Working_Days;i++){
        Employee_Hours=getWorkignHours();
        Employee_Total_Working_Hours=Employee_Total_Working_Hours+Employee_Hours;
    }
    console.log("Total Working Hours of Employee is : "+Employee_Total_Working_Hours);
    let Employee_Wage=Employee_Total_Working_Hours*WAGE_PER_HRs;
    console.log("Employee Wage is : "+Employee_Wage);
}