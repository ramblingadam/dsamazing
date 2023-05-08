import { useEffect, useState, useRef, useContext } from 'react'
import { gsap } from 'gsap'
//// Components
import Node from './Node'
import EventLog from '../EventLog'
import DSActions from '../DSActions/DSActions'
import { EventLogTextContext } from '@/contexts/EventLogText'

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
    const result: LLNodeArrValue[] = []
    let current: LLNode | null = this.head
    let index: number = 0
    while (current) {
      const newLLNodeArrValue = {
        value: current.value,
        order: index,
      }
      result.push(newLLNodeArrValue)
      current = current.next
    }
    return result
  }
}

interface LLNodeArrValue {
  value: string | number
  // next: string
  order: number
}

//// COMPONENT
const LinkedList = () => {
  const [linkedList, setLinkedList] = useState<LL>(new LL(null))
  const [linkedListArray, setLinkedListArray] = useState<LLNodeArrValue[]>([])
  const [nodeCounter, setNodeCounter] = useState<number>(0)
  const newNodeRef = useRef(0)
  const [nodeToRemove, setNodeToRemove] = useState<number>(-1)

  // const [eventLogArr, setEventLogArr] = useState<string[]>([
  //   `Let's get started!`,
  // ])
  const { eventLogTextArr, setEventLogTextArr } =
    useContext(EventLogTextContext)

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
    const newEventLogArr = [...eventLogTextArr, ...newTextSplit]
    // console.log(newEventLogArr)
    setEventLogTextArr(newEventLogArr)
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
  //// Removes the first node found with the given value.
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

  // TODO test order animation

  const reorder = () => {
    const reordered = [...linkedListArray]
    // reordered[0].order = reordered.length - 1
    reordered[0].order = 13
    setLinkedListArray(reordered)
  }
  // TODO GSAP crazy shit... uh... beyond my reach atm
  // useEffect(() => {
  //   var group = document.querySelector('.ds-window-wrapper')
  //   var nodes = document.querySelectorAll('.node-wrapper')
  //   var total = nodes.length
  //   var ease = 'power1.inOut'
  //   var boxes: any = []

  //   for (var i = 0; i < total; i++) {
  //     var node = nodes[i]

  //     // Initialize transforms on node
  //     gsap.set(node, { x: 0 })

  //     boxes[i] = {
  //       x: node.offsetLeft,
  //       y: node.offsetTop,
  //       node,
  //     }
  //   }

  //   group.addEventListener('mouseenter', layout)
  //   group.addEventListener('mouseleave', layout)

  //   function layout() {
  //     group.classList.toggle('reorder')

  //     for (var i = 0; i < total; i++) {
  //       var box = boxes[i]

  //       var lastX = box.x
  //       var lastY = box.y

  //       box.x = box.node.offsetLeft
  //       box.y = box.node.offsetTop

  //       // Continue if box hasn't moved
  //       if (lastX === box.x && lastY === box.y) continue

  //       // Reversed delta values taking into account current transforms
  //       var x = gsap.getProperty(box.node, 'x') + lastX - box.x
  //       var y = gsap.getProperty(box.node, 'y') + lastY - box.y

  //       // Tween to 0 to remove the transforms
  //       gsap.fromTo(box.node, { x, y }, { duration: 0.5, x: 0, y: 0, ease })
  //     }
  //   }
  // }, [linkedListArray])

  const actions = [
    {
      //////////////////////////
      //// APPEND LIST
      //// Adds a node to the end of a Linked List.
      //////////////////////////
      title: 'append',
      input1Type: 'text',
      input2Type: null,
      icon: { class: 'fa-solid fa-add', text: '' },
      action: appendList,
    },
    {
      //////////////////////////
      //// PREPEND LIST
      //// Adds a node to the start of a Linked List.
      //////////////////////////
      title: 'prepend',
      input1Type: 'text',
      input2Type: null,
      icon: { class: 'fa-solid fa-add', text: '' },
      action: prependList,
    },
    {
      //////////////////////////
      //// REMOVE VALUE FROM LIST
      //// Adds a node to the start of a Linked List.
      //////////////////////////
      title: 'remove',
      input1Type: 'text',
      input2Type: null,
      icon: { class: 'fa-solid fa-subtract', text: '' },
      action: remove,
    },
    {
      //////////////////////////
      //// INSERT VALUE AT INDEX OF LIST
      //// Adds a node at the desired index of a Linked List.
      //////////////////////////
      title: 'insert',
      input1Type: 'text',
      input2Type: 'text',
      icon: { class: 'fa-solid fa-add', text: '' },
      action: remove,
    },
    {
      //////////////////////////
      //// INSERT VALUE AT INDEX OF LIST
      //// Adds a node at the desired index of a Linked List.
      //////////////////////////
      title: 'insert2',
      input1Type: 'text',
      input2Type: 'text',
      icon: { class: 'fa-solid fa-add', text: '' },
      action: remove,
    },
    {
      //////////////////////////
      //// INSERT VALUE AT INDEX OF LIST
      //// Adds a node at the desired index of a Linked List.
      //////////////////////////
      title: 'insert3',
      input1Type: 'text',
      input2Type: 'text',
      icon: { class: 'fa-solid fa-add', text: '' },
      action: remove,
    },
  ]

  //! -- END LINKED LIST OPS ---

  //! JSX
  return (
    <div className='ds-window-wrapper flex flex-col flex-1 h-full'>
      <section className='ds-view-wrapper scrollbar scroll-smooth flex flex-row flex-wrap items-start content-start justify-center flex-1 mx-4 overflow-y-auto'>
        {linkedListArray.length === 0 ? (
          <Node
            key={`${nodeCounter}--1`}
            id={'0'}
            value={undefined}
            newNode={true}
            remove={false}
            order={0}
          />
        ) : (
          linkedListArray.map((node, i) => (
            <>
              <Node
                key={`${nodeCounter}-${i}`}
                id={i.toString()}
                value={node.value}
                newNode={i === newNodeRef.current}
                remove={i === nodeToRemove}
                order={node.order}
              />

              {i === linkedListArray.length - 1 && (
                <Node
                  key={`${nodeCounter}-${i}-null`}
                  id={`${i + 1}`}
                  value={null}
                  newNode={i === newNodeRef.current}
                  remove={i === nodeToRemove}
                  order={node.order + 1}
                />
              )}
            </>
          ))
        )}
      </section>
      <DSActions actions={actions} />
      <section className='ds-eventlog-wrapper md:lg:hidden h-40'>
        <EventLog eventLogTextArr={eventLogTextArr} />
      </section>
    </div>
  )
}

export default LinkedList
