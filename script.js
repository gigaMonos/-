/*
//примеры:
let userAge = 30 - 6; //число 30 и 6 это операнды
//либо 
let userHeight = h - y; // переменные  h y это операнды
//бинарный оператор применяеться к двум операндам 
let userAge = 30 - 6;
//унарный оператор это то который 
//применяется только к одному операнду
let userCash = -800;

//сложение
x = 8 + 2;
console.log(`Результат сложения: ${x}`);
//вычитание
x = 9 - 5;
console.log(`Result: ${x}`);
//умножение
x = 8 * 6;
console.log(`Result: ${x}`);
//деление
x = 81 / 9;
console.log(`results: ${x}`);
//взятие остатка от деления %
x = 11 % 3;
console.log(`results:${x}`);
//возведение в степень
x = 6 ** 3;
console.log(`results: ${x}`);

//специальные возможности операторов

//приминения оператора сложения к строкам 
let resultOne = "Freelancer " + "My " + "LifeStyle";
console.log(resultOne);

//строки и числа
let resultTwo = "Freelancer " + 36;
console.log(resultTwo);
console.log(typeof resultTwo);
//перестановка слогаемых суммы не меняет
//элимент принимает строчный ти

//казусы
let resultFree = 2 + '2';
console.log(resultFree); // = 22 потому, что элимент разные по типу

//вычисление с числовыми и строчными литералами 
let resultFive = 68 - 32 + " freelencer";
console.log(resultFive);
//Унарный оператор сложения преобразовывает все в номбер

//Работа других операторов 
let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

//или

let resultTwo = 10 * "8";

//недоступная операция 
let resultFree = 3 * "80";//Nan
//оператор присвоения 
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("result:" + a);
console.log("result:" + result);//Не рекомендуется
// так записывать изза низко читаемости кода

//присвоение по цепочке
let resultOne = resultTwo = resultThee = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThee);
//результат присваиваться всем переменным

//сокращенная запись вычемления с присваиванием
let users = 5;
users = users + 3;
users = users * 2;
//можно записать так
let users = 5;
console.log(users);
users += 3;
users *= 2;
console.log(users);

//Инкремент (++) и декремент(--)
//увеличивают или уменшают резкльтат на 1
let addUser = 2;
addUser++;
console.log(addUser);

let removeUser = 2;
removeUser--;
console.log(removeUser);

//формы икрементов и декремнтов
//постфиксная форма
let userCounter = 0;
let newUser = userCounter++;
console.log(newUser);
*/
//префиксная форма
let userCounter = 0;
let newUser = ++userCounter;
console.log(newUser);



