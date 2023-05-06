import { useState, useEffect, useRef } from 'react'

//// PROPTYPES
type EventLogProps = {
  eventLogArr: string[]
}

const EventLog = ({ eventLogArr }: EventLogProps) => {
  // const [eventText, setEventText] = useState(text)
  const eventLog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // const eventLog = document.getElementById('event-log')
    if (eventLog?.current?.scrollTop !== undefined) {
      console.log(eventLog.current.scrollTop)
      eventLog.current.scrollTop = eventLog.current.scrollHeight
    }
  }, [eventLogArr])

  return (
    <div
      className='text-primary-200 h-36 scroll-smooth p-4 overflow-y-scroll font-mono bg-gray-900'
      id='event-log'
      ref={eventLog}
    >
      {eventLogArr.map((event, i) =>
        event.split('\n').map((line, j) => {
          console.log(line)
          // const indentedLine = line.replace('\t', '  ')
          const indentedLine = line.replace(/\t/g, '  ')
          return (
            <p
              key={`${i}-${j}`}
              className='whitespace-pre'
            >
              {indentedLine}
              {/* {line} */}
            </p>
          )
        })
      )}
    </div>
  )
}

export default EventLog
