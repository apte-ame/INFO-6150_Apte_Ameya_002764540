import React from 'react'

const Card = ({title, subtitle, desc, cardlink, cardLinkText, img}) => {
    return (
        <div class="card" style={{width: '18rem'}}>
             {img ? <img src={img} class="card-img-top" alt="..."></img> : ''}
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p class="card-text">{desc}</p>
                <a href={cardlink} class="card-link">{cardLinkText}</a>
            </div>
        </div>
    )
}

export default Card