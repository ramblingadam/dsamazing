import { useState, useEffect, useRef } from 'react'
import Typewriter from './TypeWriter'

type EventLogProps = {
  eventLogTextArr: string[]
}

const EventLog = ({ eventLogTextArr }: EventLogProps) => {
  const eventLog = useRef<HTMLDivElement>(null)
  const [currentLineIndex, setCurrentLineIndex] = useState(1)
  const [currentlyTyping, setCurrentlyTyping] = useState<boolean>(false)

  useEffect(() => {
    const scrollToBottom = () => {
      if (eventLog.current) {
        eventLog.current.scrollTop = eventLog.current.scrollHeight
      }
    }

    let scrollInterval: NodeJS.Timer | null = null
    if (currentlyTyping === true) {
      scrollInterval = setInterval(() => {
        scrollToBottom()
      }, 50)
    } else {
      setTimeout(() => scrollToBottom(), 50)
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    }
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    }
  }, [currentlyTyping])

  useEffect(() => {
    let lineTimeout: NodeJS.Timeout | null = null
    if (currentLineIndex < eventLogTextArr.length) {
      setCurrentlyTyping(true)
      lineTimeout = setTimeout(() => {
        setCurrentLineIndex((prevIndex) => prevIndex + 1)
      }, eventLogTextArr[currentLineIndex].length * 10) //// Delay between each line is dependent on the number of characters in the previous line
    } else {
      setCurrentlyTyping(false)
    }

    return () => {
      if (lineTimeout) clearTimeout(lineTimeout)
    }
  }, [currentLineIndex, eventLogTextArr])

  return (
    <div
      className='text-primary-200 scrollbar scroll-smooth w-full h-full p-4 overflow-y-auto font-mono bg-gray-900'
      ref={eventLog}
    >
      {eventLogTextArr.slice(0, currentLineIndex).map((line, i) => {
        const indentedLine = line.replace(/\t/g, ' ')
        return (
          <Typewriter
            key={i}
            text={indentedLine}
          />
        )
      })}
    </div>
  )
}

export default EventLog
