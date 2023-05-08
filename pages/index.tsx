import { CurrentDSContext } from '@/contexts/CurrentDS'
import { EventLogTextContext } from '@/contexts/EventLogText'
import { useState } from 'react'

//// COMPONENTS
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

export default function Home() {
  const [currentStructure, setCurrentStructure] = useState<string>('')
  const [eventLogTextArr, setEventLogTextArr] = useState<string[]>([
    `Let's get started!`,
  ])

  return (
    <div className='app-wrapper bg-primary-100 box-border flex flex-col h-screen max-h-screen font-sans antialiased text-black'>
      <CurrentDSContext.Provider
        value={{
          structure: currentStructure,
          setStructure: setCurrentStructure,
        }}
      >
        <EventLogTextContext.Provider
          value={{
            eventLogTextArr: eventLogTextArr,
            setEventLogTextArr: setEventLogTextArr,
          }}
        >
          <Header />
          <Main />
          {/* <Footer /> */}
        </EventLogTextContext.Provider>
      </CurrentDSContext.Provider>
    </div>
  )
}
