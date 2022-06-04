import React, { useContext, useState } from 'react'
import { List, arrayMove } from 'react-movable'
import { TubavContext } from '../../TubavContext'

export const SuperSimple: React.FC = () => {
  const { layers, moveLayer } = useContext(TubavContext)
  //   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])
  return (
    <List
      values={layers}
      onChange={({ oldIndex, newIndex }) => moveLayer(oldIndex, newIndex)}
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => <li {...props}>{value.name}</li>}
    />
  )
}
