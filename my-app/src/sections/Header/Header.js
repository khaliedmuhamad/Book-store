import React from "react";
import  'bootstrap/js/dist/carousel.js'
import "./Header.css";
import young from "../../assets/img/header/young.svg";
import girle from "../../assets/img/header/girle.svg";
import child from "../../assets/img/header/child.svg";
import teen from "../../assets/img/header/teen.svg";
import glaxy from "../../assets/img/header/glaxy.svg";
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
export const Header = () => {


  return (
    <div className="Header">
      <div className="d-flex  justify-content-center align-items-center w-100 h-100">
        <div
          id="HeaderCarousel"
          className="carousel-fade carousel w-100 h-100"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-interval='2000'
          data-bs-transition='2000'

          
          
          
        >
          <div className="carousel-indicators justify-content-start">

          <button type="button" data-bs-target="#HeaderCarousel" id="points" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button"  data-bs-target="#HeaderCarousel" id="points" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#HeaderCarousel" id="points" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#HeaderCarousel" id="points" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#HeaderCarousel" id="points" data-bs-slide-to="4" aria-label="Slide 5"></button>

          </div>




            <div className="carousel-inner h-100 " >
              <div  className='carousel-item  h-100 active'>
                <div className="container d-flex justify-content-center align-items-center flex-row-reverse h-100">
                  <div className="img-header col-6">
                    <img
                      src={young}
                      alt=""
                      width="80%"
                      height="auto"
                    />
                  </div>
                  <div className="contect-header col-6">
                    <h2>It Starts Here</h2>
                    <h3>the independent bookshop with traditional values</h3>
                    <button className="btn btn-transparent text-capitalize text-center">
                      browse books
                    </button>
                  </div>
                </div>
              </div>
              <div  className="carousel-item  h-100" >
                <div className="container d-flex justify-content-center align-items-center flex-row-reverse h-100">
                  <div className="img-header col-6">
                    <img
                      src={girle}
                      alt=""
                      width="80%"
                      height="auto"
                    />
                  </div>
                  <div className="contect-header col-6">
                    <h2>It Starts Here</h2>
                    <h3>
                      After all, a town without a bookshop was a town without a
                      heart
                    </h3>
                    <button className="btn btn-transparent text-capitalize text-center">
                      browse magazine
                    </button>
                  </div>
                </div>
              </div>
              <div  className="carousel-item  h-100" >
                <div className="container d-flex justify-content-center align-items-center flex-row-reverse h-100">
                  <div className="img-header col-6">
                    <img
                      src={child}
                      alt=""
                      width="80%"
                      height="auto"
                    />
                  </div>
                  <div className="contect-header col-6">
                    <h2>It Starts Here</h2>
                    <h3>
                      A bookshop is a peaceful sanctuary of silent voices
                      waiting to heard
                    </h3>
                    <button className="btn btn-transparent text-capitalize text-center">
                      browse stoires
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item  h-100" >
                <div className="container d-flex justify-content-center align-items-center flex-row-reverse h-100">
                  <div className="img-header col-6">
                    <img
                      src={teen}
                      alt=""
                      width="80%"
                      height="auto"
                    />
                  </div>
                  <div className="contect-header col-6">
                    <h2>It Starts Here</h2>
                    <h3>
                      Archie says books are our best lovers and our most
                      provoking friends.
                    </h3>
                    <button className="btn btn-transparent text-capitalize text-center">
                      browse magazine
                    </button>
                  </div>
                </div>
              </div>
              <div  className="carousel-item  h-100">
                <div className="container d-flex justify-content-center align-items-center flex-row-reverse h-100">
                  <div className="img-header col-6">
                    <img
                      src={glaxy}
                      alt=""
                      width="80%"
                      height="auto"
                    />
                  </div>
                  <div className="contect-header col-6">
                    <h2>It Starts Here</h2>
                    <h3>You can own a billion books and still be ignorant</h3>
                    <button className="btn btn-transparent text-capitalize text-center">
                      browse TextBooks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
            <button className="carousel-control-prev" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="prev">
          <span>
          <AiFillCaretLeft />
          </span>

  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="next">

<span>
<AiFillCaretRight />  
        </span>
  </button>
        </div>
      </div>
    </div>
  );
};
