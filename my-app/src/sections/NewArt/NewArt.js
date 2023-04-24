import React from 'react';
import lol from "../../assets/img/art/try.jpeg";
import lol2 from "../../assets/img/art/try2.jpeg";
import './NewArt.css'

export const NewArt = () => {
    const data = [
        {head:"best of 2019",img:lol,description:"If you need a new book to add to your reading list, look no further than this roundup of the best books that came out this year. We've been spoiled with amazing reads lately, so if you're in the market for a hot-off-the-presses page-turner in any genre you can imagine, we've revealed the best books 2019 has to offer.",link:"/"},
        {head:"Why We Should Read Every Day",img:lol2,description:"Home Brain Power & Skills Why You Should Read Every Day Why You Should Read Every Day Blaz Kos Brainpower & Skills LinkedIn Facebook Twitter I Never Liked Reading When I Was Young. I Always Liked Computers. But In My Early Twenties, I Decided To Get Fond Of Reading. My Strategy Was Simple. Read Every Day. I Followed The Strategy Through And Today I Love To Read.",link:"/"},
    ]
  return (
    <div className='newart'>
        <div className='container art-flex'>


            {data?data.map((el,i)=>{
                return <div className='d-flex  art-flex justify-content-center align-items-center '>
                <div className="col-6 img-art-side">
                    <div className={`overlay-img ${i === 1 ?'me-auto':'ms-auto'}`}>
                        <img src={el.img} alt="" width={'100%'} height={'auto'} className='img-art' />
                    </div>
                </div>
                <div className="col-6 content-art pt-2">
                <h3>{el.head}</h3>
                <p>{el.description}</p>
                <h4 href={el.link}>learn more</h4>
                </div>
            </div>
            }):"Looding"}




        </div>
    </div>
  )
}
