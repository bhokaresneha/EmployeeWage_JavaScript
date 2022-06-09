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
            monthlyWages = monthlyWages + dailyWage;
            //Calculating Total Working Hrs
            totalWorkingHrs=totalWorkingHrs+workingHrs;

          //  console.log("day=>"+i+"\t working hrs =>"+workingHrs+"\t Daily wage="+dailyWage+"\t Total working Hrs"+totalWorkingHrs);
        }
        console.log("\t Total Working Days="+totalWorkingDays+"\t Total working Hrs="+totalWorkingHrs+"\tMonthly Wages= "+monthlyWages);

        console.log("Daily Wages:: "+dailyWageArray);
    
