import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  MouseEvent,
  useRef,
} from 'react'
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
  const [titleWidth, setTitleWidth] = useState<string>('w-full ')
  const [input1WidthPadding, setinput1WidthPadding] =
    useState<string>('w-0 p-0')
  const [input2WidthPadding, setinput2WidthPadding] =
    useState<string>('w-0 p-0')
  const focusInputRef = useRef<HTMLInputElement>(null)

  const handleInput1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1Value(e.target.value)
  }
  const handleInput2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setInput2Value(+e.target.value)
  }

  //// This useEffect fires when ths action is selected or unselected.
  //// If selected, then we focus on the first input field for the action, and set widths for our inputs so they can slide into existence as appropriate.
  //// If unselected, then we reset the widths od our inputs so they can slideway.
  useEffect(() => {
    if (selected) {
      focusInputRef.current?.focus()
      if (input1Type && input2Type) {
        setTitleWidth('w-1/3 ')
        setinput1WidthPadding('w-1/3 p-1 ')
        setinput2WidthPadding('w-1/3 p-1 ml-1')
      } else if (input1Type) {
        setTitleWidth('w-1/2 ')
        setinput1WidthPadding('w-1/2 p-1 ')
        setinput2WidthPadding('w-0 p-0 ')
      }
    } else {
      setTitleWidth('w-full')
      setinput1WidthPadding('w-0 p-0 ')
      setinput2WidthPadding('w-0 p-0 ')
      setInput1Value('')
      setInput2Value('')
    }
  }, [selected])

  //// This function serves to prevent the default form behavior of refreshing before running the actual action, while allowing the user to press "enter" within the input field to trigger the action.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('HANDLESUBMIT?')
    e.preventDefault()

    handleDSActionClick(null)
  }
  //// Runs the action.
  const handleDSActionClick = (e: MouseEvent<HTMLFormElement> | null) => {
    console.log('DSACTIONCLICK!?')
    //// If current DSaction is not selected, select it and return.
    if (!selected) {
      onSelect()
      ////If the current action IS selected....
    } else {
      //// check if we entered here with null
      if (e !== null) {
        const target = e?.target as HTMLElement
        if (target.tagName === 'INPUT') return
      }

      //// If one or both inputs are both required and empty, do nothing.
      // TODO: Alert user to fill a thing.
      if (
        (input1Type && input1Value === '') ||
        (input2Type && input2Value === '')
      ) {
        const emptyInputs = document.querySelectorAll('input')
        emptyInputs.forEach((emptyInput) => {
          emptyInput.classList.add('bg-red-500')
          setTimeout(() => {
            emptyInput.classList.remove('bg-red-500')
          }, 1000)
        })
        return
      }

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
  }

  return (
    <form
      className={`ds-action-wrapper ${
        selected ? 'border-highlight-300 ' : 'border-black '
      } border-2 w-1/2 shadow-inner3d bg-secondary-300 flex flex-row items-center justify-center p-2 hover:bg-highlight-300 hover:cursor-pointer h-12 active:shadow-inner3dactive`}
      onClick={handleDSActionClick}
      onSubmit={handleSubmit}
    >
      {/* {selected && (
        <>
          <input
            ref={focusInputRef}
            className={`${input1WidthPadding} rounded-lg transition-all duration-500`}
            type={input1Type !== null ? input1Type : undefined}
            value={input1Value}
            onChange={handleInput1Change}
            required={input1Type !== null}
            tabIndex={selected ? undefined : -1}
          ></input>
          <input
            className={`${input2WidthPadding} rounded-lg transition-all duration-500`}
            type={input2Type !== null ? input2Type : undefined}
            value={input2Value}
            onChange={handleInput2Change}
            required={input2Type !== null}
            tabIndex={selected && input2Type ? undefined : -1}
          ></input>
        </>
      )} */}
      <input
        ref={focusInputRef}
        className={`${input1WidthPadding} rounded-lg transition-all duration-500`}
        type={input1Type !== null ? input1Type : undefined}
        value={input1Value}
        onChange={handleInput1Change}
        required={input1Type !== null}
        tabIndex={selected ? undefined : -1}
      ></input>
      <input
        className={`${input2WidthPadding} rounded-lg transition-all duration-500`}
        type={input2Type !== null ? input2Type : undefined}
        value={input2Value}
        onChange={handleInput2Change}
        required={input2Type !== null}
        tabIndex={selected && input2Type ? undefined : -1}
      ></input>
      <div
        className={`${titleWidth} ds-action-title text-primary-100 text-outline flex items-center justify-center transition-all duration-500`}
      >
        <i className={`${icon.class} pr-1`}>{icon.text}</i>
        {title}
      </div>
      <input
        type='submit'
        className='hidden'
      ></input>
    </form>
  )
}

export default DSAction
