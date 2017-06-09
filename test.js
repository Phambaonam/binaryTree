class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(val) {
        let node = {
            name: val,
            parent: null,
            children: []
        };
        let currentNode;
        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (val < currentNode.name) {
                    if (!currentNode.left) {
                        currentNode.left = node
                        node.parent = currentNode.name
                        currentNode.children.push(node)
                        break;
                    } else {
                        currentNode = currentNode.left;
                        console.log(123);
                    }
                } else if (val > currentNode.name) {
                    if (!currentNode.right) {
                        currentNode.right = node
                        node.parent = currentNode.name
                        currentNode.children.push(node)
                        break;
                    } else {
                        currentNode = currentNode.right;
                        console.log(456);
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    };
}
const BST = new BinarySearchTree();
const arr = [7, 5, 2, 6]
for (let i = 0; i < arr.length; i++) {
    BST.insertNode(arr[i])
}
document.write('<pre>' + JSON.stringify(BST, 0, 4) + '</pre>')
