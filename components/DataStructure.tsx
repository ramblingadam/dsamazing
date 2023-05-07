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
  remove(value: number) {
    // console.log(`Searching for ${value}...`)
    if (!this.head) return false
    let index = 0
    let current: LLNode | null = this.head
    let prev: LLNode | null = null
    let next: LLNode | null = current.next
    while (current) {
      console.log(current)
      //// If we found the value,
      if (current.value === value) {
        //// Check if we're still at the head. If so,
        if (current === this.head) {
          //// Check if there is a next node. If so, set the new head to that node, and we're done.
          if (current.next) {
            this.head = this.head.next
            //// If there is not a secondndoe in the list, empty the list by setting the list's head to null.
          } else {
            this.head = null
          }
          //// If we are NOT at the head, confirm that prev is an LLNode andnot null(it should be if we made it this far).
        } else if (prev instanceof LLNode) {
          //// If there is another node ahead of this one, remove our current node by setting the previous node's next value to the following node.
          if (current.next) {
            prev.next = next
            //// If there is NOT another node ahead, set the previous node's next value to null.
          } else {
            prev.next = null
          }
        }
        //// Yay, we removed a node! Decrease the length property of our list by one, and return the index of the item we removed. We'll use this value to apply the disappearing animation to the node we removed.
        this.length--
        return index
        //// If we did NOT find the value, step forward through the list.
      } else {
        prev = current
        current = current.next
        next = current?.next ? current.next : null
        index++
      }
    }
    return false
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
  const [nodeToRemove, setNodeToRemove] = useState<number>(-1)

  const [eventLogArr, setEventLogArr] = useState<string[]>([
    `Let's get started!`,
  ])

  //// This updates a node counter which we use in combination with a node value's index to ensure unique keys are assigned to every node rendered from the LinkedListArray. This ensure React renders new and updated values properly.
  const updateCounter = () => {
    setNodeCounter(nodeCounter + 1)
  }

  //// Updates the text in the event log.
  const updateEventLog = (addText: string) => {
    const newTextSplit = addText.split('\n')
    // console.log(newTextSplit)
    newTextSplit[0] = '• ' + newTextSplit[0]
    // const newEventLogArr = [...eventLogArr, '• ' + addText]
    const newEventLogArr = [...eventLogArr, ...newTextSplit]
    // console.log(newEventLogArr)
    setEventLogArr(newEventLogArr)
  }

  //! -- LINKED LIST OPS --
  //// Adds a node to the end of our linked list.
  const appendList = (n: any) => {
    newNodeRef.current = linkedListArray.length
    // console.log(newNodeRef.current)
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

  const remove = (n: any) => {
    newNodeRef.current = -1
    //// linkedList.remove() returns false if the value is not found, or the index of the removed item if found.
    const result = linkedList.remove(n)
    if (result === false) {
      updateEventLog(`Value ${n} not found in Linked List.`)
    } else {
      // console.log(`Value found, at index ${result}`)
      setNodeToRemove(result)
      const removeAnimationTimeout = setTimeout(() => {
        setNodeToRemove(-1)
        setLinkedListArray(linkedList.toArray())
        clearTimeout(removeAnimationTimeout)
      }, 1000)
      updateCounter()
      updateEventLog(`First instance of value ${n} removed.`)
    }
  }

  //! -- END LINKED LIST OPS ---

  //! JSX
  return (
    <div className='ds-view-wrapper flex flex-col flex-1 h-full'>
      <section className='ds-window-wrapper flex flex-wrap justify-center mx-4'>
        {linkedListArray.length === 0 ? (
          <Node
            key={`${nodeCounter}--1`}
            id={'0'}
            value={undefined}
            newNode={true}
            remove={false}
          />
        ) : (
          linkedListArray.map((value, i) => (
            <>
              <Node
                key={`${nodeCounter}-${i}`}
                id={i.toString()}
                value={value}
                newNode={i === newNodeRef.current}
                remove={i === nodeToRemove}
              />

              {i === linkedListArray.length - 1 && (
                <Node
                  key={`${nodeCounter}-${i}-null`}
                  id={`${i + 1}`}
                  value={null}
                  newNode={i === newNodeRef.current}
                  remove={i === nodeToRemove}
                />
              )}
            </>
          ))
        )}
      </section>
      <section className='ds-interface-wrapper flex flex-wrap justify-center'>
        <DSAction
          title='append'
          inputType='number'
          iconClass='fa-solid fa-add'
          action={appendList}
        />
        <DSAction
          title='prepend'
          inputType='number'
          iconClass='fa-solid fa-add'
          action={prependList}
        />
        <DSAction
          title='remove'
          inputType='number'
          iconClass='fa-solid fa-subtract'
          action={remove}
        />
      </section>
      <section className='ds-eventlog-wrapper mt-auto'>
        <EventLog eventLogArr={eventLogArr} />
      </section>
    </div>
  )
}

export default DataStructure
