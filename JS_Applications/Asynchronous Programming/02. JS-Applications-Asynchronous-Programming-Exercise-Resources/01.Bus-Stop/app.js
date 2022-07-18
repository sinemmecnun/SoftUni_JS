async function getInfo() {
    const busID = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    try{
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busID}`);
        
        if(response.ok == false){
            throw new Error('error');
        }
        const data = await response.json();

        busesList.innerHTML = "";

        stopName.textContent = data.name;

        const buses = data.buses;

        Object.keys(buses).forEach(bus => {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            busesList.appendChild(li);
        })

    } catch(error){ 
        stopName.innerHTML = "Error";
        busesList.innerHTML = "";
    }

}