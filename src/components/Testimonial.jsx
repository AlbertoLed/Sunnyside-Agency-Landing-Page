import React from 'react'
import './Testimonial.css'

function Testimonial(props) {
    const { comment, name, job, img } = props
    return (
        <div className='testimonial'>
            <img className='testimonial__img' src={img} alt='Profile image' />
            <p className='testimonial__comment'>{comment}</p>
            <p className='testimonial__name'>{name}</p>
            <p className='testimonial__job'>{job}</p>
        </div>
    )
}

export default Testimonial