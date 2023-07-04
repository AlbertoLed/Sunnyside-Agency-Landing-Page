import React from 'react'
import Header from './Header.jsx'
import Info from './Info.jsx'
import { clientTestimonials } from '../data.js'
import Testimonial from './Testimonial.jsx'
import './App.css'
import Footer from './Footer.jsx'

function App() {

  const [intersectionCount, setIntersectionCount] = React.useState(0)
  const ref = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(() => {
      setIntersectionCount(prev => prev + 1)
    })
    observer.observe(ref.current)
  }, [])

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
          <div className='testimonials-section__container'>
            {testimonials}
          </div>
        </section>
        <section 
          className={`gallery ${intersectionCount >= 2 && `gallery--animation`}`}
          ref={ref}>
          <div className='gallery__img gallery__img--milkbottles'></div>
          <div className='gallery__img gallery__img--orange'></div>
          <div className='gallery__img gallery__img--cone'></div>
          <div className='gallery__img gallery__img--sugarcubes'></div>
        </section>

      </main>

      <Footer />

    </>
  )
}

export default App