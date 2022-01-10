import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { Component, useRef,useCallback } from 'react';
import ReactDOM from 'react-dom'
import { Slide } from 'react-slideshow-image'
import useEmblaCarousel from 'embla-carousel-react'
import Slider from "../components/slider";
import Seminars from "../components/seminars"
import { FullScreen, useFullScreenHandle } from "react-full-screen";



export default function Home ({ seminars,URL }) {

  const handle = useFullScreenHandle();
   

//SEMINARS DATA FETCH

 return (
 <div>
 
 <h1 className={styles.text} >Hello Style!</h1>

 <div>
 <button onClick={handle.enter}>
   Enter fullscreen
 </button>

 <FullScreen handle={handle}>
   Any fullscreen content here
   <Slider className={styles.myModal} >
  
    </Slider>
 </FullScreen>
</div>
</div>

   
  
 )
}



/* 
export async function getServerSideProps(){
const URL = process.env.URL_TO_STRAPI_API
console.log(URL," VARIABLE ENVIROMENTAL");

return{
    props:{URL}
}
}
 */





/* export async function getStaticProps(){
  //Get API information

  const res = await fetch ('http://localhost:1337/api/seminars');
  const seminars = await res.json();
  console.log(seminars.data,"desde index")

  return{
    props: { seminars },
  
  };

}
 
 */


