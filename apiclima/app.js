window.addEventListener('load', ()=>{
    let long;
    let lati;

    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let temperaturaValor = document.getElementById('temperatura-valor');

    let ubicacion = document.getElementById('ubicacion');
    let vientoVelocidad = document.getElementById('viento-velocidad');

    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position =>{
            //console.log(position.coords.latitude);


            long = position.coords.longitude;
            lati = position.coords.latitude;
         

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=4dacf898fcaef2545a6e16fcbc458e87&units=metric&lang=es`;


            console.log(url);

            fetch(url)
                .then(response =>{ return response.json()})
                .then(data =>{ 
                   temperaturaValor.textContent = Math.round(data.main.temp);
                   temperaturaDescripcion.textContent = data.weather[0].description;

                   ubicacion.textContent = data.name;
                   vientoVelocidad.textContent = `${data.wind.speed} m/s`

                })

                .catch(error=>{

                    console.log(error);
                })
                    
                


        })
    }
})