// Завдання 2:
// В елементі select вивести згруповані options. Потрібно зробити наступні кроки:
// - з масиву об'єкта отримати масив властивостей, наприклад масив містить всі роки (вік)
// - з масиву віку отримати масив їх унікальних значень
// - сортування отриманого масиву
// - створення масиву з елементами options
// - вивід в select

// Задачу реалізувати з використанням pipe або composition

// Клієнтський код повинен мати можливість перевизначати 
// властивість об'єктів users, яке потрібно групувати name,
//  age або depratment і виводити в елемент select. 
// При цьому бізнес-логіка не повинна змінюватися!
let users = [
  { id: 1, name: "John", age: "20", department: "HR" },
  { id: 2, name: "Sasha", age: "30", department: "Marketing" },
  { id: 3, name: "Bill", age: "40", department: "Finance" },
  { id: 4, name: "Ashley", age: "20", department: "IT" },
  { id: 5, name: "Rachel", age: "40", department: "IT" },
  { id: 6, name: "Tom", age: "30", department: "HR" },
  { id: 7, name: "Steve", age: "30", department: "Marketing" },
  { id: 8, name: "Jim", age: "40", department: "IT" },
  { id: 9, name: "Willy", age: "20", department: "Finance" },
];

const products = [
  { id: 1, title: "Panasonic", price: 50 },
  { id: 2, title: "Samsung", price: 34 },
  { id: 3, title: "Grundic", price: 40 },
  { id: 4, title: "Electrolux", price: 34 },
  { id: 4, title: "Samsung", price: 50 },
  { id: 4, title: "Panasonic", price: 40 },
];

const curry = (fn) => (...args) => fn.bind(null, ...args);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

/*  Business logic */
const getProp = curry((prop, arr) => {return arr.map(user => user[prop])});
const groupedItems = arr => { return [... new Set(arr)]};
const sortBy = arr => {return arr.sort()};
const getOpts = arr => {return arr.map(item =>`<option>${item}</option>`)};

/* =========== client code ===============  */
const usersSelect = document.getElementById("users-select");
const productsSelect = document.getElementById("products-select");

//  Usage:
// getProps може приймати department, age, name, price, title
const userFn = pipe(getProp("department"), groupedItems, sortBy, getOpts);
const productFn = pipe(getProp("title"), groupedItems, sortBy, getOpts);

const usersOpts = userFn(users);
const productsOpts = productFn(products);

usersSelect.innerHTML = usersOpts.join("");
productsSelect.innerHTML = productsOpts.join("");