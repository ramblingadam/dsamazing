import { useState, useContext } from 'react'
import DSActions from './DSActions/DSActions'
import { CurrentDSContext } from '@/contexts/CurrentDS'
import LinkedList from './_structures/LinkedList'

const DSMain = () => {
  const { structure } = useContext(CurrentDSContext)
  const [eventLogArr, setEventLogArr] = useState<string[]>([
    `Let's get started!`,
  ])

  const dataStructures = {
    'Linked List': LinkedList,
    // 'Tree':,
    // 'Binary Tree':,
    // 'Binary Search Tree':,
    // 'Hash Map':,
  }

  // const currentStructureWindow = dataStructures[current]

  return (
    <main className='ds-main-wrapper flex flex-col flex-1 w-full h-full'>
      {/* //// DS DETAILS SIDEBAR (wide screen only)- Shows text representing current data strucutre, or current node if node selected */}
      <section className='ds-details-wrapper w-full max-w-xs'></section>
      {/* //// MAIN CENTRAL DISPLAY */}
      <section className='ds-central-wrapper flex flex-col flex-1 h-full max-w-3xl mx-auto'>
        {structure === 'Linked List' && <LinkedList />}

        <section className='ds-eventlog-wrapper'></section>
      </section>
      {/* //// EVENT LOG SIDEBAR (wide screen only) */}
      <section className='ds-eventlog-wrapper w-full max-w-xs'></section>
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
