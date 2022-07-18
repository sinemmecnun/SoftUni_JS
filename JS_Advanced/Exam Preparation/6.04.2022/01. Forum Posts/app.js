window.addEventListener("load", solve);

function solve() {

    //get input elements
    const input = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content')
    }

    //get post publishing elements
    const lists = {
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list')
    }

    //get publish button and add functionality
    document.getElementById("publish-btn").addEventListener('click', publish);

    //get clear button and add functionality
    document.getElementById('clear-btn').addEventListener('click', clear);


    function publish(event){
        event.preventDefault();


        //get input values
        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        //validate input
        if(title == "" || category == "" || content == ""){
            return;
        }

        //create li element for review
        const li = document.createElement('li');
        li.className = 'rpost';
        li.innerHTML = `<article>
            <h4>${title}</h4>
            <p>Category: ${category}</p>
            <p>Content: ${content}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`;

        //add functionality to buttons
        const editButton = li.querySelector('.edit');
        const approveButton = li.querySelector('.approve');
        editButton.addEventListener('click', edit);
        approveButton.addEventListener('click', approve);

        //add post for review
        lists.review.appendChild(li);

        //clear input fields
        input.title.value = "";
        input.category.value = "";
        input.content.value = "";

        function edit(){
            //return values to beginning
            input.title.value = title;
            input.category.value = category;
            input.content.value = content;
    
            li.remove();
        }
    
        function approve(){
            lists.published.appendChild(li);

            editButton.remove();
            approveButton.remove();
        }
    }

    function clear(){
        lists.published.innerHTML = "";
    }
}
