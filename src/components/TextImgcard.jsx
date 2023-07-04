import React from 'react'
import './TextImgcard.css'

function TextImgcard(props) {
    const { title, paragraph, img, textcolor } = props

    const [intersectionCount, setIntersectionCount] = React.useState(0)
    const ref = React.useRef()
    React.useEffect(() => {
        const observe = new IntersectionObserver(() => {
            setIntersectionCount(prev => prev + 1)
        })
        observe.observe(ref.current)
    }, [])

    let txtcolorClass;
    if(textcolor === 'cyan') {
        txtcolorClass = 'img-card__text--cyan'
    }
    else if(textcolor === 'blue') {
        txtcolorClass = 'img-card__text--blue'
    }
    const imgClass = img === 'image-graphic-design.jpg' ? 'img-card--graphic' : 'img-card--photography'

    return (
        <div 
            className={`img-card ${imgClass} ${intersectionCount >= 2 && `img-card--animation`}`}
            ref={ref}>
            <div className='img-card__text'>
                <h2 className={`img-card__title ${txtcolorClass}`}>{title}</h2>
                <p className={`img-card__paragraph ${txtcolorClass}`}>{paragraph}</p>
            </div>
        </div>
    )
}

export default TextImgcard