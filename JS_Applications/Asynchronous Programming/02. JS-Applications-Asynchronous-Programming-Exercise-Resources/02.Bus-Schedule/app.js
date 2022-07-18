function solve() {
    const info = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById("arrive");

    let busStop = {
        next:  "depot"
    }

    function depart() {
        departButton.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                busStop = Object.assign(data);
                info.textContent = `Next stop ${busStop.name}`;
            })
            .catch(error => console.log(error));

        arriveButton.disabled = false;
    }

    function arrive() {
        arriveButton.disabled = true;
        info.textContent = `Arriving at ${busStop.name}`;

        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();