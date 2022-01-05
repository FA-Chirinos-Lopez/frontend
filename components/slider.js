import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import Home from "../pages/index"
import "react-slideshow-image/dist/styles.css";
import styles from '../styles/Home.module.scss'
import Url from "../components/url"
import SliderContent, { AddSlide } from "./SliderContent.js";
 
 






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
      duration: this.props.slideTimeProp,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };


    const slideImages = SliderContent

    
    return (
      <div className={this.props.className}>
      
        <h3>Slide Effect{Url}</h3>
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

export default Slider;




