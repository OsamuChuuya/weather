const input = document.getElementById('input')
const btn = document.getElementById('btn')
const div = document.getElementById('div')
const  main =document.getElementById('main')
const time = document.getElementById('time')

const key =`4cf311f915d1e88f37b88f445af73cc5`
// const api =`https://api.openweathermap.org/data/2.5/weather?q=london&appid=4cf311f915d1e88f37b88f445af73cc5`


btn.addEventListener('click', ()=> {
    const cityName = input.value.toLowerCase().trim()

    async function weather() {
        try{
            const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
            const res= await url.json()
            const descrip= res.weather[0].main
            const temp = Math.round(res.main.temp)
            const tempMax = Math.round(res.main.temp_max)
            const tempMin = Math.round(res.main.temp_min)
            let day = new Date();
            let month = day.getMonth()
            let today = day.getDate();
            const months = [
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
            ];
            
            let monthName = months[month];

            let weatherImage = '';
            let backgroundGradient = ''; 

            switch (descrip.toLowerCase()) {
                case 'clear':
                    weatherImage = `<img src="https://seeklogo.com/images/S/sunny-weather-symbol-logo-4E2A5E54AA-seeklogo.com.png" alt="Clear sky" style="width: 200px;">`;
                    backgroundGradient = 'linear-gradient(135deg, #6dd5ed,rgb(16, 105, 128))'; // Ясная погода, голубой градиент
                    break;
                case 'clouds':
                    weatherImage = `<img src="https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_1280.png" alt="Cloudy" style="width: 200px;">`;
                    backgroundGradient = 'linear-gradient(135deg, #bdc3c7, #2c3e50)'; // Облачная погода, серый градиент
                    break;
                case 'rain':
                    weatherImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyQ1UfOssK2IB5zGsVVod404RYWDqFlCgOaIkkZDZmty3-6ra8rvua6t72T5f_eNhA3c&usqp=CAU" alt="Rain" style="width: 200px;">`;
                    backgroundGradient = 'linear-gradient(135deg, #00c6ff, #0072ff)'; // Дождливая погода, темно-голубой градиент
                    break;
                case 'wind':
                    weatherImage = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWGXZDLTjOeF3wIK9GJFZyBHoTJnk9FyKnQ&s" alt="Wind" style="width: 200px;">`;
                    backgroundGradient = 'linear-gradient(135deg, #4e4e4e, #888888)'; // Ветряная погода, серый градиент
                    break;
                default:
                    weatherImage = `<img src="images/default-icon.png" alt="Unknown weather">`;
                    backgroundGradient = 'linear-gradient(135deg, #fbc2eb, #a6c1ee)'; // Погода не определена, розовый градиент
                    break;
            }

            main.style.background = backgroundGradient;

            
            div.innerHTML=`
            <h2> ${weatherImage} ${descrip}</h2>
            <h1>${temp}°</h1>
            <h1>${cityName}</h1>
            <h2>Max: ${tempMax}°C &nbsp;&nbsp; Min:${tempMin}°C</h2>
            <h2>Today:  ${monthName}  ${today}</h2>
            Время ${day.getHours()} ${day.getMinutes()};

            `
        }catch(error){
            console.log(`error`, error)
        }
    }
    weather()

})




