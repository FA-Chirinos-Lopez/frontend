import React , { Component } from "react";
import {Home} from "../pages/index";
import Url from "./url"
import Slider, {NextSlide} from "./slider"


//VARIABLES
const initialUrl = Url+'api/seminars';


//GET ENVIROMENTAL VARIABLES

export async function getServerSideProps(){
    const URL = process.env.URL_TO_STRAPI_API
    console.log(URL," VARIABLE ENVIROMENTAL desde seminars");
   

    return{
        props:{URL}
    }
    }



//FETCH API AND RETURN DATA



export async function getStaticProps(URL){
    //Get API information
    console.log()
    const res = await fetch (URL,'api/seminars');
    const seminars = await res.json();
    console.log(seminars.data,"desde index")
    
    return{
        props: { seminars },
    
    };
    
    }

//RENDER FUNCTION

export default function Seminars( { URL } ) {

   
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