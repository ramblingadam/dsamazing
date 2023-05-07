import MainMenuItem from './MainMenuItem'
import DataStructure from './DataStructure'
import { useState, MouseEvent, useContext } from 'react'
import { CurrentDSContext } from '@/contexts/CurrentDS'

//// COMPONENT
const Main = () => {
  const { structure } = useContext(CurrentDSContext)

  const dataStructures = [
    'Linked List',
    'Tree',
    'Binary Tree',
    'Binary Search Tree',
    'Hash Map',
  ]

  const handleMainMenuItemClick = (e: MouseEvent) => {
    // console.log(e.target)
    // setCurrentDS(e.target)
  }

  return (
    <main className='flex flex-col flex-1 w-full h-full max-w-3xl mx-auto'>
      {!structure ? (
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
