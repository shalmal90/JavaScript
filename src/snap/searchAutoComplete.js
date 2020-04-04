/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    var trie = function(){
        this.trie = {
        };
        this.node = function(val){
            this.val = val;
            this.children = new Map();
            this.isWord = false;
            this.freqe = 0;
        };
        this.insert = function(word,freq){
            if(!this.trie.root){
                this.trie.root = new this.node(null);                
            }
            var cNode = this.trie.root;
            for(let i=0;i<word.length;i++){
                if(cNode.children.has(word[i])){
                    
                    cNode = cNode.children.get(word[i]);
                }else{
                    var newNode = new this.node(word[i]);
                    cNode.children.set(word[i],newNode);
                    cNode = newNode;
                }
                if(i === word.length-1){
                    cNode.isWord = true;
                    cNode.freqe = freq;
                }
            }
        }
    };
     this.tr = new trie();
    sentences.forEach((ele,i)=>{
        this.tr.insert(ele,times[i]);
    });
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    var arr=  [];
    var cNode = this.tr.trie.root.children.get(c);
    var rec = function(currentNode,str){
        if(currentNode){
            var newStr = str+currentNode.val;
            if(currentNode.isWord === true){
                arr.push([newStr,currentNode.freqe]);
            }else{
                currentNode.children.forEach((ele)=>{
                    rec(ele,newStr);
                })
            }
        }
    };
    rec(cNode,'');

    //sort and return first 3;
    arr.sort((a,b)=>{
        return a[1]<b[1];
    });
    console.log(arr);
    return arr.slice(0,3);
   
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */