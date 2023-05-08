import { ChangeEvent, FormEvent, useState } from 'react'
import { DSActionPropTypes } from '@/_types/DSActionPropTypes'

const DSAction = ({
  title,
  input1Type,
  input2Type,
  icon,
  selected,
  onSelect,
  action,
}: DSActionPropTypes) => {
  const [input1Value, setInput1Value] = useState<number | string>('')
  const [input2Value, setInput2Value] = useState<number | string>('')

  const handleInput1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1Value(e.target.value)
  }
  const handleInput2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setInput2Value(+e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //// If one or both inputs are both required and empty, do nothing.
    // TODO: Alert user to fill a thing.
    if (
      (input1Type && input1Value === '') ||
      (input2Type && input2Value === '')
    )
      return

    if (input1Type && !input2Type) {
      ;(action as (n: string | number | undefined) => void)(input1Value)
    } else if (input1Type && input2Type) {
      ;(action as (n: string | number, i: number) => void)(
        input1Value,
        +input2Value
      )
    }

    setInput1Value('')
    setInput2Value('')
  }

  const handleDSActionClick = () => {
    if (!selected) {
      onSelect()
    }
  }

  return (
    <form
      className={`ds-action-wrapper ${
        selected ? 'border-highlight-300 ' : 'border-black '
      } border-2 w-1/2 shadow-inner3d bg-secondary-300 flex flex-row items-center justify-center p-2`}
      onSubmit={handleSubmit}
      onClick={handleDSActionClick}
    >
      {selected && (
        <>
          {input1Type !== null && (
            <input
              className='p-1'
              type={input1Type}
              value={input1Value}
              onChange={handleInput1Change}
              required={input1Type !== null}
            ></input>
          )}
          {input2Type !== null && (
            <input
              className='p-1'
              type={input2Type}
              value={input2Value}
              onChange={handleInput2Change}
              required={input2Type !== null}
            ></input>
          )}
          <button className='ds-action-btn'></button>
        </>
      )}
      <div className='ds-action-title'>
        <i className={`${icon.class}`}>{icon.text}</i>
        {title}
      </div>
    </form>

    // <div className='dsaction-wrapper flex-col m-4'>
    //   <div className='dsaction-title border-x-2 text-outline flex justify-center p-1 font-bold text-teal-300 bg-teal-800 border-t-2 border-black rounded-t-lg'>
    //     {title}
    //   </div>
    //   <form
    //     className='dsaction-input-wrapper flex w-20 h-10'
    //     onSubmit={handleSubmit}
    //   >
    //     <input
    //       className='dsaction-input bl-lg inline-block w-full h-full p-2 border-b-2 border-l-2 border-black rounded-bl-lg'
    //       id='dsaction-input'
    //       type={inputType}
    //       value={inputValue}
    //       onChange={handleInputChange}
    //     ></input>
    //     <button className='dsaction-btn hover:cursor-pointer shadow-inner3d active:shadow-inner3dactive flex items-center justify-center w-10 h-full border-b-2 border-l border-r-2 border-black rounded-br-lg'>
    //       <i className={`${iconClass}`}></i>
    //     </button>
    //   </form>
    // </div>
  )
}

export default DSAction
