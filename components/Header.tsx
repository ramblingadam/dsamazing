import { useContext } from "react"
import { CurrentDSContext } from "@/contexts/CurrentDS"



const Header = () => {
  const { structure, setStructure } = useContext(CurrentDSContext)

  return (
    <header className='header-wrapper text-outline flex flex-row justify-start text-teal-300 bg-white border-b-2 border-black'>
      <div className="w-full max-w-3xl p-4 mx-auto">
        <h1 className="w-full text-3xl">
          <span className="font-bold text-teal-500">DS
            <span className='text-outline text-teal-300'>A</span>
          </span>
          <span className='text-outline text-teal-300'>mazing</span>
          {structure !== null && (
          <>
            <span className="text-2xl font-bold text-teal-200">
              <i className="fa-solid fa-angles-right mx-2"></i>
              {structure}
            </span>
            <span
              onClick={() => setStructure(null)}
            >
              <i className="fa-solid fa-circle-xmark hover:cursor-pointer text-red-300 scale-50"></i>
            </span>
          </>

        )}
        </h1>

      </div>

    </header>
  )
}

export default Header
