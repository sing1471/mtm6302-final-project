const greetingdiv=document.getElementById("greeting")
const title=document.getElementById("image-title")
const ctime=document.getElementById("current-time")
const button=document.getElementById("more")
const $buttons=document.getElementsByName("button")
const more=document.getElementById("more2")
const customize=document.getElementById("customize")
const full_Date=document.getElementById("full-date")
const dark_mode=document.getElementById("dark-mode")
const exp=document.getElementById("explanation")


const bdy=document.body;




fetch('https://api.nasa.gov/planetary/apod?api_key=pnUYF2NG6A4xs2U4XWdKKM5YN6cJNGW0kbLqWRIm')

    .then(function(response){
            return response.json()
    })
    .then(function(imageData){
        console.log(imageData)

       
        if (imageData.media_type === 'video'){
            document.querySelector('img').setAttribute = ('src' ,imageData.thumbnail_url)
        } 
        else {

        document.querySelector('img').setAttribute('src', imageData.url)
     
        title.textContent=imageData.title;
        exp.textContent=imageData.explanation;
        return imageData
        }
    })
 
   
// clock
const timeinterval = setInterval(clock, 1000);
  function clock() {
    const today = new Date();
    const day = today.getDay();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    let hours = today.getHours();



    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    
    

    const greeting = (hours < 12) ? "Good morning" : (hours < 17) ? "Good afternoon" : "Good evening";


    let prepand = (hours >= 12) ? " PM " : " AM ";
    hours = (hours >= 12) ? hours - 12 : hours;

    if (hours === 0 && prepand === ' PM ') {
      if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = ' Noon';
      }
      else {
        hours = 12;
        prepand = ' PM';
      }
    }
    if (hours === 0 && prepand === ' AM ') {
      if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = ' Midnight';
      }
      else {
        hours = 12;
        prepand = ' AM';
      }}

      const now = new Date();
      let dd = now.getDate()
      let yyyy = now.getFullYear();
      const month = now.toLocaleString('default', { month: 'long' })

    

    greetingdiv.innerHTML=`<h2>${greeting}</h2>`;

    ctime.innerHTML=`<h3>Time ${hours}:${minutes}:${seconds}:${prepand}</h3>`;
    full_Date.innerHTML=`<h3>Date ${dd}/${month}/${yyyy}</h3>`;
  }

  button.addEventListener('click',function(){

      full_Date.classList.toggle('hide'); 
  })
clock();


more.addEventListener('click',function(){
    customize.classList.toggle('hide'); 
})

dark_mode.addEventListener('click',function(){
    bdy.classList.toggle('dark-mode'); 

    (localStorage.getItem('modestrg')=="true") ? localStorage.setItem('modestrg', "false"):localStorage.setItem('modestrg', "true");
    ;
    console.log(localStorage.getItem('modestrg'))

 
    
})
function initialize(){
  let mod_s=localStorage.getItem('modestrg');
  if(mod_s=="true"){
    bdy.classList.add('dark-mode');
  
    console.log("sucess")}
    else{
      return;
    }
 
}
console.log(localStorage.getItem('modestrg'))
initialize();