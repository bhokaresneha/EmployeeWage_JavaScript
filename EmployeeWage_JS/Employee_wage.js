
/*---------------------------------Employee Wage--------------------------------------*/

console.log("Welcome to Employee Wage Problem");

//variable initialization
    let attendance;
    let WAGE_PER_HOUR = 20;
    let WORKING_DAYS_PER_MONTH = 20;
    let MAX_WORKING_DAYS = 20;
    let MAX_WORKING_HRS = 100;
    let FULL_TIME_HRs=8;
    let PART_TIME_HRs=4
    let workingHrs = 0;
    let monthlyWages = 0;
    let totalWorkingHrs=0;
    let totalWorkingDays=0;
    let dailyWageArray=Array();
    let mapDayWithWage;

        function attendanceCheck(attendance)
        {
            switch (attendance) {
                    case 0:
                        return PART_TIME_HRs;
                        break;
                    case 1:
                        return FULL_TIME_HRs;
                        break;
                    default:
                        console.log(" ");
                        break;
                }
            }
                
            function calculateTotalWage(dailyWage){
              return monthlyWages += dailyWage
            }
            //calculating daily wage
            function calculateDailyWage(workingHrs){
                return workingHrs * WAGE_PER_HOUR;
            }
        
        //Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
        for ( i = 1; i<= MAX_WORKING_DAYS && totalWorkingHrs<MAX_WORKING_HRS ;i++){
          
            totalWorkingDays++;
            //getting working hr based on employee worked part time or full time
            attendance=parseInt(Math.random()*2)
            workingHrs=attendanceCheck(attendance)
            
            //Calculated daily wage storing in array
            dailyWage =calculateDailyWage(workingHrs)
            dailyWageArray.push(dailyWage);
            console.log("Daily wage is " + dailyWage);
            
            //Calculating Monthly wage
            monthlyWages = calculateTotalWage(dailyWage);
            //Calculating Total Working Hrs
            totalWorkingHrs=totalWorkingHrs+workingHrs;

        }
        console.log("\t Total Working Days="+totalWorkingDays+"\t Total working Hrs="+totalWorkingHrs+"\tMonthly Wages= "+monthlyWages);

        console.log("Daily Wages:: "+dailyWageArray);
        day=0;
        function mapDayWithDailyWage(dailyWage){
            day++;
            return day+"="+dailyWage;
        }


//a.Calculate total Wage using Array forEach or reduce method
      dailyWageArray.forEach(calculateTotalWage); 
      console.log("\t Total Working Days="+totalWorkingDays+"\t Total working Hrs="+totalWorkingHrs+"\tMonthly Wages= "+monthlyWages);

//b. Show the Day along with Daily Wage using Array map helper function        
    mapDayWithWage = dailyWageArray.map(mapDayWithDailyWage);
    console.log("Daily wage: \n"+mapDayWithWage);
    console.log("Total working days: "+totalWorkingDays+"\nTotal working hrs: "+ totalWorkingHrs+"\nTotal wage: "+monthlyWages);


//c. Show Days when Full time wage of 160 were earned using filter function

let empWithFullTime = mapDayWithWage.filter(day => day.includes("160"));
console.log("Emp with full time wage on days: "+empWithFullTime);

//d. Find the first occurrence when Full Time Wage was earned using find function
console.log("First time FullTime wage was earned on: "+mapDayWithWage.find(day => day.includes("160")));

//e. Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("Check if all elements have full time wage: "+empWithFullTime.every(wage => wage.includes("160")));

//f. Check if there is any Part Time Wage
console.log("Check if there is any part time wage: "+mapDayWithWage.some(wage => wage.includes("80")));

//g. Find the number of days the Employee Worked
let totalDaysWorked = 0;
totalDaysWorked = dailyWageArray.reduce((totalDaysWork, dailyWage) => {
    if(dailyWage > 0)
        totalDaysWork++;
    return totalDaysWork;
});
console.log("No. of days employee worked: "+ totalDaysWorked);

