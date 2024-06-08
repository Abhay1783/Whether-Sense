
const city_name=document.getElementById('city_name');

const cityName=document.getElementById('cityName')
const submitBtn=document.getElementById('submitBtn');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const dataHide=document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
city_name.innerText=`Please enter a valid City Name`;
 dataHide.classList.add('data_hide');
    }
    else{

        try{
            url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=50745ee10d3c9169c1eaf8b90f7fd9f8`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
          
          city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
          temp_real_val.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;

//condition to check sunny or cloudy
if(tempMood=="Clear"){
    temp.status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
}else if(tempMood=="Clouds"){
  temp.status.innerHTML="<i class='fas fa-cloud'  style='color:#f1f2f6;'></i>";
}else if(tempMood=="Rain"){
    temp.status.innerHTML= "<i class='fa fa-cloud-rain' style='color:#a4b0be;'></i>";}
    else{
        temp.status.innerHTML= "<i class='fa fa-sun' style='color:#eccc68;'></i>";

    }
    dataHide.classList.remove('data_hide');

}

       catch(error){
            city_name.innerText=`Please enter a City Name properly`;
        }

        
    }
}

submitBtn.addEventListener('click',getInfo);