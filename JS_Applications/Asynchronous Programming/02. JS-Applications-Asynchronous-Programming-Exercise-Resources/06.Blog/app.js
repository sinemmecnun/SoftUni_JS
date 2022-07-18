async function attachEvents() {
    try {
        const loadPostsButton = document.getElementById('btnLoadPosts');
        const baseUrl = `http://localhost:3030/jsonstore/blog`;
        loadPostsButton.addEventListener('click', getPosts);

        async function getPosts(){
            const response = await fetch(`${baseUrl}/posts`);
            const data =  await response.json();
            
            const postOptions = document.getElementById('posts');
            for(let id in data){
                const option = document.createElement('option');
                option.setAttribute('value', `${id}`);
                option.innerHTML = `${data[id].title}`;
                postOptions.appendChild(option); 
            }
        }

    } catch (error) {
        console.log(error);
    }
}

attachEvents();