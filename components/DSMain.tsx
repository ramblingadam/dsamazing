import { useState, useContext, useEffect } from 'react'
import DSActions from './DSActions/DSActions'
import { CurrentDSContext } from '@/contexts/CurrentDS'
import { EventLogTextContext } from '@/contexts/EventLogText'
import LinkedList from './_structures/LinkedList'
import EventLog from './EventLog'

const DSMain = () => {
  const { structure } = useContext(CurrentDSContext)
  const { eventLogTextArr, setEventLogTextArr } =
    useContext(EventLogTextContext)

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
    <main className='ds-main-wrapper flex flex-row flex-1 w-full h-full'>
      {/* //// DS DETAILS SIDEBAR (wide screen only)- Shows text representing current data strucutre, or current node if node selected */}
      <section className='ds-side-details-wrapper md:lg:max-w-xs md:lg:min-w-[15rem]  md:lg:block hidden bg-gray-900 border-r-2 border-black'>
        HEY YOU
      </section>
      {/* //// MAIN CENTRAL DISPLAY */}
      <section className='ds-central-wrapper md:lg:mx-0 md:lg:max-w-none flex flex-col flex-1 w-full max-w-screen-lg max-h-screen'>
        {structure === 'Linked List' && <LinkedList />}

        <section className='ds-eventlog-wrapper h-40'>
          <EventLog eventLogTextArr={eventLogTextArr} />
        </section>
      </section>
      {/* //// EVENT LOG SIDEBAR (wide screen only) */}
      {/* <section className='ds-eventlog-wrapper w-40'></section> */}
      {/* <section className='ds-side-eventlog-wrapper md:lg:max-w-xs md:lg:min-w-[15rem]  md:lg:block hidden bg-gray-900 border-l-2 border-black'> */}
      <section className='ds-side-eventlog-wrapper md:lg:w-[20rem] md:lg:block hidden bg-gray-900 border-l-2 border-black'>
        <EventLog eventLogTextArr={eventLogTextArr} />
      </section>
    </main>
    // <main className='flex flex-col w-full h-full'>
    //   //// DS DETAILS SIDEBAR (wide screen only)- Shows text representing
    //   current data strucutre, or current node if node selected
    //   <section className='ds-details-wrapper w-full max-w-xs'></section>
    //   //// MAIN CENTRAL DISPLAY
    //   <section className='ds-window-wrapper'>
    //     //// DS Display area.
    //     <section className='ds-view-wrapper'></section>
    //     //// DS Actions control panel.
    //     {/* <section className='ds-actions-wrapper'></section> */}
    //     {/* <DSActions /> */}
    //     //// Eventlog location on small screens. Toggle to swap between event log and DS details view.
    //     <section className='ds-eventlog-wrapper'></section>
    //   </section>
    //   //// EVENT LOG SIDEBAR (wide screen only)
    //   <section className='ds-eventlog-wrapper w-full max-w-xs'></section>
    // </main>
  )
}

export default DSMain
