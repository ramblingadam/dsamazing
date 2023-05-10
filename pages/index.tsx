import { CurrentDSContext } from '@/contexts/CurrentDS'
import { EventLogTextContext } from '@/contexts/EventLogText'
import { SelectedItemInfoTextContext } from '@/contexts/SelectedItemInfoText'
import { useState } from 'react'

//// COMPONENTS
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import MainMenu from '@/components/MainMenu'
import DSMain from '@/components/DSMain'

export default function Home() {
  const [currentStructure, setCurrentStructure] = useState<string>('')
  const [eventLogTextArr, setEventLogTextArr] = useState<string[]>([
    `Let's get started!`,
  ])
  const [selectedItemInfoTextArr, setSelectedItemInfoTextArr] = useState<
    string[]
  >([`Selected it ???`])

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
          <SelectedItemInfoTextContext.Provider
            value={{
              selectedItemInfoTextArr: selectedItemInfoTextArr,
              setSelectedItemInfoTextArr: setSelectedItemInfoTextArr,
            }}
          >
            <Header />
            {!currentStructure ? <MainMenu /> : <DSMain />}
            {/* <Main /> */}
            {/* <Footer /> */}
          </SelectedItemInfoTextContext.Provider>
        </EventLogTextContext.Provider>
      </CurrentDSContext.Provider>
    </div>
  )
}
