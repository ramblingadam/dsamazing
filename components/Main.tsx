import MainMenu from './MainMenu'
import DSMain from './DSMain'
import { useContext, useEffect } from 'react'
import { CurrentDSContext } from '@/contexts/CurrentDS'

//// COMPONENT
const Main = () => {
  const { structure } = useContext(CurrentDSContext)

  useEffect(() => {
    const header = document.querySelector('header')
    const headerHeight = header?.offsetHeight
  }, [])

  return (
    <main className=''>
      {!structure ? <MainMenu /> : <DSMain />}
      {/* <div className='bg-primary-800'>hi</div> */}
    </main>
  )
}

export default Main
