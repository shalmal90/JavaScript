var linkedList = (function(){
    var sList ={};
    var dList = {};
    var node = function(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    };
    var linkedListCycle = function(sList){
        var slowNode = sList.head.next;
        var fastNode = slowNode.next;
        while(fastNode){
            if(slowNode === fastNode){
                return true;
            }
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        }
        return false;
    }
    var cloneList = function(sList){
        let map = new Map();
        let currentNode = sList.head;
        let newHead = new node(currentNode.val);
        let newList = {};
        newList.head = newHead;
        let newListNode = newList.head;
        while(currentNode.next){
            let cNode = map.get(currentNode.next.val);
            if(cNode){
                newListNode.next = cNode;
            }else{
               let newNode = new node(currentNode.next.val);
               map.set(newNode.val,newNode);
               newListNode.next = newNode;
            }
            currentNode = currentNode.next;
            newListNode = newListNode.next;
        } 
        console.log(newList === sList);
        return newList;
    }
    var deleteItem = function(val){
        var currentNode = sList.head;
        var tempNode;
        if(sList.head.val === val){
            sList.head = sList.head.next;
        }else{
            while(currentNode){
                if(currentNode.next.val === val){
                    tempNode = currentNode.next;
                    currentNode.next = tempNode.next;
                    break;
                }
                currentNode = currentNode.next;
            } 
        }
        console.log(sList);
        return sList;
    };
    var addItem = function(val){
        var newNode = new node(val);
        if(sList.head){
            var currentNode = sList.head;
            while(currentNode){
                if(currentNode.next === null){
                    currentNode.next = newNode;
                    break;
                }else{
                    currentNode = currentNode.next;
                }
            }
        }else{
            sList.head = newNode;
        }
        console.log(sList);
        return sList;
    };
    var start = function(){
        addItem(12);
        addItem(13);
        addItem(14);
        addItem(15);
        addItem(16);
        deleteItem(12);
        console.log(linkedListCycle(sList));
        console.log(cloneList(sList));
    };
    return {
        addItem:addItem,
        start:start
    }
})();
module.exports = linkedList;