//// PROPTYPES
type NodeProps = {
  value: string | number | boolean,
}


//// COMPONENT
const Node = ({value}:NodeProps) => {
  return (
    <div className="w-14 h-14 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full">
      {value}
    </div>
  )
}

export default Node
