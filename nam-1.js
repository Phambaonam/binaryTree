/**
 * Created by doremonsun on 6/2/17.
 */
const arr = [7, 5, 2, 6]
let binary_tree = {
    root_node: null
}
let new_node = {
    value: null
}
let node = {
    value:null
}
function insert_node(binary_tree, new_node) {
    let last_node
    if (!binary_tree.root_node) {
        binary_tree.root_node = arr[0]
        console.log(binary_tree);
    } else {
        node = binary_tree.root_node
        while (node) {
            last_node = node
            if (new_node.value > node.value) {
                node = node.right
            } else if (new_node.value < node.value) {
                node = node.left
            }
        }
        if (new_node.value > last_node.value) {
            last_node.right = new_node
        } else if (new_node.value < last_node.value) {
            last_node.left = new_node
        }
    }
    console.log(node);
}
// new_node.value = arr[1]
// insert_node(binary_tree, new_node)
for (let i = 1; i < arr.length; i++) {
    new_node.value = arr[i]
    insert_node(binary_tree, new_node)
}
// document.write('<pre>' + JSON.stringify(BST, 0, 4) + '</pre>')
