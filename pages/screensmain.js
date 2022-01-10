import Link from "next/link";
import Slider from "../components/slider"
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSL from "../components/HeaderSL";
import FooterSL from "../components/FooterSL";
import Layout from "../components/Layout";


const URL =  process.env.DB_URL  /* "http://localhost:1337"  */


/* export async function getServerSideProps(){
const URL = process.env.URL_TO_STRAPI_API
console.log(URL," VARIABLE ENVIROMENTAL desde seminars");

return{
    props:{URL}
}
}

 */

export async function getServerSideProps() {
    console.log(process.env.DB_URL)
     try {
    const resScreens = await fetch(URL+"/api/screens?populate=%2A");

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
    
return (
    <div>
    <Layout>
    <div className="container" >
    
    <h1 className="display-5">Screens Main View</h1>
    <div className="row g-2" >
    
    {screensData.map((screensData,id) => (
        <div  key={id} className="col-6 card " style={{width: "18rem", height:"13rem"}}>
        <h3 className="card-title" style={{textAlign: "center"}}>{screensData.attributes.screenName}</h3>
        <Link href={`/${id+1}`}>
        <div style={{textAlign: "center"}} >
                <h1 className="display-6 btn btn-primary card-title"  >Go to screen</h1>
                
        </div>
        
        </Link>       
        </div>
    ))}
    </div>
    </div>
    </Layout>
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