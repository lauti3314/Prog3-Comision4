/*
1. **Obtener datos de un usuario aleatorio**
   - **API Endpoint**: https://randomuser.me/api/
   - **Documentación**: https://randomuser.me/
   - **Descripción**: La API de Random User Generator permite obtener datos ficticios de un usuario, 
   incluyendo nombre, ubicación, imagen, y más. En este ejercicio, se utiliza el endpoint principal 
   para obtener un usuario aleatorio y se muestra su información en el contenedor HTML con el id="userInfo".
   
*/

async function getDataUser() {

    try {
        const response = await fetch("https://randomuser.me/api/");

        const data = await response.json();

        const person = data.results[0];
        
        const nombre = `${person.name.first} ${person.name.last}`;

        const ubicacion = `${person.location.country} ${person.location.state}`

        const imagen = `${person.picture.medium}`;


        console.log(nombre);
        console.log(ubicacion);
        console.log(imagen);

        const divInfo = document.getElementById("userInfo")

        divInfo.innerHTML=`
        <p>Nombre: ${nombre} </p>
        <p>Ubacicion: ${ubicacion} </p>
        <img src= ${imagen} width=150>
        `

    } catch (error) {
        console.log(error);
    }


}

getDataUser();

/*
2. **Mostrar una lista de posts**
   - **API Endpoint**: https://jsonplaceholder.typicode.com/posts
   - **Documentación**: https://jsonplaceholder.typicode.com/
   - **Descripción**: JSONPlaceholder es una API de prueba que proporciona datos simulados como posts,
    comentarios, tareas, etc. En este ejercicio, se utiliza el endpoint "/posts" para obtener una lista de publicaciones,
     mostrando los títulos de los primeros 10 posts en una lista desordenada dentro del contenedor HTML con el id="postsList".
*/

async function fetchPosts() {
    try {
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();

        const postsList = document.getElementById("postList");

        const post = posts.slice(0, 10).forEach(post=> {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            
            postsList.appendChild(listItem);
        });
    } catch (error) {
        console.log(error)
    }
}

fetchPosts();

/*
3. **Mostrar la temperatura actual**
   - **API Endpoint**: https://api.openweathermap.org/data/2.5/weather
   - **Documentación**: https://openweathermap.org/current
   - **Descripción**: OpenWeatherMap ofrece datos meteorológicos actuales, previsiones,
    e históricos mediante su API. En este ejercicio, se consulta el endpoint "/weather"
     para obtener la temperatura y la descripción del clima actual de la ciudad de Mendoza, 
     Argentina. Los resultados se muestran en el contenedor HTML con el id="weatherInfo"
   -**recursos** 
            --apikey : c61e0400e304a834d4159274cfc06146
            
    -**ayudas**
        -parametros a utilizar =  units, lang, 
        -ver como pasar el parametro de pais y region link:https://openweathermap.org/current#name

*/
const apiKey = 'c61e0400e304a834d4159274cfc06146';
const city = 'Mendoza';
const country = 'AR'

const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=es`;

async function fetchWeather() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const temperatura = data.main.temp;
        const descripcion = data.weather[0].description;

        const weatherInfo = document.getElementById('weatherInfo')

        weatherInfo.innerHTML = `
        <p> Temperatura Actual: ${temperatura} °C</p>
        <p> Descripcion: ${descripcion} </p>
        `
    } catch (error) {
        console.log(error)
    }
}fetchWeather()

/*
4. **Mostrar una imagen de un perro aleatorio**
   - **API Endpoint**: https://dog.ceo/api/breeds/image/random
   - **Documentación**: https://dog.ceo/dog-api/
   - **Descripción**: La Dog API proporciona imágenes aleatorias de diferentes razas de perros. 
   En este ejercicio, se utiliza el endpoint "/breeds/image/random" para obtener una imagen aleatoria 
   de un perro y se muestra en el contenedor HTML con el id="dogImage".
*/

async function imageDog() {
    try {
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
    
        const data = await response.json();

        const img = `${data.message}`
        console.log(img)

        const divImg = document.getElementById('dogImage');

        divImg.innerHTML = `
        <img src= ${img} width= 150px> 
        `
    } catch (error) {
        console.log(error)
    }
    
}
imageDog();

/*
5. **Mostrar una lista de tareas**
   - **API Endpoint**: https://jsonplaceholder.typicode.com/todos
   - **Documentación**: https://jsonplaceholder.typicode.com/
   - **Descripción**: Similar al ejercicio 2, se utiliza JSONPlaceholder para obtener datos simulados. 
   En este caso, se usa el endpoint "/todos" para obtener una lista de tareas. Se muestran las primeras 
   5 tareas en una lista desordenada, indicando si están completadas o no, en el contenedor HTML con el id="todoList".
*/

async function workList() {
    try {
         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
         const data = await response.json();

         const lista = document.getElementById('todoList')

           data.slice(0,5).forEach(list => {
            const itemList = document.createElement('li')
            itemList.textContent = `${list.title} - ${list.completed}`;

            lista.appendChild(itemList);
            
         });
    } catch (error) {
        console.log(error)
    }
}
workList()