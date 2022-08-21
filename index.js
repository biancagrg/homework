//homework 2
function collectFirstName(employees) {
  console.info("employees", employees);
  if (!employees) {
    console.info("you did not provide any value");
  }
  var firstNames = employees.map(function (employee) {
    return employee.firstName;
  });
  console.warn("firstNames:", firstNames);
  return firstNames;
}

collectFirstName(employees);

//homework 3
function calculateAverageSalary(employees) {
  var sum = 0;
  employees.forEach(function (employee) {
    sum += parseFloat(employee.salary);
  });
  return (sum / employees.length).toFixed(2);
}

var average = calculateAverageSalary(employees);
console.log("average", average);

//homework 4 - ?? var nrFem
function calculateAverageFemSalary(employees) {
  var sum = 0;
  var nrFem = 0;
  employees.forEach(function (employee) {
    if (employee.gender === "Female") {
      sum += parseFloat(employee.salary);
      nrFem++;
    }
  });
  return (sum / nrFem).toFixed(2);
}

var average = calculateAverageFemSalary(employees);
console.warn("average female salary:", average);

//homework 5
function splitEmployees(employees) {
  var femEmployees = employees.filter(checkFemale);
  var maleEmployees = employees.filter(checkMale);
  return [femEmployees, maleEmployees];
}

function checkFemale(employee) {
  return employee.gender === "Female";
}

function checkMale(employee) {
  return employee.gender === "Male";
}

var split = splitEmployees(employees);
console.log("female and male employees arrays:", split);

//homework 6
var converted = {};
function convertToObject(employees) {
  employees.forEach(function (employee) {
    converted[employee.lastName] = employee;
  });
}

convertToObject(employees);
console.warn("employees array to object", converted);

//homework 9
function born1500(inventors) {
  return inventors.filter(function (inventor) {
    return inventor.year >= 1500 && inventor.year < 1600;
  });
}

var selectedInventors = born1500(inventors);
console.log("inventors born in the 1500's", selectedInventors);

//homework 10
function firstLast(inventor) {
  return inventor.first + " " + inventor.last;
}
var fullName = inventors.map(firstLast);
console.warn("inventors first and last name:", fullName);

//homework 10 var 2
function getFirstAndLastName(inventor) {
  return { first: inventor.first, last: inventor.last };
}

var fullName2 = inventors.map(getFirstAndLastName);
console.warn("var 2 - inventors first and last name:", fullName2);

//homework 11
function findLeo(inventor) {
  return inventor.first === "Galileo";
}
var leo = inventors.find(findLeo);
console.log("Galileo Galilei:", leo);

//homework 12
function totalYearsLivedCalc(total, inventors) {
  return total + (inventors.passed - inventors.year);
}

var totalYearsLived = inventors.reduce(totalYearsLivedCalc, 0);
console.warn("total years lived:", totalYearsLived);