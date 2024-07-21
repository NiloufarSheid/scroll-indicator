import React, { useState } from 'react';

const Indicator = () => {
    const[scrollTop,setScrollTop]=useState(0);

    const winScroll=document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scrolled=(winScroll/height)*100;
    setScrollTop(scrolled)
  return (
    <div className='wrappper'>
        <div className="scrollIndicator">
            <div className="scrollMain"></div>
        </div>
    </div>
  );
}

export default Indicator;