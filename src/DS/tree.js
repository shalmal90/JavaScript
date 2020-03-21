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
       // print();
        return tree;
    };
    var getHeight = function(){
        var currentNode = tree.root;
        var arr = [[currentNode,0]]; 
        var height = 0;
        while(arr.length){
            var arrNode= arr.shift();
            cNode = arrNode[0];
            var cHeight = arrNode[1]+1;
            //console.log('LEVEL',cNode.val,'height',cHeight);
            if(cNode.left !==null){
                arr.push([cNode.left,cHeight])
            }
            if(cNode.right !== null){
                arr.push([cNode.right,cHeight]);
            } 
            height = cHeight;
        }
        console.log('tree: Height=',cHeight);
        return height;
    };
    var levelOrder = function(){
        var currentNode = tree.root;
        var arr = [currentNode]; 
        while(arr.length){
            var cNode= arr.shift();
            //console.log('LEVEL',cNode.val);
            if(cNode.left !==null){
                arr.push(cNode.left)
            }
            if(cNode.right !== null){
                arr.push(cNode.right);
            } 
        }
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
        console.log('tree:',dNode);
        return dNode;
    };
    var findPath = function(v1,v2){
        var newMap = new Map();
        newMap.set(tree.root.val,tree.root);
        var arr1=[];
        var arr2=[];
        var ans = tree.root.val;
        //arr1.push(tree.root.val);
       // arr2.push(tree.root.val);
        function find(node,val,arr){
            if(node === null)return false;
            if(node.val === val){
                newMap.set(node.val,node);
                arr.push(node)
                return true;
            }else{
                var left = find(node.left,val,arr);
                var right = find(node.right,val,arr);
                if(left || right){
                    if(newMap.has(node.val)){
                        console.log('found lca',node.val);
                    }
                    newMap.set(node.val,node);
                    arr.push(node);
                    return true;
                }
                return false;
            }
        }
        find(tree.root,v1,arr1);
        find(tree.root,v2,arr2);
        console.log('stack',arr1,arr2);
        if(arr1.length === 0 || arr2.length === 0){
            console.log('Node not found');
        }else{

        }
       return ans;
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
        //console.log(tree);
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
        console.log('tree:',arr);
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
        //deleteNode(14);
        //deleteNode(6);
        print();
        levelOrder();
        getHeight();
        findPath(7,9);
        //deleteNode(723);
    };
    return{
        start:start
    }
})();
module.exports = tree;