/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass and it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(arrayOfInformation){
    let employeeObject = {
        firstName: arrayOfInformation[0],
        familyName: arrayOfInformation[1],
        title: arrayOfInformation[2],
        payPerHour: arrayOfInformation[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObject
}

function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let updatedDateStamp = dateStamp.split(" ");
    let employeeTimeIn = {
        type: "TimeIn",
        hour: parseInt(updatedDateStamp[1]),
        date: updatedDateStamp[0],
    }
    this.timeInEvents.push(employeeTimeIn)
    return this
}

function createTimeOutEvent(dateStamp){
    let updatedDateStamp = dateStamp.split(" ");
    let employeeTimeOut = {
        type: "TimeOut",
        hour: parseInt(updatedDateStamp[1]),
        date: updatedDateStamp[0],
    }
    this.timeOutEvents.push(employeeTimeOut)
    return this
}
function hoursWorkedOnDate(dateOfForm){
        let inEvent = this.timeInEvents.find(events => events.date == dateOfForm)
        let outEvent = this.timeOutEvents.find(events => events.date == dateOfForm)
        let totalTimeWorked = (outEvent.hour - inEvent.hour)/100
        return totalTimeWorked
}

function wagesEarnedOnDate(dateOfForm){
    let hoursWorked = hoursWorkedOnDate.call(this,dateOfForm)
    let payPerHour = this.payPerHour
    console.log(hoursWorked *payPerHour)
    return parseInt(hoursWorked * payPerHour)
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
    return payable
}

function findEmployeeByFirstName(srcArray,firstName){
    let found = srcArray.find(name => name.firstName == firstName)
    return found
}
function calculatePayroll(arrayOfEmployee){
    let totalPay = 0
    for(let employee of arrayOfEmployee){
        console.log(employee)
        totalPay += allWagesFor.call(employee)
    }
    return totalPay
    
}