const taskDoc = document.querySelectorAll('.task');
const descriptionDoc = document.querySelector('.description')

const description = {
    0: 'Задание 1. Дано длинное логическое выражение. Не исполняя код, разложить это выражение до конечного результата. Выполнить исходный код в браузере и проверить со своим результатом. Исходный код задания: ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true) Цель задания - понять логику работы логических операторов.',
    1: 'Задание 2. Создайте переменную age с указанием возраста в диапазоне от 1 до 100 (включительно) Проверить условия: Если значение попадает в диапазон от 17 до 59 (включительно), вывести: "Вам еще работать и работать"; При значении более 59 - вывести: "Вам пора на пенсию". При значении от 1 до 17 (включительно), вывести: "Вам еще рано работать"',
    2: 'Задание 3. Правильно написать фразу "на ветке сидело &ltn&gt ворон". Переменная n - случайное число от 0 до 1000 (вкл). В зависимости от числа, коректно указывать окончание слова "ворона".',
    3: 'Задание 4. Дано три случайных целых числа [-100 : 100]. Вывести в консоль наибольшее из них. Вывести в консоль наименьшее из них. Пользоваться Math.max() и Math.min() запрещено! Пример: a = 3, b = 98, c = -43 Наимобльшее число: 98 Наименьшее число: -43',
    4: 'Задание 5. Одно яблоко весит 100 г, а один апельсин - 150 г. Нам дают несколько яблок и несколько апельсинов (от 0 до 10 шт). Хочется взять то, что весит больше. Выведите в консоль что надо взять: яблоки или апельсины? Пример: Яблок: 7 Апельсинов: 5 Бери апельсины!'
}

taskDoc.forEach((el, i) => {
    if (el.classList.contains('active')) {
        descriptionDoc.innerHTML = description[i]
    }
})

for (let el of taskDoc) {
    el.addEventListener('click', () => {
        taskDoc.forEach(e => {
            e.classList.remove('active')
        })
        el.classList.add('active')
        taskDoc.forEach((el, i) => {
            if (el.classList.contains('active')) {
                descriptionDoc.innerHTML = description[i]
            }
        })
    })
}

// Task 1

// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)
// Разбиваем на 2 части. Рассмотрим левую часть
//      => (5 >= 7) || ("javascript" != "java")
//      => false || true => true
// Рассмотрим правую часть
//      => !(((11 * 3) == 99) && true)
//      => !(false && true) => !(false) => true
// Вернемся к общему выражению, получим:
//      => true && true => true
// Ответ на выражение true

const ANSWER = ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)

//Task 2 
const AGE = Math.floor(Math.random() * 100 + 1)
let work
if (AGE > 59) {
    work = 'Вам пора на пенсию'
} else if ((AGE > 17) && (AGE <= 59)) {
    work = 'Вам еще работать и работать'
} else {
    work = 'Вам еще рано работать'
}
let verdict = `Возраст: ${AGE} => ${work}`

//Task 3
const N = Math.floor(Math.random() * 1001)
let line = `На ветке `
if ((N % 100 >= 10) && (N % 100 < 21)) {
    line += `сидело ${N} ворон` 
} else if (N % 10 === 1) {
    line += `сиделa ${N} ворона` 
} else if ((N % 10 >= 2) && (N % 10 < 5)) {
    line += `сидело ${N} вороны` 
} else {
    line += `сидело ${N} ворон` 
}

//Task 4
randFunk = () => {
    return Math.floor(Math.random() * 201 - 100)
}

let [a, b, c] = [randFunk(), randFunk(), randFunk()]
let [maxNum, minNum] = [-101, 101]

if ((a > b) && (a > c)) {
    maxNum = a 
    b > c ? minNum = c : minNum = b
} else if ((b > a) && (b > c)) {
    maxNum = b 
    a > c ? minNum = c : minNum = a
} else {
    maxNum = c
    a > b ? minNum = b : minNum = a
}
let maxMinResult = `Среди [${a}, ${b}, ${c}] min = ${minNum}, max = ${maxNum}`

//Task 5 
const numberOfFruits = () => {
    return Math.floor(Math.random() * 11)
}

let [apples, oranges] = [numberOfFruits(), numberOfFruits()] 
let [weightOfApples, weightOfOranges] = [100, 150]
let totalApplesAndOranges = `Яблок: ${apples}, Апельсинов: ${oranges} => `
weightOfApples * apples > weightOfOranges * oranges ? totalApplesAndOranges += `Бери Яблоки` : totalApplesAndOranges += `Бери Апельсины`

//Output of all results
let task = {
    0: ANSWER,
    1: verdict,
    2: line,
    3: maxMinResult,
    4: totalApplesAndOranges
}

taskDoc.forEach((el, i) => {
    console.log(task[i])
    el.innerHTML = task[i]
})