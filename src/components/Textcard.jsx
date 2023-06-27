import React from "react"
import './Textcard.css'

function Textcard(props) {
    const {title, paragraph, color} = props

    const anchorColor = color => {
        if(color === 'yellow') {
            return 'anchor__marker--yellow'
        }
        else if(color === 'salmon') {
            return 'anchor__marker--salmon'
        }
    }

    return(
        <div className={`card ${color === 'yellow' ? `card--left` :  `card--right`}`}>
            <h2 className='card__title'>{title}</h2>
            <p className='card__paragraph'>{paragraph}</p>
            <div className='anchor'>
                <p className='anchor__text'>Learn more</p>
                <div className={`anchor__marker ${anchorColor(color)}`}></div>
            </div>
            
        </div>
    )
}

export default Textcard