import React from 'react'

const Card = ({applyImage, title, onClick}) => 
{
    return ( // css file: comp/card
        <div className='card' onClick={onClick}>
            <div className='card__icon--container'>
                <img className='card__icon' src={applyImage} alt="card"/>
            </div>
            <div className='card__title--container'>
                <h3 className='card__title'>{title}</h3>
            </div>
        </div>
    )
}

export default Card