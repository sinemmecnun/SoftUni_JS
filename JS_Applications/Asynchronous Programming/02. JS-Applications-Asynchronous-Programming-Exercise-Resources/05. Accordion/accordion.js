async function solution() {
    try{
        const mainSection = document.getElementById('main');

        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
        
        if(response.ok == false){
            throw new Error('Error');
        }

        const data = await response.json();
        
        for(let article in data){
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('accordion');

            const title = data[article].title;
            const id = data[article]._id

            articleDiv.innerHTML = `
            <div class="head">
                <span>${title}</span>
                <button class="button" id="${id}" onclick="moreOnClick(event)">More</button>
            </div>
            <div class="extra">
            </div>`;

            mainSection.appendChild(articleDiv);
        }
    } catch(error){
        console.log(error);
    }
    
}

async function moreOnClick(ev){
    try{
        const currentTarget = ev.currentTarget;
        const parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');

        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${currentTarget.id}`);

        if(response.ok == false){
            throw new Error('Error');
        }
        
        const data = await response.json();

        extraDiv.innerHTML = `<p>${data.content}</p>`;
        
        if(currentTarget.textContent == "More"){
            currentTarget.textContent = "Less"
            extraDiv.style.display = "inline";
        }else{
            currentTarget.textContent = "More";
            extraDiv.style.display = 'none';
        }

    } catch(error){
        console.log(error);
    }
}

solution();