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
            newNode ? 'animate-appear ' : ''
          }h-14 flex items-center justify-center p-4 text-xl font-bold text-white bg-black rounded-lg`}
          id={`node-${id}`}
        >
          Structure is Empty!
        </div>
      ) : value === null ? (
        <div
          className={`${
            newNode ? 'animate-appear ' : ''
          }w-14 h-14 flex items-center justify-center text-xl font-bold text-black rounded-full`}
        >
          null
        </div>
      ) : (
        <>
          <div
            className={`${
              newNode ? 'animate-appear scale-0 ' : ''
            }min-w-[3.5rem] w-fit p-4 h-14 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full`}
            id={`node-${id}`}
          >
            {value}
          </div>
          <div
            className='flex items-center justify-center p-4 text-2xl'
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
