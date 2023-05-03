import MainMenuItem from './MainMenuItem'
import DataStructure from './DataStructure'
import { useState, MouseEvent } from 'react'

//// COMPONENT
const Main = () => {


  const [currentDS, setCurrentDS] = useState(null)
  
  const dataStructures = [
    'Linked List',
    'Tree',
    'Binary Tree',
    'Binary Search Tree',
    'Hash Map',
  ]

  const handleMainMenuItemClick = (e:MouseEvent) => {
    setCurrentDS(e.target.item)
  }

  return (
    <main className='w-full'>
      {!currentDS ? (
      <ul>
        {dataStructures.map((dataStructure, i) => (
          <MainMenuItem
            key={i}
            item={dataStructure}
            onClick={handleMainMenuItemClick}
          />
        ))}
      </ul>
      ) : (
        <DataStructure />
      )}

    </main>
  )
}

export default Main
