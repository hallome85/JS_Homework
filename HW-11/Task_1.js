/*1. Создайте класс Employee с полями:
  firstName — имя сотрудника (строка).
  lastName — фамилия сотрудника (строка).
  profession — профессия сотрудника (строка).
  Приватное поле salary — зарплата сотрудника (число).*/

  class Employee {
        #salary;
         constructor(firstName,lastName, profession, salary) {
   this._firstName = firstName;
     this._lastName = lastName;
     this._profession = profession;
    this.#salary = salary;
         }
/*2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary. */
    get firstName() {
        return this._firstName;
      }
      set firstName(firstName) {
            typeof firstName !== "string" ? alert ('Неверный тип данных firstName') : this._firstName = firstName;
            }
      get lastName() {
        return this._lastName;
      }
      set lastName(lastName) {
        typeof lastName !== "string" ? alert ('Неверный тип данных lastName') : this._lastName = lastName;
                }
      get profession() {
        return this._profession;
      }
      set profession(profession) {
        typeof profession !== "string" ? alert ('Неверный тип данных profession') : this._profession = profession;
    }
      get salary() {
        return this.#salary;
      }
      set salary(salary) {
        typeof salary !== "number" ? alert ('Неверный тип данных salary') : this.#salary = salary;
    }
  
/*3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.*/
getFullName (){
    return (`${this.firstName} ${this.lastName}`);
        }
    }
  /*4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры: 
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    console.log(emp1.firstName); // "John"
    emp1.salary = 3100;
    console.log(emp1.salary); // 3100 
    console.log(emp1.getFullName()); */


/*5. Создайте класс Company с полями:
    title — название компании (строка).
    phone — телефон компании (число).
    address — адрес компании (строка).
    Приватное поле employees — массив сотрудников (пустой массив на старте). */

    class Company {
        #employees;
         constructor(title = '', phone = 0, address = '', employees = []) {
   this._title = title;
     this._phone = phone;
     this._address = address;
    this.#employees = employees;
         }
/*6. Реализуйте геттеры для полей title, phone, и address.*/
get title(){
    return this._title;
}
    get phone(){
        return this._phone;
    }
     get address(){
        return this._address;
     }

/*7. Добавьте методы:
    addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
    getEmployees() - возвращает массив всех сотрудников. */

    addEmployee(employee){
        (employee instanceof Employee) === true ? this.#employees.push(employee) : alert('Error - не является экземпляром Employee'); 
            }
    getEmployees(){
        return this.#employees;
    }

/*8. Проверьте корректную работу: /*
    const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
    company.addEmployee(emp1);
    company.addEmployee(emp2);
   console.log(company.getEmployees()); // [Employee, Employee] 
    console.log(company.getInfo()); */

/*9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
Компания: 
Адрес:
Количество сотрудников: */
getInfo(){
    return `Компания: ${this._title} \n Адрес: ${this._address} \n Кличество сотрудников: ${this.#employees.length}`;
}
};

const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
    company.addEmployee(emp1);
    company.addEmployee(emp2);
   console.log(company.getEmployees()); // [Employee, Employee] 
    console.log(company.getInfo());