import React from 'react'
import "./Features.css"
import {MdDeliveryDining} from 'react-icons/md'
import {TfiGift} from 'react-icons/tfi'
import {FaHeadset ,FaCcVisa} from 'react-icons/fa'
const Features = () => {
    const features = [
        {icon:<MdDeliveryDining />,color:"#f4f7ff",head:"Free Shippng",subHead:"delivery in 3 days",iColor:"#0047b6"},
        {icon:<TfiGift />,color:"#faf4ff",head:"Gifts And Sales",subHead:"delivery in 3 days",iColor:"#ac3ca8"},
        {icon:<FaHeadset />,color:"#fff2f2",head:"Online Support",subHead:"online support 24/7",iColor:"#ac3ca8"},
        {icon:<FaCcVisa />,color:"#e4f5ef",head:"Secure Payment",subHead:"fast and secure payments",iColor:"#259966"},
    ]
  return (
    <div className='features py-5  text-center'>
        <div className='container d-flex'>

{features?features.map((el,i)=>{
    return <div className='col-6 col-md-3 px-4'>
                <div className='card py-4' style={{background:`${el.color}`}}>
                        <div className='icon-bg' style={{background:`${el.color}`,width:"50px",height:"50px",borderRadius:"50%",margin:"auto"}}>
                            <span className='' style={{color:`${el.iColor}`,fontSize:"30px",lineHeight:"62.5px"}}>
                            {el.icon}
                            </span>
                        </div>
                        <h4 className='mt-5'>
                            {el.head}
                        </h4>
                        <p>
                            {el.subHead}
                        </p>
                </div>
    </div>
}):"looding ..."}

        </div>
    </div>
  )
}

export default Features