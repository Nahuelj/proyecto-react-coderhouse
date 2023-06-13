import React from 'react'
import "../styles/ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='container-item-list'>
        <h2 className='title-item-list'>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer