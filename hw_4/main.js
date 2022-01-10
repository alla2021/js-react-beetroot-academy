// Завдання 1:
// Вивести на сторінці 10 постів з ресурсу👉 https://jsonplaceholder.typicode.com/posts
// Виводити:
//      - заголовок поста
//     - посилання на автора цього поста
// <span class = "author-link"> Get author </ span>
//      При кліці на посилання завантажити з сервера дані автора поста, вивести під посиланням:
//       - ім'я user
//       - кількість постів цього user
const posts = document.getElementById ("posts");

function makeRequest() {
  fetch('http://jsonplaceholder.typicode.com/posts?_start=8&_limit=10')
  .then(response => {
    return response.json()
  })
  .then(function (data) {
    renderList(data)
  })
  .catch(error => console.log('Error', error));
}

function renderList(data) {
  const list = document.querySelector('#list');
  for (let item of data) {
    list.insertAdjacentHTML('afterbegin', `<li class="item">Title: ${item.title}; <span class="author-link"> Get author </span></li>`)
  }
}




makeRequest();

// Завдання 2:
// Провести refactoring коду, використовуючи Promise👇 і щоб виклик функцій був наступним (наведено, ще нижче)
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.onreadystatechange = handleResponse;
// xhr.send();

// function handleResponse(response) {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject('Error');
//   }
// }

// function getJSON(url) {
//   return fetch(url)
//     .then(handleResponse)
//     .then(r => r.json());
// }

// function generateListItems(users) {
//   return users
//     .map((u) => `<li class="list-group-item">${u.name}</li>`)
//     .join("");
// }

// function generateUnorderedList(listItems) {
//   return `<ul class="list-group">${listItems}</ul>`;
// }

// function addUsersToPage(users) {
//   document.getElementById("users").innerHTML = users;
// }

// getJSON("https://jsonplaceholder.typicode.com/users")
// .then(generateListItems)
// .then(generateUnorderedList)
// .then(addUsersToPage);