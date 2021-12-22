import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({seminar}) {
 return (
   <div>
   {seminars && 
    seminar.map((seminar) => (
        <div key={seminar.id}>sdsds
        <h2>{seminar.title}dfd</h2>
        </div>

      ))}
   </div>
  
 );
}

export async function getStaticProps(){
//Get API information

const res = await fetch ('http://localhost:1337/api/seminars');
const seminars = await res.json();
console.log(seminars)

return{
  props:{seminars},
}
}