// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue <T extends object, U> (obj: T, value: U): keyof T| undefined {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)){  // или return Object.keys(obj).find(key => obj[key as keyof T] === value) as keyof T | undefined;
              if (obj[key] === value){
                return key as keyof T;
    } 
}
}
return undefined;
}