/**
 * Created by doremonsun on 5/24/17.
 */

class Node {
    constructor() {
        this._root = null;
    }

    add(value) {
        let data = []
        let node = {
            value: value,
            left: null,
            right: null
        }
        let current         //used to traverse the structure
        if (this._root === null) {
            this._root = node;
        } else {
            current = this._root;
            // console.log('root', this._root);
            while (true) {
                //if the new value is less than this node's value, go left
                if (value < current.value) {
                    //if there's no left, then the new node belongs there
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        console.log('value', value);
                        current = current.left;
                        console.log('current', current);
                    }
                    //if the new value is greater than this node's value, go right
                } else if (value > current.value) {
                    //if there's no right, then the new node belongs there
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                    //if the new value is equal to the current one, just ignore
                } else {
                    break;
                }
            }
        }
        // data.push(current)
        // console.log(data);
    }
}
let node = new Node()
// const data = [5, -1, -3, 2, 6, 0, 1, 8, 9, 7]
const data = [5, -1, -3, -4]
for (let i = 0; i < data.length; i++) {
    node.add(data[i])
}