/////////////////////////////////////////////////////////////////
// Array methods .includes() and .find() and template literals //
/////////////////////////////////////////////////////////////////

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// TASK A: Use .includes() to check if "cherry" is in the array. Log the result.

console.log(fruits.includes("cherry"));

// TASK B: Use .find() to get the first fruit that is longer than 5 characters. Log it.

console.log(fruits.find(fruit => fruit.length > 5));

// TASK C: Use a template literal to log: "The first long fruit is: ____"
//         (fill in the blank with your result from Task B)

const longFruit = fruits.find(fruit => fruit.length > 5);
console.log(`The first long fruit is: ${longFruit}`);

////////////////////////////////////////////////////////
// Array methods .map() and .filter() (with chaining) //
////////////////////////////////////////////////////////

const students = [
  { name: "Alice", grade: 87 },
  { name: "Bob", grade: 55 },
  { name: "Charlie", grade: 92 },
  { name: "Diana", grade: 41 },
  { name: "Eve", grade: 78 },
];

// TASK A: Use .map() to create a new array of just the student names. Log it.

const studentNames1 = students.map(student => student.name);
console.log(studentNames1);
const studentNames2 = students.map(({ name }) => name);
console.log(studentNames2);

// TASK B: Use .filter() to create a new array of students who passed (grade >= 60). Log it.

const passingStudents = students.filter(({ grade }) => grade >= 60);
console.log(passingStudents);

// TASK C: Chain .filter() and .map() to get the names of students who passed.

const studentsWhoPassed1 = students
  .filter(student => student.grade >= 60)
  .map(student => student.name);
const studentsWhoPassed2 = students
  .filter(({ grade }) => grade >= 60)
  .map(({ name }) => name);
console.log(studentsWhoPassed1);
console.log(studentsWhoPassed2);

//////////////////////////////////
// ES Modules (import / export) //
//////////////////////////////////
