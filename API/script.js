const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-tem");

async function getData(cityName){
   const promise = await  fetch(
        `http://api.weatherapi.com/v1/current.json?key=cf86d7af219d45bc82d71907250401&q=${cityName}&aqi=yes`
    );
    return  await promise.json()
}




button.addEventListener('click', async function(){
    const value = input.value;
    const result =  await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
   
    console.log(result);
})

