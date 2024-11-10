// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue <T extends object, U> (obj: T, value: U): keyof T| undefined {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)){
              if (obj[key] === value){
                return key as keyof T;
    } 
}
}
return undefined;
}
const exampleObject = {
    a: 1,
    b: 2,
    c: 3
};

console.log(getKeyByValue(exampleObject, 2)); // Вывод: "b"
//console.log(getKeyByValue(exampleObject, 5)); // Вывод: undefined