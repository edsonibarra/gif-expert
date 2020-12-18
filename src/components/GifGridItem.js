import React from 'react'

export const GifGridItem = ({ url, title, id}) => {
    return (
        // <div className='item-container'>
        //     <img src={ url } alt={ title } key={ id }/>
        //     <h5>{ title }</h5>
        // </div>
        <div className="card" style={{width: 18 + 'rem'}}>
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
        </div>
    )
}
