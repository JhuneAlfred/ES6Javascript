class Comment {
    constructor(content, children) {
        this.content = content
        this.children = children
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('neutral comment', [])   
]

const tree = new Comment('Great post!', children)

console.log(tree)