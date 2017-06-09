/**
 * Created by doremonsun on 5/25/17.
 */
const data = [7, 5, 2, 6, 8, 0]
let currentNode
let parentNode
class Node {
    constructor() {
        this.root = null
        this.count = 0
    }

    add(value) { // 3 2 1
        let node = {
            // parent: null,
            value: value,
            left: null,
            right: null
        }
        if (this.root === null) {
            this.root = node
            console.log('value of root = ', value);
            this.count++
            this.add(data[this.count])
            /* Nếu có node gốc rồi thì chia sang node trái hay node phải */
        } else {
            currentNode = this.root
            /* giá trị nhỏ hơn node gốc --> cho sang node gốc trái  */
            if (value < currentNode.value) {

                /* Kiểm tra node gốc trái tồn tại hay chưa?*/
                if (this.root.left === null) {
                    //code here
                    // console.log('value of root left =', value);
                    currentNode.left = node
                    this.count++
                    this.add(data[this.count])
                }
                /* So sánh với node gốc trái, tìm ra nút cha*/
                if (value < this.root.left.value && value === data[this.count]) {

                    parentNode = currentNode.left
                    //todo: Bước này tìm ra đúng node cha để so sánh
                }
                // console.log('value of parent =', parentNode);
                /* Đã có node gốc trái. Nếu value nhập vào nhỏ hơn node cha trái --> cho sang node trái */
                if (value < parentNode.value && value === data[this.count]) {
                    console.log('value = ', value);
                    console.log('value of parent =', parentNode.value);
                    // console.log('value left', value);
                    // ToDo: Dùng đệ quy để kiểm tra lại
                    this.count++
                    this.add(data[this.count])
                }
                /* Đã có node gốc trái. Nếu value nhập vào lớn hơn node cha trái --> cho sang node phải */
                else if (value > parentNode.value && value === data[this.count]) {
                    // console.log('value of parent =', parentNode.value);
                    // console.log('value right', value);
                    // // ToDo: Dùng đệ quy để kiểm tra lại
                    this.count++
                    this.add(data[this.count])
                }
                /* giá trị lớn hơn node gốc --> cho sang node gốc phải  */
            } else if (value > currentNode.value) {
                /* Kiểm tra node gốc phải tồn tại hay chưa?*/
                if (this.root.right === null) {
                    //code here
                    // console.log('value of root right', value);
                    // currentNode.right = node
                    this.count++
                    this.add(data[this.count])
                }
                /* So sánh với node gốc phải, tìm ra nút cha*/
                else if (value < currentNode.value) {
                    //todo: Bước này tìm ra đúng node trái cha để so sánh
                }
                /* Đã có node gốc phải. Nếu value nhập vào nhỏ hơn node cha phải --> cho sang node trái */
                else if (value < parentNode.value) {
                    // ToDo: Dùng đệ quy để kiểm tra lại
                    this.add()
                }
                /* Đã có node gốc phải. Nếu value nhập vào lớn hơn node cha phải --> cho sang node phải */
                else if (value > parentNode.value) {
                    // ToDo: Dùng đệ quy để kiểm tra lại
                    this.add()
                }
            }
        }
    }
}
const node = new Node()
// for (let i = 0; i < data.length; i++) {
node.add(data[0])
// }