import { useState, useContext, useEffect } from 'react'
import DSActions from './DSActions/DSActions'
import { CurrentDSContext } from '@/contexts/CurrentDS'
import { EventLogTextContext } from '@/contexts/EventLogText'
import LinkedList from './_structures/LinkedList'
import EventLog from './EventLog'
import SelectedItemInfo from './SelectedItemInfo'
import { SelectedItemContext } from '@/contexts/SelectedItem'

const DSMain = () => {
  const { structure } = useContext(CurrentDSContext)
  const { eventLogTextArr, setEventLogTextArr } =
    useContext(EventLogTextContext)
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext)

  const dataStructures = {
    'Linked List': LinkedList,
    // 'Tree':,
    // 'Binary Tree':,
    // 'Binary Search Tree':,
    // 'Hash Map':,
  }

  interface WelcomeMessages {
    [key: string]: string[]
  }

  const welcomeMessages: WelcomeMessages = {
    'Linked List': [
      `Let's link some lists.`,
      `Holla at ya list!`,
      `One small node for man, one giant list for mankind.`,
      `Oh nodes!`,
    ],
    // 'Tree':,
    // 'Binary Tree':,
    // 'Binary Search Tree':,
    // 'Hash Map':,
  }

  // const currentStructureWindow = dataStructures[current]

  useEffect(() => {
    if (!structure) return
    const messageOptions = welcomeMessages[structure]
    const welcomeMessage =
      messageOptions[Math.floor(Math.random() * messageOptions.length)]
    setEventLogTextArr([welcomeMessage])
  }, [structure])

  return (
    <main className='ds-main-wrapper ds-window-max-h flex flex-row flex-1 w-full'>
      {/* //// DS DETAILS SIDEBAR (wide screen only)- Shows text representing current data strucutre, or current node if node selected */}
      <section className='ds-side-details-wrapper md:lg:max-w-xs md:lg:w-[20rem]  md:lg:block hidden bg-gray-900 border-r-2 border-black'>
        <SelectedItemInfo
          selectedItemTextArr={selectedItem ? selectedItem.textArr : ['']}
        />
      </section>
      {/* //// MAIN CENTRAL DISPLAY */}
      <section className='ds-central-wrapper lg:mx-0 lg:max-w-none flex flex-col flex-1 w-full h-full max-w-screen-lg'>
        {structure === 'Linked List' && <LinkedList />}

        {/* <div className='ds-eventlog-wrapper h-40'>
          <EventLog eventLogTextArr={eventLogTextArr} />
        </div> */}
      </section>
      {/* //// EVENT LOG SIDEBAR (wide screen only) */}
      {/* <section className='ds-eventlog-wrapper w-40'></section> */}
      {/* <section className='ds-side-eventlog-wrapper md:lg:max-w-xs md:lg:min-w-[15rem]  md:lg:block hidden bg-gray-900 border-l-2 border-black'> */}
      <section className='ds-side-eventlog-wrapper md:lg:w-[20rem] md:lg:block hidden bg-gray-900 border-l-2 border-black'>
        <EventLog eventLogTextArr={eventLogTextArr} />
      </section>
    </main>
  )
}

export default DSMain
