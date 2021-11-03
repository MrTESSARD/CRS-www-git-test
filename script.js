document.querySelector('.btn').addEventListener('click', function(){
    fetch('http://localhost:8000/getData.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let postList = document.querySelector('#postList')
            for (const postDATA of data) {
                let post = document.createElement('div')
                post.innerHTML = `
                    <h1>${postDATA.title}</h1>
                    <p>${postDATA.content}</p>
                `
                postList.append(post)
            }
        })
})

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    let input = document.querySelector('input[name=title]')
    let userValue = input.value

    var formDATA = new FormData();
    formDATA.append('title', userValue)

    fetch('http://localhost:8000/addPost.php', {
        method: "POST",
        body: formDATA
    })
    .catch(error => console.log(error))
})