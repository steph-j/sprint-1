//1
for (var row = "#"; row.length < 8; row += "#")
  console.log(row);

//2.1
var number = 0

for (number = 0;number <= 100; number++) {
  if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
};

//2.2
var number = 0

for (number = 0;number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
};

//3

var size = 8;
var board = "";

for (var row = 0; row < size; row++)  {
  for (var col = 0; col < size; col++) {
    if((row + col) % 2 == 0) 
      board += " ";
    else
      board += "#";
      }
  board += "\n"
};
console.log(board);