import { useState } from 'react'
import Indicator from './Indicator'
import Content from './Content'



const App=()=> {
 <>
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


    </>
  
}

export default App
