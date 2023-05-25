"use strict";
//Цикл FOr
for (var i = 0; i <= 10; i++) {
    console.log(i);
};
//Цикл While
//В цикле For все условия записываюися внутри (), В цикле While, условия цикла пишем в {}
//В While переменная задается заранее
var j = 1;
while (j < 10) {
    console.log(j);
    j++;
};
//DoWhile
//Выполняет итерацию, даже если цикл While не срабатывает, из-за невыполнимости условий
var x = 100;
do {
    console.log(x);
}
while (x < 50);
//Операторы цикла 
for (var y = 10; y <= 20; y += 2) {
    //Break прерывает итерации цикла при выполнении условия
    if (y > 15) break;
    console.log(y);
};
//Continue
for (var y = 10; y <= 20; y++) {
    //Пропускает итерацию условия и продолжает цикл
    if (y % 2 == 0) continue;
    console.log(y);
};
//Цикл в массиве
var arr = [3, 4, 5, 6, 77, 564];
for (var i = 0; i < arr.length; i++) {
    console.log("Элемент" + i + ":" + arr[i]);
};


//Всплывающие окна
//Alert
//Уведомление 
alert("Wow!");
//Confirm
//Есть 2 кнопки "ок" "отмена"
confirm("ОК?");
var dat = confirm("Is anybody here?");
if (dat) {
    alert("Yeeeh!");
};
//prompt
//Окно с полем для ввода данных
prompt("Скажите сколько вам лет?");
