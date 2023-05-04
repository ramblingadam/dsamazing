import { useContext } from "react"
import { CurrentDSContext } from "@/contexts/CurrentDS"


const Header = () => {
  const { structure } = useContext(CurrentDSContext)

  return (
    <header className='flex flex-row justify-start text-teal-300 bg-white border-b-2 border-black header-wrapper text-outline'>
      <div className="w-full max-w-3xl p-4 mx-auto">
        <h1 className="w-full text-3xl">
          <span className="font-bold text-teal-500">DS
            <span className='text-teal-300 text-outline'>A</span>
          </span>
          <span className='text-teal-300 text-outline'>mazing</span>
          {structure !== null && (
          <span className="text-2xl font-bold text-teal-200"> ~{structure}</span>
        )}
        </h1>

      </div>

    </header>
  )
}

export default Header
