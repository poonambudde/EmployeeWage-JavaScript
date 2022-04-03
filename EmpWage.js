console.log("Welcome to Employee Wage Program using java script")

// UC3 - write a function to get work hours.
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs=getWorkHours(empCheck);

    function getWorkHours(empCheck)
    {
        switch (empCheck) 
        {
            case IS_ABSENT:
                return 0;
                break;
            case IS_PART_TIME:
                return PART_TIME_HOURS; 
                break;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS; 
                break;
            default:
                return 0;
                break;
        }
    }
let empWage = empHrs * WAGE_PER_HOUR; 
console.log("Emp Work Hrs: "+ empHrs +", Emp Wage: " + empWage); 
}