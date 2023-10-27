/**
 * sophisticated_code.js
 * This code demonstrates a sophisticated and elaborate implementation of an employee management system.
 * It includes multiple classes, data structures, and complex logic.
 */

// Define the Employee class
class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.manager = null;
    this.subordinates = [];
  }

  setManager(manager) {
    this.manager = manager;
    manager.addSubordinate(this);
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
  }

  getManager() {
    return this.manager;
  }

  getSubordinates() {
    return this.subordinates;
  }

  getTotalSalary() {
    let totalSalary = this.salary;
    for (const subordinate of this.subordinates) {
      totalSalary += subordinate.getTotalSalary();
    }
    return totalSalary;
  }
}

// Define the Department class
class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getTotalBudget() {
    let totalBudget = 0;
    for (const employee of this.employees) {
      totalBudget += employee.getTotalSalary();
    }
    return totalBudget;
  }
}

// Create employees
const john = new Employee(1, 'John Doe', 5000);
const jane = new Employee(2, 'Jane Smith', 6000);
const mike = new Employee(3, 'Mike Johnson', 7000);
const sarah = new Employee(4, 'Sarah Parker', 5500);
const david = new Employee(5, 'David Brown', 4500);

// Create departments
const engineering = new Department('Engineering');
const sales = new Department('Sales');

// Assign employees to departments
engineering.addEmployee(john);
engineering.addEmployee(jane);
engineering.addEmployee(david);
sales.addEmployee(mike);
sales.addEmployee(sarah);

// Assign managers
john.setManager(jane);
david.setManager(jane);
mike.setManager(sarah);

// Print employee and department details
console.log('Employee Details:');
console.log('=================');
console.log('John Doe - Manager:', john.getManager().name);
console.log('Jane Smith - Subordinates:', jane.getSubordinates().map(emp => emp.name));
console.log('Total Salary of Jane Smith:', jane.getTotalSalary());
console.log('\nDepartment Details:');
console.log('==================');
console.log('Engineering - Employees:', engineering.employees.map(emp => emp.name));
console.log('Sales - Total Budget:', sales.getTotalBudget());
