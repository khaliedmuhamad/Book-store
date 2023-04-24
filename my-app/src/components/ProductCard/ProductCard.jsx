import React, { useState } from 'react'
import "./ProductCard.css"
import {
  BsCartCheckFill,
  BsFillCartPlusFill,
  BsFillCartXFill,
  BsHeart,
  BsHeartFill,
  BsHeartbreakFill,
} from "react-icons/bs";
export const ProductCard = ({book}) => {

        const cartStyles = {
            default: 'cartDefault',
            added:'cartAdded',
            hover:'hover-button'
          }
          const loveStyles = {
            default: 'loveDefault',
            added:'loveAdded',
            hover:'hover-button'
            
          }
    
      const [buyButtonContent, setBuyButtonContent] = useState(<BsFillCartPlusFill />);
      const [buyButtonStyle, setBuyButtonStyle] = useState(cartStyles.default);
      const [addedCart, setAddedCart] = useState(false);
    
      const [loveButtonContent, setLoveButtonContent] = useState(<BsHeart />);
      const [loveButtonStyle, setLoveButtonStyle] = useState(loveStyles.default);
      const [addedLove, setAddedLove] = useState(false);
   
    
    
    
    
    const handelClick = (event,changeIcon,trueVal,falseVal,triger,trigerVal,chngeStyle,trueStyle,falseStyle) =>{
      if(addedCart === true){
        changeIcon(trueVal)
        ;event.currentTarget.dataset.styles = trueStyle
      }else if(addedCart === false){
        changeIcon(falseVal);
        event.currentTarget.dataset.styles = falseStyle
      }
      triger(!trigerVal);
    }
    
    
    const handelMousOver = (event,changeIcon,trueVal,trigerVal,chngeStyle,hoverStyle) =>{
        if(trigerVal){changeIcon(trueVal);
          event.currentTarget.dataset.styles = hoverStyle
        }
    }
    const handelMousOut = (event,changeIcon,trueVal,falseVal,trigerVal,chngeStyle,trueStyle,falseStyle) =>{
      if(trigerVal)
      {changeIcon(trueVal)
        event.currentTarget.dataset.styles = trueStyle
      }
      else
      {changeIcon(falseVal)
        event.currentTarget.dataset.styles = falseStyle
      }
    }




  return (
<div className="prodcut">
    <div className="pe-3">
  <div className="product-img-overlay">
    <img
      src={book.img}
      alt={book.name}
      className="product-img"
      width={"100%"}
      height={"auto"}
    />
  </div>
  <div className="product-card">
    <h4>{book.name}</h4>
    <h5>{book.othur} </h5>
    <span className="price">${book.price}</span>
    <div className="button-group btn-group w-100 d-flex justify-content-between align-items-center">
      <button
        data-styles="cartDefault"

        className="buy btn col-12 col-md-auto  ps-0 pe-1"
        data-index={'i'}
        onClick={(event) => {
         handelClick(event, setBuyButtonContent,<BsCartCheckFill />,<BsFillCartPlusFill />,setAddedCart,addedCart,setBuyButtonStyle,cartStyles.default,cartStyles.added,)
        }}
        onMouseOver={(event) => {
          handelMousOver(event,setBuyButtonContent,<BsFillCartXFill />,addedCart,setBuyButtonStyle,cartStyles.hover)
        }}
        onMouseLeave={(event) => {
          handelMousOut(event,setBuyButtonContent,<BsCartCheckFill />,<BsFillCartPlusFill />,addedCart,setBuyButtonStyle,cartStyles.added,cartStyles.default)
        }}
      >
        <div className=" py-2 pe-1 rounded-2  w-100 d-flex justify-content-between align-items-center " >
        {addedCart?buyButtonContent:<BsFillCartPlusFill />}
        <p className="">Add Cart</p>
        </div>
      </button>
      <button className="favourate btn col-12  col-md-auto d-flex justify-content-around ps-1 pe-0"
        data-styles="loveDefault"
        onClick={(event) => {
          handelClick(event,setLoveButtonContent,<BsHeartFill />,<BsHeart />,setAddedLove,addedLove,setLoveButtonStyle,loveStyles.added,loveStyles.default)
          }}
          onMouseOver={(event) => {
            handelMousOver(event,setLoveButtonContent,<BsHeartbreakFill />,addedLove,setLoveButtonStyle,loveStyles.hover)
          }}
          onMouseLeave={(event) => {
            handelMousOut(event,setLoveButtonContent,<BsHeartFill />,<BsHeart />,addedLove,setLoveButtonStyle,loveStyles.added,loveStyles.default)
          }}
      >
         <div className="py-2 pe-1 rounded-2 w-100 d-flex justify-content-between align-items-center  " >
        {addedLove?loveButtonContent:<BsHeart />}
        <p className="">Love</p>
        </div>
      </button>
    </div>
  </div>
  </div>
</div>
  )
}
