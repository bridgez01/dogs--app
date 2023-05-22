import React from 'react'
//{/*import imgs from './images/Dog-logo.png'*/}//

const Card = (props) => {
  return (
    <div>
      <div className="card-grid">
        <div className="card">
            <div className="card-image">
            <img src={props.imageUrl} alt='' />
            </div>
            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
                <button className="add-to-cart-button">+</button>
            </div>
        </div>
    </div>

</div>
  )
}

export default Card;
