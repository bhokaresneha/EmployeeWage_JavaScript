
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
    let dailyWageArray=new Array();
    let mapDayWithWage;
    let empDailyWageMap=new Map();
    let empDailyHrsMap=new Map();
    let empDailyHrsAndWageArr=new Array();

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
                       return 0;
                        break;
                }
            }
                
           function calculateTotalWage(dailyWage){
              monthlyWages += dailyWage
            }
            //calculating daily wage
            function calculateDailyWage(workingHrs){
                return workingHrs * WAGE_PER_HOUR;
            }
     
        //Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
        for ( i = 1; i<= MAX_WORKING_DAYS && totalWorkingHrs<MAX_WORKING_HRS ;i++)
        {      
            totalWorkingDays++;
            //getting working hr based on employee worked part time or full time
            attendance=parseInt(Math.random()*3)
            workingHrs=attendanceCheck(attendance)
            
            //Calculated daily wage storing in arrays
            dailyWage =calculateDailyWage(workingHrs)
            dailyWageArray.push(dailyWage);
            totalWorkingHrs=totalWorkingHrs+workingHrs;
            //UC-8 Using Map to store Day wise Wage
            empDailyWageMap.set(totalWorkingDays,dailyWage);
            //UC-9 Using Map to store Day wise Hours
            empDailyHrsMap.set(totalWorkingDays,workingHrs,);
            //UC-10 storing day hrs wage in single object(empDailyHrsAndWageArr) 
            empDailyHrsAndWageArr.push(
                {
                    dayNum: totalWorkingDays,
                    dailyHours: workingHrs,
                    dailyWage: calculateDailyWage(workingHrs),
                    toString() {
                        return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                            ' And Wage Earned = ' + this.dailyWage
                    },
                });

     
    }
//UC-6
 console.log(" Total Days= "+ totalWorkingDays +"\t Total Hrs= " + totalWorkingHrs + "\t Total Wage= " +monthlyWages);

// Array Helper functions      
//a.Calculate total Wage using Array forEach or reduce method
      dailyWageArray.forEach(calculateTotalWage); 
 console.log(" Total Days= "+totalWorkingDays+"\t Total Hrs="+totalWorkingHrs+"\tTotal Wage= "+monthlyWages);
 
        function totalWages(totalWage, dailyWage)
        {
            return totalWage + dailyWage;
                }
console.log("Emp Wage with reduce : " + dailyWageArray.reduce(totalWages, 0));

//b. Show the Day along with Daily Wage using Array map helper function  
        let day=0;
        function mapDayWithDailyWage(dailyWage){
            day++;
            return day+"="+dailyWage;
        }      
    mapDayWithWage = dailyWageArray.map(mapDayWithDailyWage);
    console.log("Daily Wage Map")
    console.log(mapDayWithWage);


//c. Show Days when Full time wage of 160 were earned using filter function

let empWithFullTime = mapDayWithWage.filter(day => day.includes("160"));
console.log(" Daily wage filter when fulltime wage earned: ")
console.log(empWithFullTime);

//d. Find the first occurrence when Full Time Wage was earned using find function
console.log("First time FullTime wage was earned on: "+mapDayWithWage.find(day => day.includes("160")));

//e. Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("Check all elements have full time wage: "+empWithFullTime.every(wage => wage.includes("160")));

//f. Check if there is any Part Time Wage
console.log("Check if there is any part time wage: "+mapDayWithWage.some(wage => wage.includes("80")));

//g. Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
   if(dailyWage>0){
      return numOfDays+1;
   }
    return numOfDays;
}
console.log("No. of days employee worked: "+dailyWageArray.reduce(totalDaysWorked,0));

//UC8-
console.log(empDailyWageMap);
console.log("Employee Wage Map totalWage : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0))
console.log("Daily wage using map: \n"+JSON.stringify([...empDailyWageMap.entries()]));


// UC-9 Arrow functions

//a. Calc total Wage and total hours worked

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(totalDaysWorked, 0);
let totalSalary = dailyWageArray
                                .filter(dailyWage => dailyWage > 0)
                                .reduce(totalWages, 0);
console.log("UC9A - Emp Wage with Arrow. : " + "Total Hours: " + totalHours + ", Total Wages: " + totalSalary);
//UC 9-b. Show the full workings days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
console.log(empDailyHrsMap);


empDailyHrsMap.forEach((value, key) => {
                                                if (value == 8) fullWorkingDays.push(key);
                                                else if (value == 4) partWorkingDays.push(key);
                                                else nonWorkingDays.push(key);
                                            });
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);


//UC-10

console.log("UC-10 Showing Daily Hours worked and Wage Earned : " + empDailyHrsAndWageArr);

//UC-11 using Object Functions along with Arrow Functions
//UC-11-a
let emptotalWages = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let emptotalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC 11A Total Hours : " + emptotalHours +", Total Wages : " + emptotalWages);

process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                           .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC 11C PartWorkingDayStrings : " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums : " + nonWorkingDayNums);

