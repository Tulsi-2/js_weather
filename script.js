let input = document.querySelector('input')

let search_btn = document.querySelector('button')

const currDate = document.getElementById('date')

const getCurrentDay =()=>{
    let currentTime = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return weekday[currentTime.getDay()]
}
getCurrentDay()

const getCurrentTime =()=>{
    let months = [
        "Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"
    ]
    let now = new Date();
    let month = months[now.getMonth()]
    let date = now.getDate()
    let year = now.getFullYear()

    let hours = now.getHours()
    let mins = now.getMinutes()
    let periods = "AM"

    if(hours>11){
        periods = "PM"
    }
    if(mins<10){
        mins = "0" + mins
    }

    return `${date} / ${month} / ${year} | ${hours}:${mins}${periods}`

    // console.log(month + "/" + date + "/" + year)
    // console.log(hours +":"+ mins)
}
currDate.innerHTML  = getCurrentDay()  + "|" +  getCurrentTime()



function getLocation(location){
    const api_key = "80bbc268bf8b3458e43aa0ebdbd50cb4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

    let fetchData = fetch(`${url}`)
    fetchData.then((response)=>{
        return response.json
    })
    .then((data)=>{
        console.log(data)
    })
}
search_btn.addEventListener('click',()=>{

    let location = input.value

    if(location == ''){
        alert('Enter a location')
    }
    getLocation(location)

})


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=80bbc268bf8b3458e43aa0ebdbd50cb4