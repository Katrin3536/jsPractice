class MyFirstGraph {
  constructor(value){
    this.value = value
    this.neighbours = []
  }

  addNeighbours (node) {
    this.neighbours.push(node)
  }
}

const igor = new MyFirstGraph('i')
const zmiter = new MyFirstGraph('z')

igor.addNeighbours(zmiter)
zmiter.addNeighbours(igor)
console.log(igor)
console.log(zmiter)

MyFirstGraph {
  value: 'i',
    neighbours: [ MyFirstGraph { value: 'z', neighbours: [Array] } ]
}
MyFirstGraph {
  value: 'z',
    neighbours: [ MyFirstGraph { value: 'i', neighbours: [Array] } ]
}