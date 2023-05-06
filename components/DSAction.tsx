import { ChangeEvent, FormEvent, useState } from "react"

//// PROPTYPES
type DSActionTypes = {
  title: string,
  inputType: string,
  iconClass: string,
  action: (n:string | number | undefined) => void 
}

const DSAction = ({title, inputType, iconClass, action}:DSActionTypes) => {
  const [inputValue, setInputValue] = useState<number | string>()

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    action(inputValue)
  }

  return (
    <div className="dsaction-wrapper flex-col m-4">
      <div className="dsaction-title border-x-2 flex justify-center p-1 font-bold text-teal-300 bg-teal-800 border-t-2 border-black rounded-t-lg">
        {title}
      </div>
      <form
        className="dsaction-input-wrapper flex w-40 h-10"
        onSubmit={handleSubmit}
      >
        <input
          className="dsaction-input bl-lg inline-block w-full h-full p-2 border-b-2 border-l-2 border-black rounded-bl-lg"
          id='dsaction-input'
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
        >
        </input>
        <button
          className="dsaction-btn hover:cursor-pointer shadow-inner3d active:shadow-inner3dactive flex items-center justify-center w-10 h-full border-b-2 border-l border-r-2 border-black rounded-br-lg"
        >
          <i className={`${iconClass}`}></i>
        </button>
      </form>
    </div>
  )
}

export default DSAction
