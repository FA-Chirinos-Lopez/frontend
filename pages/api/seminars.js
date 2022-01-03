import React , { Component } from "react";
import {Home} from "../index";
import Url from "../api/url"
import Slider, {NextSlide} from "../slider"

const initialUrl = Url+'api/seminars';

export default function Seminars() {
//SEMINARS DATA FETCH

const[seminars,setSeminars] = React.useState([])


React.useEffect(() => {
    console.log("useEffect")
    fetchSeminars(initialUrl)
},[])

const fetchSeminars = (url) => {
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => setSeminars(data.data))
    .catch(error => console.log(error))
}



let seminarsData = seminars
   console.log(seminarsData)


return(


    <div>
    {seminarsData && seminarsData.map((seminarsData) => (
        <div className='seminarSlide'  key={seminarsData.id}>
             <h1 className='seminarTitle' >{seminarsData.id}</h1>
             <h2>{seminarsData.attributes.title}</h2>
             <h3>{seminarsData.attributes.subtitle}</h3>
             <p>{seminarsData.attributes.description}</p>
        </div>
       ))}
       <button onClick={NextSlide} type="button">
       Go Next by export function
     </button>
    </div>
)


    }




/* export default Seminars; */






/* const fetchSeminars = async () => {
    const res = await fetch (url);
    const seminars = await res.json();
    console.log(seminars.data)
    setSeminars(seminars.data)
}
 */


/*  */