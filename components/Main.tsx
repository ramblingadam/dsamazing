import MainMenu from './MainMenu'
import DSMain from './DSMain'
import { useContext } from 'react'
import { CurrentDSContext } from '@/contexts/CurrentDS'

//// COMPONENT
const Main = () => {
  const { structure } = useContext(CurrentDSContext)

  return (
    <main className='flex flex-col flex-1 w-full h-full'>
      {!structure ? <MainMenu /> : <DSMain />}
    </main>
  )
}

export default Main
