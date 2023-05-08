import { useContext, useState, useEffect } from 'react'
import { CurrentDSContext } from '@/contexts/CurrentDS'

const Header = () => {
  const { structure, setStructure } = useContext(CurrentDSContext)
  const [headerStructure, setHeaderStructure] = useState<string>('')

  useEffect(() => {
    let headerStructureTimeout: NodeJS.Timeout | null = null
    if (structure) {
      setHeaderStructure(structure)
    } else {
      headerStructureTimeout = setTimeout(() => {
        setHeaderStructure('')
      }, 30000)
    }
    return () => {
      if (headerStructureTimeout) {
        clearTimeout(headerStructureTimeout)
      }
    }
  }, [structure])

  return (
    <header className='header-wrapper flex flex-row justify-start p-4 text-teal-300 bg-white border-b-2 border-black'>
      <div className='text-outline relative w-full max-w-3xl mx-auto'>
        <h1 className='relative w-full text-3xl'>
          <div className='right-0 -translate-x-[100%] absolute top-0 z-10 w-full h-full bg-white'></div>
          <div
            onClick={() => setStructure(null)}
            className={`${
              structure ? 'hover:cursor-pointer group ' : ''
            }transition-colors relative bg-white z-20 inline-block`}
          >
            <span className='group-hover:text-primary-300 font-bold text-teal-500 transition-colors duration-300'>
              DS
              <span className='text-outline text-teal-300'>A</span>
            </span>
            <span className='text-outline text-teal-300'>mazing</span>
          </div>

          {/* {structure !== null && ( */}
          <div
            className={`${
              structure ? 'animate-slide-right-far ' : 'animate-slide-left-far '
            }text-2xl font-bold text-teal-200 inline-block`}
          >
            <i className={`fa-solid fa-angles-right mx-2`}></i>
            <span className={`text-2xl font-bold text-teal-200 inline-block`}>
              {headerStructure}
            </span>
          </div>
          {/* )} */}
        </h1>
        {structure !== null && (
          <div
            onClick={() => setStructure(null)}
            className='hover:cursor-pointer hover:bg-teal-100 absolute top-0 right-0 flex items-center justify-center w-8 h-8 ml-auto font-bold text-white text-teal-900 transition bg-teal-300 border-2 border-teal-900 rounded-full'
          >
            <i className='material-icons-round'>close</i>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
