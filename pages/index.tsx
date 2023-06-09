import { CurrentDSContext } from '@/contexts/CurrentDS'
import { EventLogTextContext } from '@/contexts/EventLogText'
import { SelectedItemContext } from '@/contexts/SelectedItem'
import { useState } from 'react'
import { SelectedItem } from '@/contexts/SelectedItem'

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
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    id: null,
    textArr: [''],
  })

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
          <SelectedItemContext.Provider
            value={{
              selectedItem: selectedItem,
              setSelectedItem: setSelectedItem,
            }}
          >
            <Header />
            {!currentStructure ? <MainMenu /> : <DSMain />}
            {/* <Main /> */}
            {/* <Footer /> */}
          </SelectedItemContext.Provider>
        </EventLogTextContext.Provider>
      </CurrentDSContext.Provider>
    </div>
  )
}
