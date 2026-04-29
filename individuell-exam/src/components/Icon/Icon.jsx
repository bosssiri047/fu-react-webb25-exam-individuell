import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faArrowLeft, faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons'
import './icon.css'
import { useCartStore } from '../../stores/useCartStore'

const Icon = ({name}) => {
  const cart = useCartStore(state => state.cart); 
  const navigate = useNavigate();
    
  return (
    name === 'cart' ?
    <section className="cartIcon-wrapper" onClick={ () => {navigate(`/cart`)} } >
      <FontAwesomeIcon className={name} 
                    icon={name === 'cart' ? faCartShopping : name === 'back' ? faArrowLeft : null} 
                    size="xl" 
                    onClick={ () => {name === 'back' ? navigate(-1) : navigate(`/${name}`)} } 
      />
      <span className="count-container">
        <p className="cartQuantity">{ cart.reduce((acc, ticket) => acc + ticket.qty, 0) }</p>
      </span>
    </section>
    : <FontAwesomeIcon className={name} 
                    icon={name === 'cart' ? faCartShopping : name === 'back' ? faArrowLeft : name === 'magnify' ? faMagnifyingGlass : name === 'home' ? faHome : null} 
                    size="xl" 
                    onClick={ () => {name === 'back' ? navigate(-1) : name === 'magnify' ? null : name === "home" ? navigate('/') : navigate(`/${name}`)} } 
    />
  )
}

export default Icon