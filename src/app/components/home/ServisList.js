import React from 'react'
import './ServisList.css'

const ServisList = ({item}) => {
  return (
    <li class="list__item">
      {item.item}
    </li>
  )
}

export default ServisList;
