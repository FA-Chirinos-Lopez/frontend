import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component, useRef } from 'react';
import ReactDOM from 'react-dom'
import { Slide } from 'react-slideshow-image'
import useEmblaCarousel from 'embla-carousel-react'
import Slider from "./slider";
import Seminars from "./api/seminars"




export default function Home ({ seminars }) {
//SEMINARS DATA FETCH
  let seminarsData=seminars.data
console.log(Seminars)


 return (
 <div>
 <Slider slideTimeProp="5000" >
  
   </Slider>



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
 



