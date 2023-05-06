import { useContext, MouseEvent } from "react"
import { CurrentDSContext } from "@/contexts/CurrentDS"

//// PROPTYPES
type MainMenuItemProps = {
  item: string,
  // onClick: () => void
}

//// COMPONENT
// const MainMenuItem = ({ item }: MainMenuItemProps) => {
const MainMenuItem = ({ item }: MainMenuItemProps)=> {
  // const store = useContext(Store)
  const {setStructure} = useContext(CurrentDSContext)


  return (
    /* <li className={classes}>{item}</li> */
    <li
      className='bg-secondary-300 shadow-inner3d text-xxl font-xl main-menu-item btn hover:cursor-pointer hover:border-purple hover:bg-highlight-300 active:shadow-none flex justify-center p-4 m-4 text-2xl font-bold duration-200 border-2 border-black rounded-full'
      onClick={() => {
        setStructure(item)
      }}
    >
      {item}
    </li>
  )
}

export default MainMenuItem
