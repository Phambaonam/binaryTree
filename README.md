# Dùng thuật toán binary tree, D3Js để tao ra cây nhị phân
   ![tree](./images/tree.png)
##  Cách tiếp cận bài toán:
0. Cho 1 mảng số ngẫu nhiên, các số trong mảng phải khác nhau, cho chạy từng phần tử một.
1. Kiểm tra cây có node gốc (root) chưa? Chưa có thì cho phần tử thứ nhất làm node gốc.
2. Khi đã có node gốc, bây giờ sẽ phân ra các node gốc trái; node cha trái, node gốc phải; node cha phải.
3. Quy tắc: phần tử nào nhỏ hơn node gốc(node cha) thì cho sang bên trái, lớn hơn thì cho sang bên phải.
4. Phần tử nào nhỏ hơn node gốc thì cho sang làm node gốc trái. Tại node gốc trái, kiểm tra đã tồn tại node gốc trái hay chưa? Chưa có thì tạo ra nút gốc trái.
5. Phần tử nào lớn hơn node gốc thì cho sang làm node gốc phải. Tại node gốc phải, kiểm tra đã tồn tại node gốc phải hay chưa? Chưa có thì tạo ra nút gốc phải.
6. Các phần tử tiếp theo cũng được so sánh với node gốc, node cha để tìm ra vị trí bên trái hay bên phải.

## Cài đặt bằng code:
* Tạo ra 1 class chứa thông tin của node
```javascript
    class BinarySearchTree {
        constructor() { // khởi tạo với node gốc rỗng
            this.root = null;
        }

        insertNode(val) { // thêm các node mới
            // code here
        };
    }
```

* Tạo ra 1 biến node để lưu giá trị truyền vào
```javascript
    let node = {
       data: val
    };
```
* Kiểm tra xem đã có node gốc hay chưa?
```javascript
    if (!this.root) {
       this.root = node;
    }
```
* Tìm ra node gốc trái, node gốc phải
```javascript
    if (val < root.data) {
        if (!root.left) {
            root.left = node;
        } else {
            newNode = currentNode.left;
        }
    } else if (val > root.data) {
        if (!root.right) {
            root.right = node;
        } else {
            newNode = currentNode.right;
        }
    }
```
*
