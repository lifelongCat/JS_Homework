// Osipov Vladislav
// task 1
function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) { return false }
    }
    return true;
}
console.log('\n------ Task 1')
for (let i = 2; i <= 20; i++) {
    console.log(i, isPrime(i));
}


// task 2
const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
let findMinMax = (numbers) => ({
    'min': Math.min(...numbers),
    'max': Math.max(...numbers),
})
console.log('\n------ Task 2');
console.log(numbers);
console.log(findMinMax(numbers));


// task 3
const user = {
    name: 'hello',
    age: 18,
    email: 'test@example.com',
    greet() {
        console.log(`Привет, ${this.name}!`);
    }
}
let displayUserInfo = (user) => console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`);
console.log('\n------ Task 3');
displayUserInfo(user);
user.greet();


// task 4
const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]
console.log('\n------ Task 4');
students.forEach((student, index) => console.log(`Студент ${student}, ваш порядковый номер: ${index}`))
function findLongestName(students) {
    let max_length = 0;
    let max_length_student = '';
    for (let student of students) {
        if (student.length > max_length) {
            max_length = student.length;
            max_length_student = student;
        }
    }
    return max_length_student;
}
console.log(findLongestName(students));


// task 5
let formatDate = (date) =>
    `${("0" + date.getDate()).slice(-2)}`
    + `.${("0" + date.getMonth() + 1).slice(-2)}`
    + `.${("000" + date.getFullYear()).slice(-4)}`
    + ` ${("0" + date.getHours()).slice(-2)}`
    + `:${("0" + date.getMinutes()).slice(-2)}`;
// return difference in milliseconds
let dateDifference = (date1, date2) => Math.abs(date1 - date2);
let millisecondsToReadableFormat = (milliseconds) => ({
    milliseconds: milliseconds % 1000,
    seconds: Math.floor(milliseconds / 1000) % 60,
    minutes: Math.floor(milliseconds / 1000 / 60) % 60,
    hours: Math.floor(milliseconds / 1000 / 60 / 60) % 24,
    days: Math.floor(milliseconds / 1000 / 60 / 60 / 24) % 30,
    months: Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 30) % 12,
    years: Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 30 / 12)
});
console.log('\n------ Task 5');
console.log(formatDate(new Date(Date.now())));
let difference = dateDifference(new Date(2024, 1, 1), new Date(2024, 3, 24));
console.log(difference);
console.log(millisecondsToReadableFormat(difference));


// additional task 1
let reverseString = (string) => string.split("").reverse().join("");
console.log('\n------ Additional task 1');
console.log(reverseString('hello world'));


// additional task 2
// g - global search (/pattern/flags)
let stringWithoutVowels = (string) => string.replace(/[aeiou]/g, '');
console.log('\n------ Additional task 2');
console.log(stringWithoutVowels('hello world'));
