import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



var count=0


export default function Home({ seminars }) {

  let seminarsData=seminars.data
  console.log(seminarsData,"seminarsData")

 return (
   <div>
    {seminarsData && seminarsData.map((seminarsData) => (
   <div key={seminarsData.id}>
        <h1 className='seminarTitle' >{seminarsData.id}</h1>
        <h2>{seminarsData.attributes.title}</h2>
        <h3>{seminarsData.attributes.subtitle}</h3>
        <p>{seminarsData.attributes.description}</p>
   </div>
   ))}
   </div>
  
 )
}


export async function getStaticProps(){
  //Get API information

  const res = await fetch ('http://localhost:1337/api/seminars');
  const seminars = await res.json();
  console.log(seminars)

  return{
    props: { seminars },
  
  };

}
 



