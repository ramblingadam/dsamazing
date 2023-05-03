type DSNodeOrNull = DSNode | null

class DSNode {
  value: any
  prev: DSNodeOrNull
  next: DSNodeOrNull

  constructor(value: any) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LL {
  value: any
  head: DSNodeOrNull
  tail: DSNodeOrNull
  size: number

  constructor(value:any) {
    this.head = value ? new DSNode(value) : null
    this.tail = value ? this.head : null
    this.size = value ? 1 : 0
  }
}


let node = new DSNode('potato')

module.exports = {LL, DSNode}

console.log(node)





// module.exports = (LL, DSNode)