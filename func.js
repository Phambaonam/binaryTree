const arr = [7, 5, 2, 6, 8, 0, 9, 7.5]
class Node {
    constructor(value) {
        this.value = value;
        //  this.left = null;
        //  this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

//TODO: Chuyển code sang kiểu đệ quy
    insert(value) {
        let node = this
        let side = 'root'
//            console.log('node[side]', this.root);
        while (node[side]) {// nếu tồn tại node mới chạy vào trong
            /*
             * Nó kiểm tra có node nào hay chưa?, chưa có thì tạo ra node.
             * Khi có rồi thì chạy vào while, do node[side] lúc trước đã gán với class Node,sau đó sẽ so sánh value hiện tại với value của node trước đó.
             * Nếu không bằng sẽ xuống điều kiện tiếp, nếu nhỏ hơn thì gán sang bên trái,nếu lớn hơn thì gán sang phải.
             * Do đã tồn tại node lên vẫn chưa có điều kiện dừng, phải thêm 1 điều kiện để thoát khỏi vòng lặp
             * Tiếp đó lại khởi tạo 1 node mới
             * */
            node = node[side];
            // điều kiện thoat khỏi vòng lặp
            if (value === node.value) {
                return;
            }
//                side = value < node.value ? 'left' : 'right';
            if (value < node.value) {
                side = 'left'
            } else {
                side = 'right'
            }
        }
        // khởi tạo 1 node mới
        node[side] = new Node(value);
    }
}

let tree = new BinarySearchTree()
for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i])
//        tree.insert(Math.floor(Math.random() * 20));
}
document.write('<pre>' + JSON.stringify(tree, 0, 4) + '</pre>');