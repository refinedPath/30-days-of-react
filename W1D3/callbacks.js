function double(num) {
  return num * 2
}

function applyToFive(func) {
  console.log(func(5));
}

applyToFive(double);

//////////

function shout(str) {
  return str.toUpperCase() + "!"
}

function process(str, func) {
  console.log(func(str));
}

process("hello", shout);

//////////

function cook(dish, cb) {
  setTimeout(() => {
    cb(dish + " is ready!")
  }, 2000);
}

cook("Pizza", console.log);

//////////

function calculate(num1, num2, cb) {
  const result = cb(num1, num2);
  console.log(result);
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function compare(num1, num2) {
  return Math.max(num1, num2);
}

calculate(3, 7, add);
calculate(3, 7, multiply);
calculate(3, 7, compare);