import React from "react";
import "./ProductSlider.css"
import Slider from "react-slick";
import { ProductCard } from "./ProductCard/ProductCard";

export const ProductSlider = () => {
  const data = [
    { name: "Harry Potter and the Philosopher's", othur: "Stone", price: '150', link: "", id: "", img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-1.jpg&w=1320&q=75" },
    { name: "Fantastic Beasts and Where to Find Them", othur: "unknown", price: "100", link: "", id: "", img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-11.jpg&w=1320&q=75" },
    { name: "Quidditch Through the Ages", othur: "J.K. Rowling", price: "60", link: "180", id: "", img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-12.jpg&w=1320&q=75" },
    { name: " Sin Eater", othur: "Megan Campisi", price: "99", link: "", id: "", img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg" },
    { name: " A Luminous Republic", othur: "Andrés Barba", price: "80", link: "108", id: "", img: "https://s26162.pcdn.co/wp-content/uploads/2019/12/81bqz44WeuL-731x1024.jpg" },
    { name: "Fantastic Beasts and Where to Find Them", othur: "unknown", price: "100", link: "", id: "", img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUS%2Ffb-secrets-dumbledore.jpg&w=1320&q=75" },
  ];

  const settings = {
    dots: false,
    duration:100,
    autoplay:true,
    infinite: true,
    speed: 500,
    arrow:true,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 3
  };



  return (<div className="container py-5">

            <Slider className="h-100"  {...settings}>

{data?data.map((book,i)=>{
  return  <ProductCard book={book} />

}):
""
}

            </Slider></div>

  );
};
