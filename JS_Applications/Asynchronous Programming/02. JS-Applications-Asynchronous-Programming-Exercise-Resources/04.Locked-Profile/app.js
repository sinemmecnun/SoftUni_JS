async function lockedProfile() {
    try{
        //get elements
        const divProfiles = document.querySelector('profile');
        const mainDiv = document.getElementById('main');

        //clear initial profile
        mainDiv.innerHTML = "";

        //get data from server
        const response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);

        const data = await response.json();

        //iterate over data
        for(let user in data){
            //get attributes of profile
            const id = user;
            const username = data[user].username;
            const email = data[user].email;
            const age = data[user].age;

            //create profile div
            const profileUser = document.createElement('div');
            profileUser.setAttribute('class', 'profile');
            profileUser.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${id}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${id}Locked" value="unlock"><br>
            <hr>
            
            <label>Username</label>
            <input type="text" name="user${id}Username" value="${username}" disabled readonly />
            <div class="user${id}HiddenFields hiddenInfo">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${id}Email" value="${email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user${id}Age" value="${age}" disabled readonly />
                </div>
                    
            <button>Show more</button>`;
            
            //append the new div and add event listener to the button
            mainDiv.appendChild(profileUser);
            const showMoreButton = profileUser.querySelector('button');

            showMoreButton.addEventListener('click', () => {
                //get locked status
                const checked = profileUser.querySelector('input[type=radio]:checked');

                //check if the profile is unlocked
                if (checked && checked.value === 'unlock') {

                    if (showMoreButton.innerText === 'Show more') {
                        const info = profileUser.querySelector(`div.user${id}HiddenFields`);
                        //info.style.display = 'inline';
                        info.classList.remove('hiddenInfo');
                        showMoreButton.innerText = 'Hide it'
                    } else {
                        profileUser.querySelector(`div.user${id}HiddenFields`).style.display = 'none'
                        showMoreButton.innerText = 'Show more'
                    }
                }
            })
        }

    } catch(error){
        console.log(error);
    }
    

}
