//// PROPTYPES
type HoverTooltipProps = {
  text: string
}

const HoverTooltip = ({ text }: HoverTooltipProps) => {
  return (
    <div className='hover-tooltip-wrapper group-hover:opacity-100 absolute top-0 left-0 opacity-0 pointer-events-none'>
      {text.split('\n').map((line, i) => {
        return <p key={`${i}`}>{line}</p>
      })}
    </div>
  )
}

export default HoverTooltip
