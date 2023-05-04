import { useContext } from "react"
import Store from "@/contexts/DSContext"

const Header = () => {
  const store = useContext(Store)

  return (
    <header className='flex flex-row p-4 text-teal-500 bg-white border-b-2 border-black header-wrapper text-shadow'>
      <h1 className="text-3xl"><span className="font-bold">DSA</span>mazing</h1>
      {store.location !== 'main' && (
        <h1>{store.location}</h1>
      )}
    </header>
  )
}

export default Header
