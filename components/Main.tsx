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
    console.log(e.target)
    // setCurrentDS(e.target)
  }

  return (
    <main className='w-full'>
      {!currentDS ? (
      <ul onClick={handleMainMenuItemClick}>
        {dataStructures.map((dataStructure, i) => (
          <MainMenuItem
            key={i}
            item={dataStructure}
            
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
