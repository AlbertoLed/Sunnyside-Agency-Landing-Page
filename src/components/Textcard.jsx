import React from "react"
import './Textcard.css'

function Textcard(props) {
    const {title, paragraph, color} = props

    const anchorColor = color => {
        if(color === 'yellow') {
            return 'anchor__text--yellow'
        }
        else if(color === 'salmon') {
            return 'anchor__text--salmon'
        }
    }

    return(
        <div className={`card ${color === 'yellow' ? `card--left` :  `card--right`}`}>
            <h2 className='card__title'>{title}</h2>
            <p className='card__paragraph'>{paragraph}</p>
            <p className={`anchor__text ${anchorColor(color)}`}>Learn more</p>
            
        </div>
    )
}

export default Textcard