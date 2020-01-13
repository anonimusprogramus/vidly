import React from 'react'

const ListGroup = ({
  items,
  valueProperty,
  textProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className='list-group'>
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            'list-group-item clickable' +
            (item === selectedItem ? ' active' : '')
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  valueProperty: '_id',
  textProperty: 'name'
}

export default ListGroup
