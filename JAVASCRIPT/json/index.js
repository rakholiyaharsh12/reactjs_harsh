fetch('http://localhost:3000/comments')
.then(response => response.json())
.then(data => console.log(data)) 

fetch('http://localhost:3000/posts')
.then(response => response.json())
.then(data => console.log(data)) 

fetch('http://localhost:3000/profile')
.then(response => response.json())
.then(data => console.log(data)) 