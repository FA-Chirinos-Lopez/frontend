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



export default function Home ({ seminars }) {

  const handle = useFullScreenHandle();


//SEMINARS DATA FETCH
  let seminarsData=seminars.data
  const estilo=styles.text


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
  
    <2021 >
    </2021>
    <2022>
 
   
</div>

   
  
 )
}



export async function getStaticProps(){
  //Get API information

  const res = await fetch ('http://localhost:1337/api/seminars');
  const seminars = await res.json();
  console.log(seminars.data,"desde index")

  return{
    props: { seminars },
  
  };

}
 



