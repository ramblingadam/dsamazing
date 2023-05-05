import { useContext } from "react"
import { CurrentDSContext } from "@/contexts/CurrentDS"



const Header = () => {
  const { structure, setStructure } = useContext(CurrentDSContext)

  return (
    <header className='header-wrapper flex flex-row justify-start p-4 text-teal-300 bg-white border-b-2 border-black'>
      <div className="text-outline w-full max-w-3xl mx-auto">
        <h1 className="w-full text-3xl">
          <span className="font-bold text-teal-500">DS
            <span className='text-outline text-teal-300'>A</span>
          </span>
          <span className='text-outline text-teal-300'>mazing</span>
          {structure !== null && (
            <span className="text-2xl font-bold text-teal-200">
              <i className="fa-solid fa-angles-right mx-2"></i>
              {structure}
            </span>

        )}
        </h1>

      </div>
      {structure !== null && (
        <div
          onClick={() => setStructure(null)}
          className="hover:cursor-pointer hover:bg-teal-100 flex items-center justify-center w-8 h-8 ml-auto font-bold text-teal-900 transition bg-teal-300 border-2 border-teal-900 rounded-full"
        >
          <i className="material-icons-round">close</i>
        </div>
      )}

    </header>
  )
}

export default Header
