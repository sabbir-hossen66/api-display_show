function postIndex() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(res => res.json())
    .then(data => displayIndex(data))
}

function displayIndex(data) {
  const container = document.getElementById('container');
  for (const post of data) {
    console.log(post);
    const div = document.createElement('div');
    div.innerHTML = `
   <h4 style="color:red">user- ${post.id}</h4>
   <h3>title-${post.title}</h3>
   <p>body-${post.body}</p>
    `
    div.classList.add('post')
    container.appendChild(div);

  }

}