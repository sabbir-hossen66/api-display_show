function indexUser() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => newUser(data))
}

function newUser(data) {
  console.log(data);
  const ul = document.getElementById('user-list');
  for (const user of data) {

    const li = document.createElement('li');
    li.innerText = user.phone;
    ul.appendChild(li)
  }
}