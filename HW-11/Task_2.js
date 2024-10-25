/*1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден. */

class Employee {
    #salary;
     constructor(firstName,lastName, profession, salary) {
this.firstName = firstName;
 this.lastName = lastName;
 this.profession = profession;
this.#salary = salary;
     }
get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
       if ((typeof firstName !== "string") || (!(/^[a-zA-Z]{2,50}$/).test(firstName))) {
        throw new Error(`Invalid firstName ${this._firstName}`);
       }  this._firstName = firstName;
       }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if ((typeof lastName !== "string") || (!(/^[a-zA-Z]{2,50}$/).test(lastName))){
        throw new Error (`Invalid lastName ${this._lastName}`);
    } this._lastName = lastName;
            }
  get profession() {
    return this._profession;
  }
  set profession(profession) {
    if ((typeof profession !== "string") || (!(/^[A-Za-z\s]*$/).test(profession)) || (profession.length === 0)) {
        throw new Error (`Invalid profession ${this._profession}`)     
    }  this._profession = profession;
}
  get salary() {
    return this.#salary;
  }
  set salary(salary) {
    if ((typeof salary !== "number") || (salary < 0 || salary > 10000)){
        throw new Error (`Invalid salary ${this.#salary}`)
    }  this.#salary = salary;
}
getFullName (){
return (`${this.firstName} ${this.lastName}`);
    }}

class Company {
    #employees;
     constructor(title, phone, address, employees = []) {
this.title = title;
 this.phone = phone;
 this.address = address;
this.#employees = employees;
     }
get title(){
return this._title;
}
set title(title) {
if (typeof title !== "string") {
    throw new Error ('Invalid type of title')     
}  this._title = title;
}
get phone(){
    return this._phone;
}
set phone(phone) {
    if (typeof phone !== "string") {
        throw new Error ('Invalid type of phone')     
    }  this._phone = phone;
}
 get address(){
    return this._address;
 }
 set address(address) {
    if (typeof address !== "string") {
        throw new Error ('Invalid type of address')     
    }  this._address = address;
}
addEmployee(employee){
    if (!(employee instanceof Employee)){
        throw new Error ('Не является экземпляром Employee');
    } this.#employees.push(employee);
        }
getEmployees(){
    return this.#employees;
}
getInfo(){
return `Компания: ${this._title} \n Адрес: ${this._address} \n Кличество сотрудников: ${this.#employees.length}`;
}
findEmployeeByName(firstName){
    if(typeof firstName !== "string"){
        throw new Error ('Not a string');
    }  
    const employee = this.#employees.find((el) => el.firstName === firstName);
    if (!employee) {
        console.log(`${firstName} do not exist`);
    }
    return employee;
}
#getEmployeeIndex(firstName){
    const index = this.#employees.findIndex((el) => el.firstName === firstName);
    if (index === -1){
        throw new Error ('Employee do not exist');
    }
    return index;
}
removeEmployee(firstName){
       return this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
    }
getTotalSalary(){
    return this.#employees.reduce((total, el) => total + el.salary, 0);
}
}

/*2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени. 
   Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
   Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee */
/*3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.*/

/*4. Добавление валидации для полей сотрудника в сеттеры:
  Employee:
    firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
    profession — строка, не может быть пустой, только латинские буквы и пробелы.
    salary — число, должно быть больше 0 и меньше 10000. */
/*5. Проверьте свой код: */
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
    const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

    const company = new Company("Tech Corp", "123-456", "Main Street");
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    company.addEmployee(emp3);

    console.log(company.getTotalSalary()); // 12000
    console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
    company.removeEmployee("John");
    console.log(company.getEmployees()); // [Employee, Employee]


