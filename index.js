/**
 * Created by doremonsun on 5/23/17.
 */
class Node {
    constructor(root, parent, nodeLeft, nodeRight) {
        this.root = root
        this.parent = parent
        this.nodeLeft = nodeLeft
        this.nodeRight = nodeRight
    }

    returnData() {
        let data = []
        data.push(this.root, this.nodeLeft, this.nodeRight)
        console.log(data);
    }
}
const node = new Node() // khoi tao node de them vao cay
let arr = [5, 1, 2, -2,]
// khoi tao cay
class khoiTaoCay {
    constructor(param) {
        this.param = param
        this.count = 0
    }

    // ham them phan tu x vao cay nhi phan
    /* Khi cây rỗng, nếu thêm phần tử đầu tiên thì đó là nút gốc*/
    themNodeVaoCay(x) {
        // nếu cây rỗng
        if (this.param === null) {
            node.root = x // them du lieu x vao root
            node.nodeLeft = []
            node.nodeRight = []
            this.param = x // x chinh la node goc
            this.count++
            this.themNodeVaoCay(arr[this.count])
        } else { // cây tồn tại phần tử
            // nếu phần tử thêm vào mà nhỏ hơn node gốc ==> thêm nó vào bên trái
            node.parent = arr[this.count -1]
            if (x < node.root) {
                if (x < node.parent) {
                    node.nodeLeft.push(x)
                } else if (x > node.parent) {
                    node.nodeRight.push(x)
                }
                this.count++
                this.themNodeVaoCay(arr[this.count]) // duyệt qua trái để thêm phần tử x
            }
            // else if (x > node.root && x > node.parent) {  // nếu phần tử thêm vào mà lớn hơn node gốc ==> thêm nó vào bên phải
            //     if(){
            //
            //     }
            //     node.nodeRight.push(x)
            //     console.log('nodeRight', node.nodeRight);
            //     count++
            //     this.themNodeVaoCay(arr[count]) // duyệt qua phải để thêm phần tử x
            // }
        }
    }

}

let tree = new khoiTaoCay(null)
tree.themNodeVaoCay(arr[0])
node.returnData()