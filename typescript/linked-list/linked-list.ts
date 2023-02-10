type Node<T> = {
  value: T
  prevNode: Node<T> | null
  nextNode: Node<T> | null
} | null

export class LinkedList<T> {
  private firstNode: Node<T> = null
  private lastNode:  Node<T> = null
  private listLength = 0

  public push(element: T): void {
    if (this.lastNode) {
      const newNode: Node<T> = {
        value: element,
        prevNode: this.lastNode,
        nextNode: null
      }
      this.lastNode.nextNode = newNode
      this.lastNode = newNode
    } else {
      const newNode: Node<T> = {
        value: element,
        prevNode: null,
        nextNode: null
      }
      this.firstNode = newNode
      this.lastNode  = newNode
    }
    this.listLength++
  }

  public pop(): T | null {
    if (this.lastNode) {
      const returnedValue = this.lastNode.value
      if (this.lastNode.prevNode) {
        this.lastNode = this.lastNode.prevNode
      } else {
        this.lastNode  = null
        this.firstNode = null
      }
      this.listLength--
      return returnedValue
    } else {
      return null
    }
  }

  public shift(): T | null {
    if (this.firstNode) {
      const returnedValue = this.firstNode.value
      if (this.firstNode.nextNode) {
        this.firstNode = this.firstNode.nextNode
      } else {
        this.lastNode  = null
        this.firstNode = null
      }
      this.listLength--
      return returnedValue
    } else {
      return null
    }
  }

  public unshift(element: T): void {
    if (this.firstNode) {
      const newNode: Node<T> = {
        value: element,
        prevNode: null,
        nextNode: this.firstNode
      }
      this.firstNode.prevNode = newNode
      this.firstNode = newNode
    } else {
      const newNode: Node<T> = {
        value: element,
        prevNode: null,
        nextNode: null
      }
      this.firstNode = newNode
      this.lastNode  = newNode
    }
    this.listLength++
  }

  public delete(element: T): void {
    if (this.firstNode) {
      if (this.firstNode.value === element && this.listLength === 1) {
        this.firstNode = null
        this.lastNode  = null
        this.listLength--
        return
      }
      for (let actualNode = this.firstNode; actualNode.nextNode; actualNode = actualNode.nextNode) {
        if (actualNode.value === element) {
          if (!actualNode.prevNode && !actualNode.nextNode) {
            this.firstNode = null
            this.lastNode  = null
          }
          if (actualNode.prevNode) { actualNode.prevNode.nextNode = actualNode.nextNode }
          if (actualNode.nextNode) { actualNode.nextNode.prevNode = actualNode.prevNode }
          this.listLength--
          break
        }
      }
    }
  }

  public count(): number {
    return this.listLength
  }
}