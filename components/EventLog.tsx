import { useState, useEffect, useRef } from 'react'
import Typewriter from './TypeWriter'

type EventLogProps = {
  eventLogArr: string[]
}

const EventLog = ({ eventLogArr }: EventLogProps) => {
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
    if (currentLineIndex < eventLogArr.length) {
      setCurrentlyTyping(true)
      lineTimeout = setTimeout(() => {
        setCurrentLineIndex((prevIndex) => prevIndex + 1)
      }, eventLogArr[currentLineIndex].length * 10) // Adjust the delay between lines as desired
    } else {
      setCurrentlyTyping(false)
    }

    return () => {
      if (lineTimeout) clearTimeout(lineTimeout)
    }
  }, [currentLineIndex, eventLogArr])

  return (
    <div
      className='text-primary-200 h-36 scrollbar scroll-smooth p-4 overflow-y-scroll font-mono bg-gray-900'
      id='event-log'
      ref={eventLog}
    >
      {eventLogArr.slice(0, currentLineIndex).map((line, i) => {
        const indentedLine = line.replace(/\t/g, '  ')
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
