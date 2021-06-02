import React from 'react'
import './ServisCart.css'
import ServisList from './ServisList'



const ServisCart = ({src, title, alt, data}) => {
  return (
    <div className="cart">
      <div className="cart__title">
        <img className="cart__title__image" src={src} alt={alt}></img>
        <p className="cart__title__text">{title}</p>
      </div>
      <ul>
          {data.map((d, index) => <ServisList item={d} key={index}/>)}
      </ul>
     
    </div>
  )
}

export default ServisCart
