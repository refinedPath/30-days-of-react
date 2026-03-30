///////////////////////////////////
// Object dot & bracket notation //
///////////////////////////////////

const user = {
  firstName: "Alex",
  age: 28,
  country: "Canada",
};

// TASK A: Access and log each property using dot notation
// Example: console.log(user.firstName)
// Now do the same for age and country

console.log(user.firstName);
console.log(user.age);
console.log(user.country);

// TASK B: Access `country` using bracket notation and log it
// Hint: bracket notation looks like object["key"]

console.log(user["country"]);

// TASK C: Add a new property `email` with any value to `user`, then log the full object
// Hint: you can add properties the same way you access them

user.email1 = "email1@email.com";
user["email2"] = "email2@email.com";

console.log(user.email1);
console.log(user["email2"]);
console.log();
console.log(user);



///////////////////////////////////////////////////////////
// Object destructuring (basic, rename, default, nested) //
///////////////////////////////////////////////////////////

const product = {
  title: "Wireless Keyboard",
  price: 49.99,
  category: "Electronics",
  inStock: true,
};

// TASK A: Destructure `title` and `price` from product, then log them

const { title, price } = product;
console.log(title, price);

// TASK B: Destructure `category` but rename it to `dept`, then log it
// Hint: { originalKey: newName } = object

const { category: dept } = product;
console.log(dept);

// TASK C: Destructure `rating` (which doesn't exist) with a default value of 0, then log it
// Hint: { key = defaultValue } = object

const { rating = 0 } = product;
console.log(rating);

const { rating: score = 0 } = product;
console.log(score);



////////////////////////////////////////////////
// Array destructuring (positional, skipping) //
////////////////////////////////////////////////

const order = {
  id: 1042,
  items: ["Laptop", "Mouse", "Monitor"],
  customer: {
    name: "Sam",
    address: {
      city: "Denver",
      zip: "80202",
    },
  },
};

// TASK A: Use nested destructuring to extract `city` in one line
// Hint: const { customer: { address: { ??? } } } = order

const { city: city1 } = order.customer.address;
const { city: city2 } = order.customer["address"];
const { city: city3 } = order["customer"].address;
const { city: city4 } = order["customer"]["address"];
console.log(city1, city2, city3, city4);

const { customer: { address: { city } } } = order;
console.log(city);

// TASK B: Destructure the `items` array to get the first and second item
// Hint: const [first, second] = someArray

const [first, second] = order.items;
console.log(first, second);


// TASK C: Destructure `items` but skip the first item and get only the second and third
// Hint: you can skip with a comma: const [, second, third] = someArray

const [, second2, third] = order.items;
console.log(second2, third);



///////////////////////////////////////////////////////////////
// spread operator (merge objects) Rest parameters (...args) //
///////////////////////////////////////////////////////////////

const defaults = {
  theme: "light",
  language: "en",
  fontSize: 14,
};

const userPrefs = {
  theme: "dark",
  fontSize: 18,
};

// TASK A: Use spread to merge `defaults` and `userPrefs` into a new object `settings`
// userPrefs should override defaults where keys overlap
// Hint: const merged = { ...obj1, ...obj2 } — later object wins

const merged = { ...defaults, ...userPrefs };
console.log(merged);

// TASK B: Write a function `sum` that accepts any number of arguments and returns their total
// Hint: function sum(...nums) — nums becomes an array
// Test with: sum(1, 2, 3) → 6 and sum(10, 20) → 30

function sum( ...nums ) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20));

////////////////////
// W1D1 challenge //
////////////////////

const employee = {
  name: "Jordan",
  role: "Designer",
  department: "Product",
  skills: ["Figma", "CSS", "Prototyping"],
  address: {
    city: "Austin",
    state: "TX",
  },
};

// TASK 1: Destructure `name`, `role`, and rename `department` to `team`

const { name, role, department: team } = employee;

// TASK 2: Use nested destructuring to extract `city` from address

const { address: { city: city5 } } = employee;

// TASK 3: Create `updatedEmployee` using spread that:
//   - copies all of employee
//   - changes role to "Lead Designer"
//   - adds startYear: 2024
//   (do NOT mutate the original)

const updatedEmployee = { ...employee, role: "Lead Designer", startYear: 2024 };

// Log everything to verify

console.log(name, role, team);
console.log(city5);
console.log(employee);
console.log(updatedEmployee);
