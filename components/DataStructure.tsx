import { useEffect, useState, useRef } from 'react'
//// Components
import Node from './_structures/Node'
import DSAction from './DSAction'

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

  const updateCounter = () => {
    setNodeCounter(nodeCounter + 1)
  }

  const appendList = (n: any) => {
    console.log('appending...')
    newNodeRef.current = linkedListArray.length
    console.log(newNodeRef.current)
    setLinkedList(linkedList.append(n))
    setLinkedListArray(linkedList.toArray())
    updateCounter()
  }
  const prependList = (n: any) => {
    console.log('PREpending...')
    newNodeRef.current = 0
    console.log(newNodeRef.current)
    setLinkedList(linkedList.prepend(n))
    setLinkedListArray(linkedList.toArray())
    updateCounter()
  }

  return (
    <div>
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
      <section className='ds-interface-wrapper flex justify-center'>
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
    </div>
  )
}

export default DataStructure
