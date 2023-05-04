import MainMenuItem from './MainMenuItem'
import DataStructure from './DataStructure'
import { useState, MouseEvent } from 'react'
import CurrentStructure from '@/_types/CurrentStructure'

//// COMPONENT
const Main = ({currentStructure, setCurrentStructure}: CurrentStructure) => {

  
  
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
    <main className='w-full max-w-3xl mx-auto'>
      {!currentDS ? (
      <ul onClick={handleMainMenuItemClick}>
        {dataStructures.map((dataStructure, i) => (
          <MainMenuItem
            key={i}
            item={dataStructure}
            currentStructure={currentStructure}
            setCurrentStructure={setCurrentStructure}
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
