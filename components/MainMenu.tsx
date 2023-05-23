import MainMenuItem from './MainMenuItem'

//// COMPONENT
const MainMenu = () => {
  const dataStructures = [
    'Linked List',
    // 'Tree',
    // 'Binary Tree',
    // 'Binary Search Tree',
    // 'Hash Map',
  ]

  return (
    <main className='flex flex-col flex-1 w-full h-full max-w-3xl mx-auto'>
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

export default MainMenu
