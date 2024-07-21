import React from 'react'
import Indicator from './Indicator'
import Content from './Content'



const App=()=> {
  return(
 <div>
 <header>
  <div className="container">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Blog</li>
    </ul>
  </div>
 </header>
 <Indicator />
 <Content />



    </div>
  )
}

export default App
