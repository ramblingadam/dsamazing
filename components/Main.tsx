import MainMenuItem from './MainMenuItem'

//// COMPONENT
const Main = () => {
  const dataStructures = [
    'Linked List',
    'Tree',
    'Binary Tree',
    'Binary Search Tree',
    'Hash Map',
  ]

  return (
    <main className='w-full'>
      <ul>
        {dataStructures.map((dataStructure, i) => (
          <MainMenuItem
            key={i}
            item={dataStructure}
          />
        ))}
      </ul>
    </main>
  )
}

export default Main
