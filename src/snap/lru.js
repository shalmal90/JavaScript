/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.node = function(key,val){
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    };
    this.cache = new Map();
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //console.log('getting key',key,'from',this.head.key,this.tail.key);
        if(!this.cache.has(key)){
            return -1;
        }else if(key === this.head.key){
            console.log('head found')
            return this.head.val;
        }else{
            var val = this.cache.get(key);
            if(this.tail.key === key){
                var tNode = this.cache.get(key);
                tNode.prev.next = null;
                this.tail = tNode.prev;
                var hNode = this.cache.get(this.head.key);
                hNode.prev = tNode;
                tNode.next = hNode;
                this.head = tNode;
            }else{
                var hNode = this.cache.get(this.head.key);
                var cNode = this.cache.get(key);
                cNode.prev.next = cNode.next;
                cNode.next.prev = cNode.prev;
                hNode.prev = cNode;
                cNode.next = hNode;
                this.head = cNode;
            }
            //console.log('returning',val.val,val.key);
            return val.val;
        }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
   //console.log('size',this.size,'cap',this.capacity);
        if(this.cache.has(key)){
            //console.log('has found',value);
             var cNode = this.cache.get(key);
            //console.log('tail found',this.cache.get('tail'));
            if(cNode.key == this.head.key){
                cNode.val = value;
                return;
            }else if(cNode.key == this.tail.key){
                //console.log('tail found');
                var tNode = this.cache.get(this.tail.key);
                tNode.prev.next = null;
                this.tail = tNode.prev;
                this.cache.delete(tNode.key);
                this.size--;
            }else{
                cNode.prev.next = cNode.next;
                cNode.next.prev = cNode.prev;
                this.cache.delete(cNode.key);
                this.size--;
            }
        }
        if(this.size>=this.capacity){
                var tNode = this.cache.get(this.tail.key);
                if(tNode.prev){
                     tNode.prev.next = null;
                    this.tail = tNode.prev;
                }else{
                    this.head = null;
                    this.tail = null;
                }
                this.cache.delete(tNode.key);
               // console.log('deleted',tNode);
                this.size--;
        }
        var newNode = new this.node(key,value);
        if(this.head == null && this.tail == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            var hNode = this.head;
            newNode.next = hNode;
         //var headNode = this.cache.get('Head');
            //newNode.next = headNode;
            hNode.prev = newNode;
            this.head = newNode;
        }
        
        this.cache.set(key,newNode);
        this.size++;
      
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */