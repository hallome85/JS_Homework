/* 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'] */


const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Marinara', 'peperoni', 'Margarita', '4 cheeses', 'hawai'];
const competitorPizzasBig = [];
const myPizzasBig = [];
const resaltOfComparion = [];
for (let i = 0; i < myPizzas.length || i < competitorPizzas.length; i++) {
    if (i < competitorPizzas.length) {
      competitorPizzasBig.push(competitorPizzas[i].toUpperCase());
    }
    if (i < myPizzas.length) {
      myPizzasBig.push(myPizzas[i].toUpperCase());
    }
  }
for (const pizza of myPizzasBig){
    if (!competitorPizzasBig.includes(pizza)){
        resaltOfComparion.push(pizza);
        } 
        }
if (resaltOfComparion.length !== 0 ){
    console.log(resaltOfComparion);
}else{
    console.log('null');
} 