var tree = (function(){
    var tree = {};
    var node = function(val){
        this.val = val;
        this.left = null;
        this.right = null;
    };
    var insertNode = function(valu){
        var newNode = new node(valu);
        if(tree.root){
            var currentNode = tree.root;
            //insert(currentNode);
            while(currentNode){
                if(valu <= currentNode.val){
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                }else if(valu > currentNode.val){
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }else{
            tree.root = newNode;
        }
        print();
        return tree;
    };
    var findNode = function(valu){
        var currentNode = tree.root;
        var dNode = null;
        function inorder(currentNode){
            if(currentNode === null)return null;
            if(valu === currentNode.val){
                return currentNode;
            }
            if(valu < currentNode.val){
                if(currentNode.left === null){
                   return null;
                }
                currentNode = currentNode.left;
            }else if(valu > currentNode.val){
                if(currentNode.right === null){
                    return null;
                }
                currentNode = currentNode.right;
            }
            return inorder(currentNode);
        };
        dNode = inorder(currentNode);
        console.log(dNode);
        return dNode;
    };
    var deleteNode = function(valu){
        var dNode = findNode(valu);
        if(dNode === null){
            console.log('Node not found');
            return tree;
        }else{
            if(dNode.left === null){
                set(dNode.right);
            }else if(dNode.right === null){
                set(dNode.left);
            }else{
                //find smallest to the right subtree;
                var cNode = dNode.right;
                var pNode = cNode;
                while(cNode.left){
                    if(cNode.left){
                        pNode = cNode;
                    }
                    cNode = cNode.left;
                }
                dNode.val = cNode.val;
                pNode.left = cNode.right;
            }
            function set(newNode){
                dNode.val = newNode.val;
                newNode.val = null;
            }
        }
        print();
        return tree;
    };
    var print = function(){
        var arr = [];
        var node = tree.root;
        function inorder(cNode){
            if(cNode){
                inorder(cNode.left);
                arr.push(cNode.val);
                inorder(cNode.right);
            }      
        }
        inorder(node);
        console.log(arr);
    };
    var start = function(){
        insertNode(10);
        insertNode(6);
        insertNode(8);
        insertNode(7);
        insertNode(9);
        insertNode(5);
        insertNode(14);
        insertNode(13);
        insertNode(18);
        insertNode(16);
        insertNode(17);
        deleteNode(14);
        deleteNode(6);
        print();
        //deleteNode(723);
    };
    return{
        start:start
    }
})();
module.exports = tree;