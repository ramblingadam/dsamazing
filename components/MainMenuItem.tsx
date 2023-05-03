//// PROPTYPES
type MainMenuItemProps = {
  item: string
}

//// COMPONENT
const MainMenuItem = ({ item }: MainMenuItemProps) => {





  return (
    /* <li className={classes}>{item}</li> */
    <li className='main-menu-item btn m-4 flex justify-center rounded-full border-2 border-black bg-yellow-300 p-4 font-bold duration-500 hover:cursor-pointer hover:border-white'>
      {item}

    </li>
  )
}

export default MainMenuItem
