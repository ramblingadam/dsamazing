import { useContext, MouseEvent } from "react"
import Store from "@/contexts/DSContext"
import CurrentStructure from "@/_types/CurrentStructure"

//// PROPTYPES
type MainMenuItemProps = {
  item: string,
  // onClick: () => void
}

//// COMPONENT
// const MainMenuItem = ({ item }: MainMenuItemProps) => {
const MainMenuItem = ({ item }: MainMenuItemProps, {currentStructure, setCurrentStructure}: CurrentStructure) => {
  // const store = useContext(Store)



  return (
    /* <li className={classes}>{item}</li> */
    <li className='flex justify-center p-4 m-4 text-2xl font-bold duration-200 bg-purple-300 border-2 border-black rounded-full shadow-inner3d text-xxl font-xl main-menu-item btn hover:cursor-pointer hover:border-purple hover:bg-yellow-300 active:shadow-none' onClick={() => setCurrentStructure(item)}>
      {item}
    </li>
  )
}

export default MainMenuItem
