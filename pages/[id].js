import React , { Component } from "react";
import { Slide } from "react-slideshow-image";

const slideImages=[""]
slideImages.length=0

export default function ScreensDisplay({ screensData }) {
  //RESET ARRAY OF SLIDES
  slideImages.length=0
  //ARRAYS DEFINITION
  let seminarsData= screensData.attributes.stage_timetables.data;
  let halldescriptorsData= screensData.attributes.hall_descriptors.data;
  let advertisementsData= screensData.attributes.advertisements.data;
  console.log(advertisementsData)
  //ADD SEMINARS
  slideImages.push(
    seminarsData && seminarsData.map((seminarsData) => (
    <div className='seminarSlide'  key={seminarsData.id}>
         <h1 className='seminarTitle' >{seminarsData.id}</h1>
         <h2>{seminarsData.attributes.title}</h2>
         <h3>{seminarsData.attributes.subtitle}</h3>
         <p>{seminarsData.attributes.description}</p>
    </div>
   )))

   //ADD HALL DESCRIPTORS
   slideImages.push(
    halldescriptorsData && halldescriptorsData.map((halldescriptorsData) => (
    <div   key={halldescriptorsData.id}>
         <h1  >{halldescriptorsData.id}</h1>
         <h2>{halldescriptorsData.attributes.HallName}</h2>
         <h3>{halldescriptorsData.attributes.Subtitle}</h3>
         <p>{halldescriptorsData.attributes.Description}</p>
    </div>
    )))
    //ADD ADVERTISEMENTS

    
      advertisementsData && advertisementsData.map((advertisementsData) => (
        slideImages.push( <div   key={advertisementsData.id}>
             <h1  >{halldescriptorsData.id}</h1>
             <h2>{advertisementsData.attributes.Title}</h2>
             <h2>{advertisementsData.attributes.Location}</h2>
             <h2>{advertisementsData.attributes.CallToAction}</h2>
             <h3>{advertisementsData.attributes.Time}</h3>
            
        </div>
        )))
    return (
      <div >
      <Slider/>
        <h1>
          {screensData.id} - {screensData.attributes.screenName}<br/><br/><br/>
        </h1>
        {seminarsData && seminarsData.map((seminarsData) => (
          <div className='seminarSlide'  key={seminarsData.id}>
               <h1 className='seminarTitle' >{seminarsData.id}</h1>
               <h2>{seminarsData.attributes.title}</h2>
               <h3>{seminarsData.attributes.subtitle}</h3>
               <p>{seminarsData.attributes.description}</p>
          </div>
         ))}
         <h1>
          {screensData.id} - {screensData.attributes.screenName}<br/><br/><br/>
        </h1>
        {halldescriptorsData && halldescriptorsData.map((halldescriptorsData) => (
          <div   key={halldescriptorsData.id}>
               <h1  >{halldescriptorsData.id}</h1>
               <h2>{halldescriptorsData.attributes.HallName}</h2>
               <h3>{halldescriptorsData.attributes.Subtitle}</h3>
               <p>{halldescriptorsData.attributes.Description}</p>
          </div>
         ))}
         <h1>
          {screensData.id} - {screensData.attributes.screenName}<br/><br/><br/>
        </h1>
        {advertisementsData && advertisementsData.map((advertisementsData) => (
          <div   key={advertisementsData.id}>
               <h1  >{halldescriptorsData.id}</h1>
               <h2>{advertisementsData.attributes.Title}</h2>
               <h2>{advertisementsData.attributes.Location}</h2>
               <h2>{advertisementsData.attributes.CallToAction}</h2>
               <h3>{advertisementsData.attributes.Time}</h3>
              
          </div>
         ))}
      </div>
    );
  }



  
  export async function getStaticPaths() {
    try {
      const resScreens = await fetch("http://localhost:1337/api/screens");
      const data = await resScreens.json();
      const paths = data.data.map(({ id }) => ({ params: { id: `${id}` } }));
      return {
        paths,
        fallback: false,
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getStaticProps({ params }) {
    try {
      const resScreens = await fetch("http://localhost:1337/api/screens/"+params.id+"?populate=*");
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



  
class Slider extends Component {

  


  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }
  


  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }
  

  

 
 
  render() {
    const properties = {
      duration: 2000,
      autoplay: true,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };


   

    
    return (
      <div className={this.props.className}>
      
        <h3>Slide Effect{""}</h3>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide"><div>{each}</div>
                <img className="lazy" src={each} alt="sample" ></img>
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
  }
}





