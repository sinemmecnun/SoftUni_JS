async function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const listCommits = document.getElementById('commits');

    try{
        const response = await fetch(`https://api.github.com/repos/${username}/${repository}/commits`);
        const data = await response.json();

        for(let com of data){
            listCommits.innerHTML += `<li>${com.commit.author.name}: ${com.commit.message}</li>`
        }
    } catch(error){
        listCommits.innerHTML = `Error: ${error.status} (Not Found)`
    }
}