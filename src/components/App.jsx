import React from 'react'
import Header from './Header.jsx'
import Info from './Info.jsx'
import { clientTestimonials } from '../data.js'
import Testimonial from './Testimonial.jsx'

function App() {

  const testimonials = clientTestimonials.map( item => 
    <Testimonial 
      key = {item.id}
      {...item}
    />
  )

  return(
    <>
      <Header />
      <main>
        <Info />
        {/* testimonials */}
        {testimonials}
        {/* photos */}

      </main>

      {/* footer */}

    </>
  )
}

export default App