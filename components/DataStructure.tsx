import { useEffect, useState, useRef } from 'react'
//// Components
import Node from './_structures/Node'
import DSAction from './DSAction'
import EventLog from './EventLog'

//// --- STRUCTURES ---
//// LINKED LIST
class LLNode {
  value: number
  next: LLNode | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class LL {
  head: LLNode | null
  length: number

  constructor(value: number | null) {
    this.head = value !== null ? new LLNode(value) : null
    this.length = value !== null ? 1 : 0
  }
  append(value: number) {
    if (!this.head) {
      this.head = new LLNode(value)
      this.length++
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new LLNode(value)
    }
    return this
  }
  prepend(value: number) {
    if (!this.head) {
      this.head = new LLNode(value)
      this.length++
    } else {
      const newNode = new LLNode(value)
      newNode.next = this.head
      this.head = newNode
    }
    return this
  }

  toArray() {
    if (this.head === null) return []
    const result = []
    let current: LLNode | null = this.head
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }
}

//// COMPONENT
const DataStructure = () => {
  const [linkedList, setLinkedList] = useState<LL>(new LL(null))
  const [linkedListArray, setLinkedListArray] = useState<number[]>([])
  const [nodeCounter, setNodeCounter] = useState<number>(0)
  const newNodeRef = useRef(0)

  const [eventLogArr, setEventLogArr] = useState<string[]>([
    `Let's get started!`,
  ])

  //// This updates a node counter which we use in combination with a node value's index to ensure unique keys are assigned to every node rendered from the LinkedListArray. This ensure React renders new and updated values properly.
  const updateCounter = () => {
    setNodeCounter(nodeCounter + 1)
  }

  //// Updates the text in the event log.
  const updateEventLog = (addText: string) => {
    const newEventLogArr = [...eventLogArr, '• ' + addText]
    // console.log(newEventLogArr)
    setEventLogArr(newEventLogArr)
  }

  //! -- LINKED LIST OPS --
  //// Adds a node to the end of our linked list.
  const appendList = (n: any) => {
    newNodeRef.current = linkedListArray.length
    console.log(newNodeRef.current)
    setLinkedList(linkedList.append(n))
    setLinkedListArray(linkedList.toArray())
    updateCounter()
    updateEventLog(
      `Created new Linked List Node:\n \t{value: ${n}, next: null}`
    )
  }

  //// Adds a node to the start of our linkedlist.
  const prependList = (n: any) => {
    newNodeRef.current = 0
    const next = `${linkedList.head?.value}`
    console.log(newNodeRef.current)
    setLinkedList(linkedList.prepend(n))
    setLinkedListArray(linkedList.toArray())
    updateCounter()
    updateEventLog(
      `Created new Linked List Node:\n\t{value: ${n}, next:\n\t\tLLNode {value: ${next}, next: ...}\n\t}`
    )
  }
  //! -- END LINKED LIST OPS ---

  //! JSX
  return (
    <div className='ds-view-wrapper flex flex-col'>
      <section className='ds-window-wrapper flex flex-wrap justify-center mx-4'>
        {linkedListArray.length === 0 ? (
          <Node
            key={`${nodeCounter}--1`}
            id={'0'}
            value={undefined}
            newNode={true}
          />
        ) : (
          linkedListArray.map((value, i) => (
            <>
              <Node
                key={`${nodeCounter}-${i}`}
                id={i.toString()}
                value={value}
                newNode={i === newNodeRef.current}
              />

              {i === linkedListArray.length - 1 && (
                <Node
                  key={`${nodeCounter}-${i + 1}`}
                  id={`${i + 1}`}
                  value={null}
                  newNode={i === newNodeRef.current}
                />
              )}
            </>
          ))
        )}
      </section>
      <section className='ds-interface-wrapper flex flex-wrap justify-center'>
        <DSAction
          title='Append'
          inputType='number'
          iconClass='fa-solid fa-add'
          action={appendList}
        />
        <DSAction
          title='Prepend'
          inputType='number'
          iconClass='fa-solid fa-add'
          action={prependList}
        />
        <DSAction
          title='Remove'
          inputType='number'
          iconClass='fa-solid fa-subtract'
          action={() => 1}
        />
      </section>
      <section className='ds-eventlog-wrapper mt-auto'>
        <EventLog eventLogArr={eventLogArr} />
      </section>
    </div>
  )
}

export default DataStructure
