// this is fizzbuzz code

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let number = 1; number <= answer; number++) {
  if (number % 3 ===0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else if (number % 3 === 0) {
      console.log("Fizz");
  }
  
  else {
    console.log(number);
  }
}
