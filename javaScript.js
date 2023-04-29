'use strict'

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.

class Circle { 
    constructor(circleRadius, circleDiameter) {
        this.circleRadius = circleRadius;
        this.circleDiameter = circleDiameter;
    }

    set radius(radiusValue) { 
        this.circleRadius = radiusValue;
    }

    get backRadius() {
        return this.circleRadius;
    }

    get backDiameter() {
        return this.circleDiameter;
    }

    getArea() {
        return Math.PI * this.circleRadius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.circleRadius;
    }
}

const myCircle = new Circle(11 , 12); 

console.log("Площа Кола " + myCircle.getArea());     
console.log("Довжина Кола " + myCircle.getPerimeter());

// --------------------------------------------------------

/*Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. 
Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().*/

class Employee { 
    constructor(name, salary, position, age) {
        this.name = name; 
        this.salary = salary;
        this.position = position;
        this.age = age;
    }

    getName() {
        return this.name;
      }
    
      getPosition() {
        return this.position;
      }
    
      getSalary() {
        return this.salary;
      }

      getAge() { 
        return this.age
      }
    
      setName(name) {
        this.name = name;
      }
    
      setAge(Age) {
        this.age = age;
      }
      setPosition(position) {
        this.position = position;
      }
    
      setSalary(salary) {
        this.salary = salary;
      }

}

const Roman = new Employee('Roman', 2500, 'Developer', 25 );
const Artem = new Employee('Artem', 2000, 'Designer', 31 );
const Natalia = new Employee('Natalia', 1800, 'Manager', 33 );
const Inna = new Employee('Inna', 1800, 'Manager', 37);

const workers = [Roman, Artem, Natalia, Inna];

class EmpTable {
    constructor(employeeList) {
      this.employeeList = employeeList;
    }
  
    getHtml() {
      const tableBody = document.querySelector('#employee-table tbody');
  
      tableBody.innerHTML = '';
  
      this.employeeList.forEach(employee => {
        const row = tableBody.insertRow();
  
        const nameCell = row.insertCell();
        nameCell.innerText = employee.getName();
  
        const positionCell = row.insertCell();
        positionCell.innerText = employee.getPosition();
  
        const salaryCell = row.insertCell();
        salaryCell.innerText = employee.getSalary();
  
        const ageCell = row.insertCell();
        ageCell.innerText = employee.getAge();
      });
  
      return document.querySelector('#employee-table').outerHTML;
    }
  }
    
  const empTable = new EmpTable(workers);
  const tableHtml = empTable.getHtml();
  
  