import { useState, useEffect } from 'react'

//// PROPTYPES
type TypeWriterProps = {
  text: string
}

const Typewriter = ({ text }: TypeWriterProps) => {
  // const [displayText, setDisplayText] = useState('')
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  // console.log(text)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentStringIndex < text.length) {
        setCurrentStringIndex(currentStringIndex + 1)
      } else {
        clearInterval(typingInterval)
      }
    }, 10)

    return () => {
      clearInterval(typingInterval)
    }
  })

  return (
    <p className='whitespace-pre-wrap'>{text.slice(0, currentStringIndex)}</p>
  )
}

export default Typewriter
