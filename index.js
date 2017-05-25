/**
 * Created by doremonsun on 5/23/17.
 */

class Node {
    constructor(root, parent, nodeLeft, nodeRight) {
        this.root = root
        // this.parent = parent
        this.nodeLeft = nodeLeft
        this.nodeRight = nodeRight
    }

    returnData() {
        let data = []
        data.push({parent: node.root, nodeLeft: node.nodeLeft, nodeRight: node.nodeRight})
        return data
    }
}
const node = new Node() // khoi tao node de them vao cay
const data = [5, -1, -3, 2, 6, 0, 1, 8, 9, 7]
// const data = [ -1, -3, 2, 0, 1 ]
// const data = [2, 0, 1 ]
// const data = [6, 8, 9, 7]
// const data =  [ 8, 9, 7 ]
// khoi tao cay
class createTree {
    constructor(param) {
        this.param = param
        this.count = 0
    }

    // ham them phan tu x vao cay nhi phan
    /* Khi cây rỗng, nếu thêm phần tử đầu tiên thì đó là nút gốc*/
    addNodeTree(x, data) {
        // nếu cây rỗng
        if (this.param === null) {
            node.root = x // them du lieu x vao root
            node.nodeLeft = []
            node.nodeRight = []
            this.param = x // x chinh la node goc
            this.count++
            this.addNodeTree(data[this.count], data)
        } else { // cây tồn tại phần tử
            if (x < node.root) {
                // ToDo: Xác định được nút cha
                node.nodeLeft.push(x)
                this.count++
                this.addNodeTree(data[this.count], data) // duyệt qua trái để thêm phần tử x
            }
            else if (x > node.root) {// nếu phần tử thêm vào mà lớn hơn node gốc ==> thêm nó vào bên phải
                node.nodeRight.push(x)
                this.count++
                this.addNodeTree(data[this.count], data) // duyệt qua phải để thêm phần tử x
            }
        }

    }

}

let tree = new createTree(null)
tree.addNodeTree(data[0], data)
console.log(node.returnData());