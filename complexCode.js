/*
File: complexCode.js
Content: A complex code demonstrating various advanced JavaScript concepts and techniques.
*/

// Define a class to represent a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`Starting the engine of ${this.make} ${this.model}`);
  }

  accelerate(speed) {
    console.log(`Accelerating ${this.make} ${this.model} to ${speed} mph`);
  }
}

// Define an array of car objects
const cars = [
  new Car("Toyota", "Camry", 2021),
  new Car("Honda", "Accord", 2020),
  new Car("Ford", "Mustang", 2019),
  new Car("Chevrolet", "Camaro", 2018),
];

// Function to get the total count of cars per make
function getCarsCountByMake() {
  const carsCount = {};

  for (const car of cars) {
    if (carsCount[car.make]) {
      carsCount[car.make]++;
    } else {
      carsCount[car.make] = 1;
    }
  }

  return carsCount;
}

// Function to filter cars by make and year
function filterCarsByMakeAndYear(make, year) {
  return cars.filter((car) => car.make === make && car.year >= year);
}

// Function to sort cars by year in ascending order
function sortCarsByYear() {
  return cars.sort((a, b) => a.year - b.year);
}

// Function to perform a specific action on each car
function performActionOnEachCar(action) {
  for (const car of cars) {
    action(car);
  }
}

// Function to print car information
function printCarInfo(car) {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
}

// Class representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduceYourself() {
    console.log(`Hi, my name is ${this.name}. I am ${this.age} years old.`);
  }
}

// Create some person objects
const person1 = new Person("John", 25, "Male");
const person2 = new Person("Lisa", 30, "Female");
const person3 = new Person("Mike", 35, "Male");

// Perform actions on each person
performActionOnEachCar(printCarInfo);
person1.introduceYourself();
person2.introduceYourself();
person3.introduceYourself();

// Call functions and display results
console.log(getCarsCountByMake());
console.log(filterCarsByMakeAndYear("Toyota", 2020));
console.log(sortCarsByYear());

// Calculate the sum of all car years
const sumOfCarYears = cars.reduce((sum, car) => sum + car.year, 0);
console.log("Sum of car years:", sumOfCarYears);

// Calculate the average year of the cars
const averageCarYear = sumOfCarYears / cars.length;
console.log("Average car year:", averageCarYear);

// Check if all car years are greater than 2015
const areAllCarsNew = cars.every((car) => car.year > 2015);
console.log("Are all cars new?", areAllCarsNew);

// Check if any car is from Ford
const isAnyCarFromFord = cars.some((car) => car.make === "Ford");
console.log("Is any car from Ford?", isAnyCarFromFord);

// Perform an asynchronous operation using Promises
function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async operation completed successfully.");
    }, 2000);
  });
}

async function performAsyncOperation() {
  try {
    const result = await simulateAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error("Error occurred during async operation:", error);
  }
}

performAsyncOperation();