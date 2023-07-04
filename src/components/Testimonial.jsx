import React from 'react'
import './Testimonial.css'

function Testimonial(props) {
    const { comment, name, job, img } = props

    const [intersectionCount, setIntersectionCount] = React.useState(0)
    const ref = React.useRef()
    React.useEffect(() => {
        const observer = new IntersectionObserver(() => {
            setIntersectionCount(prev => prev + 1)
        })
        observer.observe(ref.current)
    }, [])

    return (
        <div 
            className={`testimonial ${intersectionCount >= 2 && `testimonial--animation`}`}
            ref={ref}>
            <img className='testimonial__img' src={img} alt='Profile image' />
            <p className='testimonial__comment'>{comment}</p>
            <div>
                <p className='testimonial__name'>{name}</p>
                <p className='testimonial__job'>{job}</p>
            </div>
            
        </div>
    )
}

export default Testimonial