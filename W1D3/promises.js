//////////////
// Promises //
//////////////

function delayedHello() {
  return new Promise(
    (resolve) => setTimeout(() => resolve("Hello after 1 second"), 1000)
  );
}

delayedHello().then(console.log);

//////////

function sayHi() {
  return new Promise(
    (resolve) => {
      setTimeout(
        () => resolve("Hi"),
        2000
      );
    }
  );
}

sayHi().then(console.log);

//////////

function cookPromise(dish) {
  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          if (dish === "Pizza") {
            resolve(dish + " is ready!")
          } else {
            reject("Sorry, we don't make " + dish)
          }
        }
        , 2000
      )
    }
  );
}

cookPromise("Pizza").then((val) => val.toUpperCase()).then(console.log).catch(console.log);
cookPromise("Sushi").then(console.log).catch(console.log);

cookPromise("Pizza").then(toUpp).then(console.log).catch(console.log);
function toUpp(str) {
  return str.toUpperCase()
}

/////////////////
// async/await //
/////////////////

async function orderFood(dish) {
  let result;
  try {
    result = await cookPromise(dish);
  } catch (err) {
    result = err;
  }
  console.log(result);
}

orderFood("Pizza");
orderFood("Sushi");

///////////////////
// Promise.all() //
///////////////////

const dish1 = cookPromise("Pizza");
const dish2 = cookPromise("Pizza");
const dish3 = cookPromise("Pizza");

Promise.all([dish1, dish2, dish3]).then(console.log).catch(console.log);

async function orderMoreFood(dish1, dish2, dish3) {
  let result;
  try {
    result = await Promise.all([cookPromise(dish1), cookPromise(dish2), cookPromise(dish3)]);
  } catch (err) {
    result = err;
  }
  console.log(result);
}

orderMoreFood("Pizza", "Pizza", "Pizza");

//////////

const dish11 = cookPromise("Pizza");
const dish22 = cookPromise("Sushi");
const dish33 = cookPromise("Pizza");

Promise.all([dish11, dish22, dish33]).then(console.log).catch(console.log);

orderMoreFood("Pizza", "Sushi", "Pizza");