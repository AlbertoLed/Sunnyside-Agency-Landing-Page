import React from 'react'

function Testimonial(props) {
    const { comment, name, job, img } = props
    return (
        <div>
            <img src={img} alt='Profile image' />
            <p>{comment}</p>
            <p>{name}</p>
            <p>{job}</p>
        </div>
    )
}

export default Testimonial