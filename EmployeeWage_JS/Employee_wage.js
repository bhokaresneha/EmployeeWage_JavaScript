/*---------------------------------Employee Wage--------------------------------------*/

console.log("Welcome to Employee Wage Problem");

//variable initialization
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        // console.log(" Employee is Present for Part Time ");
        return PART_TIME_HRs;
        break;
    case 1:
        // console.log(" Employee is Present for Full Time ");
        return FULL_TIME_HRs;
        break;
    default:
        // console.log("Employee is ABSENT ");
    return 0;    
        break;        
}
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random()*2);
    totalEmpHrs += getWorkingHrs(employeeCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HRs;
console.log("Total Days is :- " + totalWorkingDays+ "\nTotal Employee Hrs is:- "
    +totalEmpHrs+ " \nEmploye wage is :- " +empWage);