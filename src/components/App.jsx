import React from 'react'
import Header from './Header.jsx'
import Info from './Info.jsx'
import { clientTestimonials } from '../data.js'
import Testimonial from './Testimonial.jsx'
import './App.css'
import Footer from './Footer.jsx'

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
        <section className='testimonials-section'>
          <h2 className='testimonials-section__title'>Client testimonials</h2>
          {testimonials}
        </section>
        <section className='gallery'>
          <img className='gallery__img' src='images/mobile/image-gallery-milkbottles.jpg' alt='' />
          <img className='gallery__img' src='images/mobile/image-gallery-orange.jpg' alt='' />
          <img className='gallery__img' src='images/mobile/image-gallery-cone.jpg' alt='' />
          <img className='gallery__img' src='images/mobile/image-gallery-sugar-cubes.jpg' alt='' />
        </section>

      </main>

      <Footer />

    </>
  )
}

export default App