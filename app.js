function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => extraLoad(data))
}

function extraLoad(data) {
  console.log(data);
}