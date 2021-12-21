// При выборе соответствующего option осуществить вывод
//     пользователей соответствующих выбранному возрасту
// в элемент <div id="res"></div>
// То есть при выборе например 20 должны вывестись  
// John, Ashley, Willy

const usersSelect = document.getElementById('users-select');
const res = document.getElementById('res');

let users = [
 {id: 1, name: "John", age: "20"},
 {id: 2, name: "Sasha", age: "30"},
 {id: 3, name: "Bill", age: "40"},
 {id: 4, name: "Ashley", age: "20"},
 {id: 5, name: "Rachel", age: "40"},
 {id: 6, name: "Tom", age: "30"},
 {id: 7, name: "Steve", age: "30"},
 {id: 8, name: "Jim", age: "40"},
 {id: 9, name: "Willy", age: "20"}
]

const ages = users.reduce((acc,item) => {
  let age = Number(item.age);
  !acc.includes(age) && acc.push(age)
  return acc
},[])
// console.log(`arr age---->`, ages)

ages.forEach(element => {
  let item = document.createElement('option');
  item.setAttribute('value', element);
  item.textContent = element;
  usersSelect.appendChild(item);
})
// console.log(`usersSelect---->`, usersSelect)

usersSelect.addEventListener('change', (event) => {
  let fiterAge = users.filter((element) => element.age === usersSelect.value);
  // console.log(fiterAge)
  fiterAge.forEach((element) => {
    let userName = document.createElement('p');
    userName.textContent = element.name;
    res.append(userName);
  })
})



//  usersSelect.addEventListener('change', (event) => {
  
//   res.textContent = `You like ${name}`;
//  } )
