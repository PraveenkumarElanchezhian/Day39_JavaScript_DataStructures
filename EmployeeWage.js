const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs =0;
let totalWorkingDays =0;
let totalEmpWage =0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empCheck;
let empHrs;

function getWorkingHours(empCheck) 
{
    switch (empCheck) 
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        default:
        return 0;
    }
}

function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

while (totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH)
{
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalWorkingDays++;
    totalEmpHrs += empHrs;
    if(totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH)
    {
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
}
totalWorkingDays-=1;
totalEmpHrs -= empHrs;
console.log(empDailyWageMap);
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Emp Wage: " + empWage);


// UC7A - Calc total Wage using Array forEach traversal or reduce method
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC 7A - Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Emp Wage: " + empWage);
function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC 7A - Emp Wage Using Reduce: "+empDailyWageArr.reduce(totalWages, 0));

// UC7B - Show the Day along with Daily Wage Using Array Map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC7C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime Wage was Earned on Day: "+
    mapDayWithWageArr.find(findFulltimeWage));

// UC7E - Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element have Full Time Wage: "+
    fullDayWageArr.every(isAllFulltimeWage));

// UC7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any Part Time Wage: "+
    mapDayWithWageArr.some(isAnyPartTimeWage));

// UC7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage)
{
    if(dailyWage > 0) return numOfDays+1;
    else return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked: "+
    empDailyWageArr.reduce(totalDaysWorked, 0));

//UC8
console.log("UC 8 - Emp Wage Map Total: "+
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0));