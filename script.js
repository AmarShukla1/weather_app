const button=document.querySelector('button');
const container=document.querySelector('.container-hide');


button.addEventListener('click',function(){
    const city=document.querySelector('.city').value;
    query(city);
});

async function query(city){
 try{
 const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ca5b9f3fae3495a7d2acbe85d95196c9`);
 
 
 data=await response.json();
 
let a=[] 
a.push(data.name);
a.push(Math.round((data.main.temp-273.15)*100)/100);
a.push(Math.round((data.main.feels_like-273.15)*100)/100);
a.push(data.wind.speed);
a.push(data.main.humidity);

display(a);
 }catch(error){
     alert('No such city exists');
 }
}

function display(a){
    let index=0;

    const p1=document.querySelector('.citi');
    p1.innerText=a[index++];
    const p2=document.querySelector('.temp');
    p2.innerText=a[index++]+'°C';
    const p3=document.querySelector('.feels');
    p3.innerText='Feels like '+a[index++]+'°C';
    const p4=document.querySelector('.wind');
    p4.innerText='Wind speed '+a[index++]+'km/h';
    const p5=document.querySelector('.humidity');
    p5.innerText='Humidity '+a[index++]+'%';
    container.className='container';
}