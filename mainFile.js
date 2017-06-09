/**
 * Created by doremonsun on 6/1/17.
 */
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
                    }
                } else if (val > currentNode.name) {
                    if (!currentNode.right) {
                        currentNode.right = node
                        node.parent = currentNode.name
                        currentNode.children.push(node)
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    };
}
class Visualization {
    draw(BST) {
        let treeData = [
            BST['root']
        ];
        // ************** Generate the tree diagram	 *****************
        let margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = 960 - margin.right - margin.left,
            height = 500 - margin.top - margin.bottom;

        let i = 0,
            duration = 3000,
            root;

        let tree = d3.layout.tree()
            .size([height, width]);

        let diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

        let svg = d3.select("body").append("svg")
            .attr("width", $('body').width() - 250)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        root = treeData[0];
        root.x0 = height / 2;
        root.y0 = 0;

        update(root);

        d3.select(self.frameElement).style("height", "500px");

        function update(source) {

            // Compute the new tree layout.
            let nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);
            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * 180;
            });

            // Update the nodes…
            let node = svg.selectAll("g.node")
                .data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new nodes at the parent's previous position.
            let nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeEnter.append("text")
                .attr("x", function (d) {
                    return d.children || d._children ? -3 : 3;
                })
                .attr("dy", "-1em")
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position.
            let nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            nodeUpdate.select("circle")
                .attr("r", 10)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            let nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            let link = svg.selectAll("path.link")
                .data(links, function (d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    let o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    let o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }
    }
}
class App {
    constructor() {
        this.BST = new BinarySearchTree();
        this.drawing = new Visualization()
    }

    inputValue() {
        $('#values').text('')
        if (!$('#inputValue').val()) {
            alert('Input invalid')
        } else {
            const arr = JSON.parse("[" + $('#inputValue').val() + "]")
            $('#arr span').text(arr);
            for (let i = 0; i < arr.length; i++) {
                this.BST.insertNode(arr[i])
            }
            this.drawing.draw(this.BST)
        }
    }

    random() {
        $('#values').text('')
        let arr = []
        while (arr.length < 8) {
            let randomNumber = Math.ceil(Math.random() * 50)
            if (arr.indexOf(randomNumber) > -1) continue;
            arr[arr.length] = randomNumber;
        }
        $('#arr span').text(arr);
        for (let i = 0; i < arr.length; i++) {
            this.BST.insertNode(arr[i])
        }
        this.drawing.draw(this.BST)
    }

    runDemo() {
        $('#values').text('')
        const arr = [7, 5, 2, 6, 8, 9, 4, 3, 1, 0]
        $('#arr span').text(arr);
        for (let i = 0; i < arr.length; i++) {

            this.BST.insertNode(arr[i])
        }
        this.drawing.draw(this.BST)
    }
}
const app = new App()
inputValue = () => {
    app.inputValue()
}
random = () => {
    app.random()
}
runDemo = () => {
    app.runDemo()
    console.log(app.BST);
}
// Read link
// https://stackoverflow.com/questions/11207432/jquery-remove-text-from-span
// https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100