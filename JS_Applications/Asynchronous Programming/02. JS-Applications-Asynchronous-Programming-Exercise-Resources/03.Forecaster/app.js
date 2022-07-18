function attachEvents() {
    //get elements
    const locationName = document.getElementById('location');
    const getWeatherButton = document.getElementById('submit');
    const divDisplay = document.getElementById('forecast');
    const current = document.getElementById("current");
    const upcoming = document.getElementById('upcoming');

    //codes for weather symbols
    const sunny = '&#x2600';
    const partlySunny = '&#x26C5';
    const overcast = '&#x2601';
    const rain = '&#x2614';
    const degrees = '&#176';

    //additional variables
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    let locationCode = "";
    const divElementUpcoming = document.createElement('div');
    const divElementCurrent = document.createElement('div');

    //add event listener to button
    getWeatherButton.addEventListener('click', getWeather);

    function getWeather(){
        divElementCurrent.innerHTML = "";
        divElementUpcoming.innerHTML = "";

        divElementUpcoming.setAttribute('class', 'forecast-info');
        divElementCurrent.setAttribute('class', 'forecasts');

        divDisplay.style.display = 'inline';

        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(data => {
                data.forEach(locationInfoObject => {
                    if(locationInfoObject.name == locationName.value){
                        return locationCode = locationInfoObject.code;
                    }
                });


                fetch(`${baseUrl}/today/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {
                        const spanGroup = document.createElement('span');
                        const conditionSpan = document.createElement('span');
                        const temperatureSpan = document.createElement('span');
                        const locationSpan = document.createElement('span');
                        const spanWithIcon = document.createElement('span');

                        spanWithIcon.setAttribute('class', 'symbol');
                        spanGroup.setAttribute('class', 'condition');
                        locationSpan.setAttribute('class', 'forecast-data');
                        temperatureSpan.setAttribute('class', 'forecast-data');
                        conditionSpan.setAttribute('class', 'forecast-data');


                        locationSpan.textContent = data.name;
                        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                        conditionSpan.textContent = data.forecast.condition;
                        const condition = data.forecast.condition;
                        switch(condition){
                            case "Sunny":
                                spanWithIcon.innerHTML = sunny;
                                break;
                            case "Partly sunny":
                                spanWithIcon.innerHTML = partlySunny;
                                break;
                            case 'Overcast':
                                spanWithIcon.innerHTML = overcast;
                                break;
                            case 'Rain':
                                spanWithIcon.innerHTML = rain;
                                break;
                        }

                        spanGroup.appendChild(locationSpan);
                        spanGroup.appendChild(temperatureSpan);
                        spanGroup.appendChild(conditionSpan);
                        divElementCurrent.appendChild(spanWithIcon);
                        divElementCurrent.appendChild(spanGroup);

                        current.appendChild(divElementCurrent);
                    })
                    .catch(error => console.log(error));

                fetch(`${baseUrl}/upcoming/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {

                        let nextDays = data.forecast;

                        nextDays.forEach(x => {
                            const spanGroup = document.createElement('span');
                            const conditionSpan = document.createElement('span');
                            const temperatureSpan = document.createElement('span');
                            const spanWithIcon = document.createElement('span');

                            spanWithIcon.setAttribute('class', 'symbol');
                            spanGroup.setAttribute('class', 'upcoming');
                            temperatureSpan.setAttribute('class', 'forecast-data');
                            conditionSpan.setAttribute('class', 'forecast-data');


                            temperatureSpan.innerHTML = `${x.low}${degrees}/${x.high}${degrees}`;
                            conditionSpan.textContent = x.condition;
                            const condition = x.condition;
                            switch(condition){
                                case "Sunny":
                                    spanWithIcon.innerHTML = sunny;
                                    break;
                                case "Partly sunny":
                                    spanWithIcon.innerHTML = partlySunny;
                                    break;
                                case 'Overcast':
                                    spanWithIcon.innerHTML = overcast;
                                    break;
                                case 'Rain':
                                    spanWithIcon.innerHTML = rain;
                                    break;
                            }
    
                            spanGroup.appendChild(temperatureSpan);
                            spanGroup.appendChild(conditionSpan);
                            divElementUpcoming.appendChild(spanWithIcon);
                            divElementUpcoming.appendChild(spanGroup);
    
                            upcoming.appendChild(divElementUpcoming);
                        })
                    })
             })
            .catch(error => console.log(error));
    }

}
attachEvents();