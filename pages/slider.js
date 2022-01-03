import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import Home from "./index.js"
import "react-slideshow-image/dist/styles.css";
import Seminars, {initialUrl} from "./api/seminars"
import Url from "./api/url"

let seminarsG

export const slideImages = [];





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
    const sliderAddPush = (valueToAdd) =>{
        slideImages.push(valueToAdd)
    }


    return (
      <div className="App">
      
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




