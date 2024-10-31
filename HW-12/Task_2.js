// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todo) {
    const url = "https://jsonplaceholder.typicode.com/todos";
    
    try {
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)  
        });
            if (response.status !== 201) {  
            throw new Error(`Error: ${response.status}`);
        }
            const data = await response.json();

            for (const key in todo) {
            if (todo[key] !== data[key]) {
                throw new Error(`Unexpected key: ${key}`);
            }
        }
            return data;
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Function is finished");
    }
}

createTodo({
    title: 'New Todo',
    completed: false,
    userId: 1
});