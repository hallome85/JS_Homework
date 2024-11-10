// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string;
    start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
    constructor (public make: string, public model: string){
        this.make = make;
        this.model = model;
    }
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`
    }
   abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
   constructor (public make: string, public model: string, public year: number) {
    super (make, model);
    this.year = year;
   }
   getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`
   }
}
 
 // 4. Создайте объект класса Car и проверьте работоспособность

const myCar = new Car ('Kia', 'Sportage', 2016);
console.log (myCar.getDetails());
console.log (myCar.start());

