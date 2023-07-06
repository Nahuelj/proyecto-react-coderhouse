import React from 'react'
import "../styles/ItemListContainer.css"
import data from "../data/products.json"
import Item from './Item/Item'
import ItemList from './ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='container-item-list'>
        <h2 className='title-item-list'>{greeting}</h2>
        <ItemList></ItemList>
    </div>
  )
}

export default ItemListContainer