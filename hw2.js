// Osipov Vladislav
// task 1
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login() {
        console.log(`Пользователь ${this.name} вошёл в систему`)
    }

    logout() {
        console.log(`Пользователь ${this.name} вышел из системы`)
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email, role);
    }

    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удалён администратором ${this.name}`)
    }
}

console.log('\n------ Task 1')
let user = new User('Hello', 'hello@mail.ru', 'user');
let admin = new Admin('Admin', 'admin@mail.ru', 'admin');
user.login()
user.logout();
admin.login();
admin.logout();
admin.deleteUser(user);


// task 2
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product, quantity) {
        this.products = [...this.products, ...Array(quantity).fill(product)];
    }

    removeProduct(product) {
        let productIndex = this.products.indexOf(product);
        productIndex !== -1 ? this.products.splice(productIndex, 1) : undefined;
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        console.log(`Цена корзины: ${totalPrice}`);
    }

    checkout() {
        console.log('Ваша корзина:');
        this.products.forEach(product =>
            console.log(`- ${product.name}`)
        );
        this.getTotalPrice();
    }
}

console.log('\n------ Task 2');
let product = new Product('Food', 40);
let product2 = new Product('No food', 300);
let shoppingCard = new ShoppingCart();
shoppingCard.addProduct(product, 3);
shoppingCard.addProduct(product2, 1);
shoppingCard.getTotalPrice();
shoppingCard.checkout();
shoppingCard.addProduct(product, 2);
shoppingCard.removeProduct(product2);
shoppingCard.checkout();


// task 3
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    listAllBooks() {
        console.log('Все книги в библиотеке:');
        this.books.forEach(book =>
            console.log(`- ${book.author}: ${book.title}  - ${book.pages} страниц`)
        );
    }
}

class LibraryUser {
    maxBooksPerUser = 3;

    constructor(library) {
        this.library = library;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= this.maxBooksPerUser) {
            throw new Error(`Нельзя брать больше ${this.maxBooksPerUser} книг!`);
        }
        let bookIndex = this.library.books.indexOf(book);
        if (bookIndex === -1) {
            throw new Error('Такой книги нет в библиотеке')
        } else {
            this.library.books.splice(bookIndex, 1);
            this.borrowedBooks.push(book);
        }
    }

    returnBook(book) {
        let productIndex = this.borrowedBooks.indexOf(book);
        if (productIndex === -1) {
            throw new Error('Вы не брали такой книги!');
        } else {
            this.library.books.push(book);
            this.borrowedBooks.splice(productIndex, 1);
        }
    }
}

console.log('\n------ Task 3');
let book = new Book('First', 'Mihail Noskov', 15);
let book2 = new Book('Second', 'Nikolay Petrov', 18);
let book3 = new Book('Third', 'Mihail Noskov', 23);
let library = new Library();
let libraryUser = new LibraryUser(library);

library.addBook(book);
library.addBook(book);
library.addBook(book2);
library.addBook(book3);
console.log(library.findBooksByAuthor('Mihail Noskov'));
library.listAllBooks();
libraryUser.borrowBook(book);
library.listAllBooks();
libraryUser.returnBook(book);
library.listAllBooks()
libraryUser.borrowBook(book);
libraryUser.borrowBook(book);
libraryUser.borrowBook(book2);
// uncomment to test >3 books error
// libraryUser.borrowBook(book3);


// task 4 (class Product already exists in task 2)
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

}

class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
    }

    addProduct(product, quantity) {
        this.products = [...this.products, ...Array(quantity).fill(product)];
    }

    calculateTotal() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }

    printOrder() {
        console.log(`Заказ покупателя ${this.customer.name}:`);
        this.products.forEach(product =>
            console.log(`- ${product.name}`)
        );
        console.log(`Стоимость заказа: ${this.calculateTotal()}`);
    }
}

console.log('\n------ Task 4');
let customer = new Customer('Who', 'who@mail.ru');
let customer2 = new Customer('You', 'you@gmail.com');
let order = new Order(customer);
let order2 = new Order(customer);
let order3 = new Order(customer2);
order.addProduct(product, 5);
order.addProduct(product2, 1);
order2.addProduct(product, 1);
order2.addProduct(product2, 1);
order3.addProduct(product2, 1);
order.printOrder();
order2.printOrder();
order3.printOrder();


// task 5
class Pet {
    constructor() {
        if (this.constructor === Pet) {
            throw new Error('Это абстрактный класс! Нельзя создавать объекты от него!');
        }
    }

    eat() {
        console.log('Животное ест');
    }

    makeSound() {
        throw new Error('Метод не имплементирован!');
    }
}

class Dog extends Pet {
    makeSound() {
        console.log('Собака лает');
    }

    sleep() {
        console.log('Собака спит');
    }
}

class Cat extends Pet {
    makeSound() {
        console.log('Кошка мяукает');
    }

    sleep() {
        console.log('Кошка спит');
    }
}

// uncomment to test that pet is abstract class
// let pet = new Pet();
// pet.makeSound();
console.log('\n------ Task 5');
let dog = new Dog();
dog.eat();
dog.makeSound();
dog.sleep();
let cat = new Cat();
cat.eat();
cat.makeSound();
cat.sleep();


// task 6
class Expression {
    constructor(first_number, second_number, operation) {
        this.first_number = first_number;
        this.second_number = second_number;
        this.operation = operation;
    }

    evaluate() {
        throw new Error('Эта операция не определена!');
    }

    toString() {
        return `${this.first_number} ${this.operation} ${this.second_number} = ${this.evaluate()}`
    }
}

class Addition extends Expression {
    constructor(first_number, second_number) {
        super(first_number, second_number, '+');
    }

    evaluate() {
        return this.first_number + this.second_number;
    }
}

class Subtraction extends Expression {
    constructor(first_number, second_number) {
        super(first_number, second_number, '-');
    }

    evaluate() {
        return this.first_number - this.second_number;
    }
}

class Multiplication extends Expression {
    constructor(first_number, second_number) {
        super(first_number, second_number, '*');
    }

    evaluate() {
        return this.first_number * this.second_number;
    }
}

class Division extends Expression {
    constructor(first_number, second_number) {
        super(first_number, second_number, '/');
    }

    evaluate() {
        if (this.second_number === 0) throw new Error('Нельзя делить на 0!');
        return this.first_number / this.second_number;
    }
}

console.log('\n------ Task 6');
console.log(new Addition(2, 11).toString());
console.log(new Subtraction(2, 11).toString());
console.log(new Multiplication(2, 11).toString());
console.log(new Division(2, 11).toString());
// uncomment to test division to zero
// console.log(new Division(2, 0).toString());
