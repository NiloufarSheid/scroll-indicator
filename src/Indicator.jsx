import React, { useEffect, useState } from 'react';

const Indicator = () => {
    const[scrollTop,setScrollTop]=useState(0);

    const onScroll=()=>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) *  100;
    setScrollTop(scrolled);
    } 

     useEffect(()=>{
        window.addEventListener("scroll", onScroll)

     },[])

  return (
    <div className="wrappper">
        <div className="scrollIndicator">
            <div className="scrollMain" style={{ width: `${scrollTop}%`}}></div>
        </div>
    </div>
  );
}

export default Indicator;