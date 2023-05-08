import HoverTooltip from '../HoverTooltip'

//// PROPTYPES
type NodeProps = {
  value: string | number | boolean | null | undefined
  id: string
  newNode: boolean
  remove: boolean
  order: number
}

//// COMPONENT
const Node = ({ value, id, newNode, remove, order }: NodeProps) => {
  // console.log('remove!?!?!?')
  // console.log(value, id, newNode, remove)
  const orderClass = order <= 12 ? `order-${order} ` : `order-[${order}] `
  return (
    <div
      className={`${orderClass}${
        order > 2 ? 'bg-black ' : ''
      }node-wrapper flex mt-4 transition-order-1s`}
    >
      {value === undefined ? (
        <div
          className={`${
            newNode ? 'animate-grow-in ' : ''
          }h-14 flex items-center justify-center p-4 text-xl font-bold text-black  rounded-lg`}
          id={`node-${id}`}
        >
          Structure is Empty!
        </div>
      ) : value === null ? (
        <div
          className={`${
            newNode ? 'animate-grow-in-delay scale-0 ' : ''
          }w-14 h-14 flex items-center justify-center text-xl font-bold text-black rounded-full`}
        >
          null
        </div>
      ) : (
        <>
          <div
            className={`${newNode ? 'animate-grow-in scale-0 ' : ''}${
              remove ? 'animate-shrink-out-spin ' : ''
            }min-w-[3.5rem] z-10 w-fit p-4 h-14 flex items-center border-2 text-outline border-black justify-center text-xl font-bold text-primary-100 bg-secondary-400 rounded-full shadow-inner3d hover:bg-highlight-300 hover:cursor-pointer transition-colors font-mono relative group`}
            id={`node-${id}`}
          >
            <span>{value}</span>
            <HoverTooltip text={'oh hello!'} />
          </div>
          <div
            className={`${
              newNode ? 'animate-grow-in-slide-right scale-0 ' : ''
            }${
              remove ? 'animate-shrink-out-spin ' : ''
            }flex items-center justify-center p-4 text-2xl text-black`}
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
