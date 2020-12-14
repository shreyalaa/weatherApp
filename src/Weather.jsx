import React ,{useState ,useEffect} from "react";
import "./weather.css";
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import Button from '@material-ui/core/Button';


const Weather = () =>
{   
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Almora");

    useEffect(()=>{
        const fetchApi = async () =>{
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0bba5690bcec675e822d025b13b3e9a9`
           const response = await fetch(url)
           const resJson = await response.json()
           setCity(resJson.main)
           console.log(city)
        }
        fetchApi()
    } ,[ search])
    return(
        <div>
        <div className = "weather">
      
        <h1 ><Button style= {{color:"blue" , backgroundColor:"lightblue", boxShadow:"4px 4px 4px blue",height:"2cm" ,width:"4cm"}}><CloudCircleIcon style = {{fontSize: "80px" }}/></Button> Weather app</h1>
      
        <input type = "search"  onChange = {(event)=>{ setSearch(event.target.value) }} className = "input" placeholder = "enter the city"/>
        
        {!city ? (<p>no data</p>):
            (
            <div>
            <h2  className= "hdn">{search} </h2>
      
            <div><span className = "span">{city.temp} <small>degree Celcius</small></span></div>
            <h3 style= {{color:"wheat"}} > MAX: {city.temp_max} ||  MIN: {city.temp_min} </h3>
            </div>
            
            )
        }
        </div>
        </div>
    )
   
}
export default Weather;
