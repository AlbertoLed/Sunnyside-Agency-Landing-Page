import React from 'react'
import Header from './Header.jsx'
import Info from './Info.jsx'
import { clientTestimonials } from '../data.js'
import Testimonial from './Testimonial.jsx'
import './App.css'

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
        <section className='testimonials-section'>
          <h2 className='testimonials-section__title'>Client testimonials</h2>
          {testimonials}
        </section>
        {/* photos */}

      </main>

      {/* footer */}

    </>
  )
}

export default App