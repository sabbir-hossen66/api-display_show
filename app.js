// function loadUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => extraLoad(data))
// }

// function extraLoad(data) {
//   console.log(data);
// }



//-------------
// function post() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }
// post()
// function displayPost(posts) {
//   const container = document.getElementById('container')
//   for (const man of posts) {
//     console.log(man);
//     const post = document.createElement('div');
//     post.innerHTML = `
//    <h4 style="color:red">user-${man.userId} </h4>
//    <h5>post-${man.title} </h5>
//    <p>body-${man.body}</p>
//     `
//     post.classList.add('post')

//     container.appendChild(post)
//   }
// }