import Link from "next/link";
import Slider from "../components/slider"




/* export async function getServerSideProps(){
const URL = process.env.URL_TO_STRAPI_API
console.log(URL," VARIABLE ENVIROMENTAL desde seminars");

return{
    props:{URL}
}
}

 */

export async function getServerSideProps() {
    try {
    const resScreens = await fetch("http://localhost:1337/api/screens?populate=%2A");

    const dataScreens = await resScreens.json();
    const screensData = dataScreens.data
      return {
        props: {
          screensData,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }



export default function screensmain({screensData}) {
    console.log(screensData)
return (
    <div>
    <h1>Screens Main View</h1>
    {screensData.map((screensData,id) => (
        <div className='seminarSlide'  key={id}>
        <Link href={`/${id+1}`}>
        <div>
                <h1 >{screensData.attributes.screenName}        ----------                       ID:{id}</h1>
                
        </div>
        
        </Link>       
        </div>
    ))}

    </div>
)
}




/*  <h2>{seminarsData.attributes.title}</h2>
                <h3>{seminarsData.attributes.subtitle}</h3>
                <p>{seminarsData.attributes.description}</p> */


/*     {seminarsData.map((seminarsData,id) => (
        <div className='seminarSlide'  key={id}>
        <Link href={`/${id+1}`}>
        <div>
                <h1 className='seminarTitle' >{seminarsData.attributes.title}        ----------                       {id}</h1>
                <Slider></Slider>
        </div>
        </Link>
               
        </div>
    ))} */