//// PROPTYPES
type NodeProps = {
  value: string | number | boolean | null | undefined
  id: string
  newNode: boolean
}

//// COMPONENT
const Node = ({ value, id, newNode }: NodeProps) => {
  console.log(value, id, newNode)
  return (
    <div className='flex mt-4'>
      {value === undefined ? (
        <div
          className={`${
            newNode ? 'animate-grow-in ' : ''
          }h-14 flex items-center justify-center p-4 text-xl font-bold text-white bg-black rounded-lg`}
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
            className={`${
              newNode ? 'animate-grow-in scale-0 ' : ''
            }min-w-[3.5rem] z-10 w-fit p-4 h-14 flex items-center border-2 text-outline border-black justify-center text-xl font-bold text-primary-100 bg-primary-900 rounded-full shadow-inner3d hover:bg-primary-300 hover:cursor-pointer transition-colors`}
            id={`node-${id}`}
          >
            {value}
          </div>
          <div
            className={`${
              newNode ? 'animate-grow-in-slide-right scale-0 ' : ''
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
