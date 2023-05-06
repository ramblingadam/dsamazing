import { useEffect, useState } from "react"
//// Components
import Node from "./_structures/Node"
import DSAction from "./DSAction"


//// --- STRUCTURES ---
//// LINKED LIST
class LLNode {
  value: number
  next: LLNode | null

  constructor(value:number) {
    this.value = value
    this.next = null
  }
}

class LL {
  head: LLNode | null
  length: number

  constructor(value:number | null) {
    this.head = value !== null ? new LLNode(value) : null
    this.length = value !== null ? 1 : 0
  }
  append(value:number) {
    if(!this.head) {
      this.head = new LLNode(value)
      this.length ++
    }
    else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = new LLNode(value)
    }
  }
}



//// COMPONENT
const DataStructure = () => {
  const [linkedList, setLinkedList] = useState<LL | null>(null)
  useEffect(() => {
    
  }, [linkedList])

  const appendList = (n:any) => {
    console.log(n)
  }


  return (
    <div>
      <section className="ds-window-wrapper flex justify-center m-4">
        <Node value={100}/>
      </section>
      <section className="ds-interface-wrapper flex justify-center">
        <DSAction title='Append' inputType='number' iconClass="fa-solid fa-add" action={appendList}/>
        <DSAction title='Remove' inputType='number' iconClass="fa-solid fa-subtract" action={() => 1}/>
      </section>
    </div>
  )
}

export default DataStructure
