function reverseNumber(number) {
  return number.split("").reverse().join("");
}

alert(reverseNumber(prompt("Please enter a number to reverse")));

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log("The number " + i + " is Even");
  } else {
    console.log("The number " + i + " is odd");
  }
}

function sortString(str) {
  return str.split("").sort().join("");
}

alert(sortString(prompt("Enter a word to reverse").toLowerCase()));

function dashToEven(number) {
  let newString = "";
  for (let i = 0; i < number.length; i++) {
    if (
      parseInt(number[i], 10) % 2 === 0 &&
      parseInt(number[i + 1], 10) % 2 === 0
    ) {
      newString += number[i] + "-";
    } else {
      newString += number[i];
    }
  }
  return newString;
}

alert(dashToEven(prompt("Enter a number")));

function ageChecker(age) {
  let str = parseInt(age, 10) >= 18 ? "You're an adult" : "You're a minor";
  return str;
}
alert(ageChecker(prompt("Enter your age")));
