import { useContext, useEffect, useState, useRef } from 'react'
import HoverTooltip from '../HoverTooltip'
import { SelectedItemContext } from '@/contexts/SelectedItem'

//// PROPTYPES
type NodeProps = {
  value: string | number | boolean | null | undefined
  id: string
  newNode: boolean
  remove: boolean
  order: number
  descriptionStringArr: string[]
}

//// COMPONENT
const Node = ({
  value,
  id,
  newNode,
  remove,
  order,
  descriptionStringArr,
}: NodeProps) => {
  const [selected, setSelected] = useState<Boolean>(false)
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext)
  const node = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    // console.log('---')
    // console.log(selectedItem, node)
    // console.log(node.current)
    // console.log(selectedItem, node.current.id)
    if (selectedItem?.id === node?.current?.id && !selected) {
      // if (selectedItem?.id === node.curr) {

      setSelected(true)
      // console.log(selected)
    } else {
      setSelected(false)
      // console.log(selected)
    }
  }, [selectedItem])

  const handleNodeClick = () => {
    // console.log(node.current.id)
    if (node.current !== null) {
      setSelectedItem({
        id: `node-${id}`,
        textArr: [...descriptionStringArr],
      })
      // setTimeout(() => console.log(selectedItem, node.current.id), 500)
    }
  }

  // console.log('remove!?!?!?')
  // console.log(value, id, newNode, remove)
  const orderClass = order <= 12 ? `order-${order} ` : `order-[${order}] `
  return (
    <div
      className={`${orderClass}${
        order > 2 ? 'bg-black ' : ''
      }node-wrapper flex mt-4 transition-order-1s`}
      onClick={handleNodeClick}
    >
      {value === undefined ? (
        <div
          className={`${
            newNode ? 'animate-grow-in ' : ''
          }node h-14 flex items-center justify-center p-4 text-xl font-bold text-black  rounded-lg`}
          id={`node-${id}`}
          ref={node}
        >
          Structure is Empty!
        </div>
      ) : value === null ? (
        <div
          className={`${
            newNode ? 'animate-grow-in-delay scale-0 ' : ''
          }node w-14 h-14 flex items-center justify-center text-xl font-bold text-black rounded-full`}
          ref={node}
        >
          null
        </div>
      ) : (
        <>
          <div
            className={`${newNode ? 'animate-grow-in scale-0 ' : ''}${
              remove ? 'animate-shrink-out-spin ' : ''
            }${
              selected ? 'bg-highlight-300 ' : 'bg-secondary-400 '
            }node min-w-[3.5rem] z-10 w-fit p-4 h-14 flex items-center border-2 text-outline border-black justify-center text-xl font-bold text-primary-100 rounded-full shadow-inner3d hover:bg-highlight-300 hover:cursor-pointer transition-colors font-mono relative group duration-500`}
            id={`node-${id}`}
            ref={node}
          >
            {value}
            {/* <HoverTooltip text={'oh hello!'} /> */}
          </div>
          <div
            className={`${
              newNode ? 'animate-grow-in-slide-right scale-0 ' : ''
            }${
              remove ? 'animate-shrink-out-spin ' : ''
            }node flex items-center justify-center p-4 text-2xl text-black`}
            id={`node-${id}-pointer`}
          >
            <i className='fa-solid fa-arrow-right'></i>
          </div>
        </>
      )}
    </div>
  )
}

export default Node
