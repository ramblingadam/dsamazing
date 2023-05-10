//// --- TYPES ---
interface LLNodeArrValue {
  value: string | number
  // next: string
  order: number
}

//// --- DATA STRUCTURE ----
//// Node
class LLNode {
  value: number
  next: LLNode | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}
//// Structure
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
        next: current.next ? current.next.value : 'null',
      }
      result.push(newLLNodeArrValue)
      current = current.next
    }
    return result
  }
}

//// --- ACTIONS ---

export default { structure: LL, node: LLNode }
