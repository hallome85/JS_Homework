// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds (seconds){
    setTimeout(() => {
        console.log("Promises... Promises everywhere :'(");
        }, seconds*2000);
     }
     delayTwoSeconds(2);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const promiseOne = new Promise ((resolve, reject) => {
    resolve(1);
});
promiseOne.then((result) => {console.log(result);});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseTwo = new Promise ((resolve, reject) => {
    reject ("Promise failed");
});
promiseTwo.catch ((rejected) => {console.log(rejected)}); 

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber (number) {
    return new Promise ((resolve, reject) => {
        resolve (`Resolved with number ${number}`);
    })
};
//promiseNumber(3).then ((resolved) => {console.log(resolved)});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((resolvedRes) => {console.log(`${resolvedRes[0]} \n${resolvedRes[1]} \n${resolvedRes[2]}`)});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {console.log('Fulfilled:', result.value);
        }else{
            console.log('Rejected:', result.reason);
            }
        });
    });
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function all(){
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        console.log(results);   
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log("End");
    }
  }
  
  all();

  async function allSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
            } else {
                console.log('Rejected:', result.reason);
            }
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log("End");
    }
}

allSettled();