import React, { useRef } from "react"
import './Textcard.css'

function Textcard(props) {
    const {title, paragraph, color} = props

    const [intersectionCount, setIntersectionCount] = React.useState(0)
    const ref = React.useRef()
    React.useEffect(() => {
        console.log('use effect')
        const oberver = new IntersectionObserver(() => {
            setIntersectionCount(prev => prev + 1)
        })
        oberver.observe(ref.current)
    }, [])

    const anchorColor = color => {
        if(color === 'yellow') {
            return 'anchor__text--yellow'
        }
        else if(color === 'salmon') {
            return 'anchor__text--salmon'
        }
    }

    return(
        <div 
        className={`card 
            ${color === 'yellow' ? `card--left` :  `card--right`}
            ${intersectionCount >= 2 && `card--animation`}`}
        ref={ref}>
            <h2 className='card__title'>{title}</h2>
            <p className='card__paragraph'>{paragraph}</p>
            <p className={`anchor__text ${anchorColor(color)}`}>Learn more</p>
            
        </div>
    )
}

export default Textcard