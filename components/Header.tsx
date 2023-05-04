import { useContext } from "react"
import Store from "@/contexts/DSContext"
import CurrentStructure from "@/_types/CurrentStructure"


const Header = ({currentStructure, setCurrentStructure}: CurrentStructure) => {
  // const store = useContext(Store)

  return (
    <header className='flex flex-row justify-start text-teal-500 bg-white border-b-2 border-black header-wrapper text-outline'>
      <div className="w-full max-w-3xl p-4 mx-auto">
        <h1 className="w-full text-3xl">
          <span className="font-bold">DS
            <span className='text-teal-300 text-outline'>A</span>
          </span>
          <span className='text-teal-300 text-outline'>mazing</span>
        </h1>
        {currentStructure !== null && (
          <h1>{currentStructure}</h1>
        )}
      </div>

    </header>
  )
}

export default Header
