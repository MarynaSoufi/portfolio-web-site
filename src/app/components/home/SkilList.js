import React from 'react'
import './SkilList.css'
const SkilList = ({item}) => {
  return (
    <li class="skil__list__item">
      {item.item}
    </li>
  )
}

export default SkilList;
