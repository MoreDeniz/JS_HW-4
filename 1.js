"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const ifNull = ' – это ноль';
const ifEven = ' – четное число';
const ifOdd = ' – нечетное число';
let myString = '';
for (let number = 0; number < 10; number++) {
    if (number === 0) {
        myString = number + ifNull;
    } else if (number % 2 == 0) {
        myString = number + ifEven;
    }
     else if (number % 2 === 1) {
        myString = number + ifOdd;
    }
    console.log(myString);
}

