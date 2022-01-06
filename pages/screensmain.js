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
      const res = await fetch("http://localhost:1337/api/seminars");
      const data = await res.json();
      const seminarsData = data.data
      return {
        props: {
          seminarsData,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }



export default function screensmain({seminarsData}) {
return (
    <div>
    <h1>Screens Main View</h1>
    {seminarsData.map((seminarsData,id) => (
        <div className='seminarSlide'  key={id}>
        <Link href={`/${id+1}`}>
                <h1 className='seminarTitle' >{seminarsData.attributes.title}        ----------                       {id}</h1>
        </Link>
               <Slider></Slider>
        </div>
    ))}
    </div>
)
}




/*  <h2>{seminarsData.attributes.title}</h2>
                <h3>{seminarsData.attributes.subtitle}</h3>
                <p>{seminarsData.attributes.description}</p> */