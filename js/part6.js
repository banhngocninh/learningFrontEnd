document.write("Javascript in file .js");

let variable = 5;
var value = 10;
const PI = 3.14;
let sum = variable + PI;

document.write("<br />" + sum);

{
  var as2D = [
    ["1", "2", "3", "4"],
    ["A", "B", "C", "D"],
  ];
  console.log(as2D[1][1]);
}

let x = 10;
{
  let y = 2;
  console.log(y);
  console.log(x);
  let a = 5;
  let b = 10;
  b = +a;
  console.log("b " + b);
  let c = b + a;
  console.log("c " + c);
}
console.log(x);

if (x % 2 == 0) {
  console.log("x is even");
  let a = 5;
  let b = 10;
  b += a;
  console.log("b " + b);
  let c = b + a;
  console.log("c " + c);
}

if (true) {
  console.log("true");
}

if ("") {
  console.log("You will not see this message");
} else {
  console.log("You will see this message");
}

{
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Not a weekday";
  }
  console.log(day);
}

{
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
}

function message() {
  alert("Hello world!");
}

function input() {
  let number = prompt("Please enter a number");
  let temp = 0;
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
    if (i % 2 == 0) {
      document.write("The odd number: " + i + "<br />");
    } else document.write("The even number: " + i + "<br />");
  }
  document.write("Sum off number: " + sum + "<br />");

  for (let i = number - 1; i >= 0; i--) {
    if (i % 7 == 0 && i > temp) {
      temp = i;
      document.write("The number divisible by 7 is: " + temp + "<br />");
    }
  }

  let count = 0;
  if (number < 2) {
    document.write(number + " is not a prime number");
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) count++;
    }
  }
  if (count == 0) {
    document.write(number + " is a prime number");
  } else document.write(number + " is not a prime number");
}

function sumOfNumber() {
  let totalOfNumber = 0;
  let findMax = 0;
  let amountOfNumbers = prompt("please enter amount of numbers");
  let arrayOfNumbers = [];
  for (let i = 0; i <= amountOfNumbers - 1; i++) {
    let numbers = parseInt(prompt("Please enter number"));
    arrayOfNumbers[i] = numbers;
    console.log(arrayOfNumbers);
    totalOfNumber += arrayOfNumbers[i];
    if (numbers > findMax) {
      findMax = numbers;
    }
  }

  let newArrayOfNumbers = [];
  arrayOfNumbers.forEach((c) => {
    if (!newArrayOfNumbers.includes(c)) {
      newArrayOfNumbers.push(c);
    }
  });

  console.log("Total of number: " + totalOfNumber);
  console.log("Max of number: " + findMax);
  console.log("Array after delete duplicate: " + newArrayOfNumbers);
  console.log("Array after reverse: " + arrayOfNumbers.reverse());

  //Math.floor(Math.random() * amountOfNumbers);
}

function taylorSwiftInfo() {
  let TaylorSwift = {
    name: "Taylor Swift",
    addresses: {
      province: "West Reading, Pennsylvania",
      country: "Hoa Kỳ",
    },
    dOB: "December 13, 1989",
    website: "taylorswift.com",
  };

  console.log(TaylorSwift);
  let addMoreInfo = prompt("Do you want to add more information? (y/n)");
  while (addMoreInfo == "y" || addMoreInfo == "Y") {
    let information = prompt("What do you want to add?");
    let newValue = prompt("What kind of value of " + information + "?");
    TaylorSwift[information] = newValue;

    addMoreInfo = prompt("Do you want to add more information? (y/n)");
  }

  if (addMoreInfo == "n" || addMoreInfo == "N") {
    console.log("Goodbye");
  }
  console.log(TaylorSwift);
}

function findMaxInNumber() {
  let number = prompt("Write random number");
  let reverseNumber = parseInt(String(number).split("").reverse().join("", 10));
  document.write("The number: " + number + "<br />");
  document.write("The reverse is: " + reverseNumber + "<br />");
  let max = 0;
  let divide = 0;
  while (number > 0) {
    divide = number % 10; // kết quả trả về là chữ số cuối cùng của số
    d2 = number % 2;

    if (divide > max) {
      max = divide;
    }
    number = (number - divide) / 10;
  }
  document.write("The maximum is: " + max + "<br />");
}

function gcd_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y > 0) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function lcm_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return Math.abs((x * y) / gcd_two_numbers(x, y))
}

function text() {
  let number = parseInt(prompt("Write random number")); 
  let num2 = parseInt(prompt("Write random number"));
  document.write((number % 10) + "<br />");
  document.write((number % 2) + "<br />");
  document.write((number % 3) + "<br />");
  document.write("UCLN: " + gcd_two_numbers(number, num2) + "<br />");
  document.write("BCNN: " + lcm_two_numbers(number, num2) + "<br />");
}
