//Note: map or for-each doesn't work with generators

class Comment {
  constructor(content, children) {
    this.content = content
    this.children = children
  }

  *[Symbol.iterator]() {
    yield this.content

    for (let child of this.children) {
      yield ' - '
      yield* child
    }
  }
}

const grandchildren = [
  new Comment('grand good comment', []),
  new Comment('grand bad comment', []),
  new Comment('grand neutral comment', [])
]

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', grandchildren),
  new Comment('neutral comment', [])
]

const tree = new Comment('Great post!', children)

const values = []
for (let value of tree) {
  values.push(value)
}

console.log(values)
