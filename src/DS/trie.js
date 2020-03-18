var trie = (function(){
    var trie = {};
    var node = function(val){
        this.val = val;
        this.children = {};
        this.isWord = false;
    }
    var init = function(){
        trie.root = new node(null);
        insertWrd('test');
        insertWrd('temp');
        getWords('t');
    }
    var getWords = function(val){
        var cNode = trie.root.children[val];
        var str = '';
        var arr = [];
        function rec(currentNode,str){
            if(currentNode !== null){
                str+=currentNode.val;
                if(currentNode.isWord){
                    arr.push(str);
                }
                if(currentNode.children){
                    for(var key in currentNode.children){
                        console.log('char:',key);
                        rec(currentNode.children[key],str);
                    }
                }
            }
        } 
        rec(cNode,str);
        print(arr);
    }
    var insertWrd =(val)=>{
        var cNode = trie.root;
        var word = val;
        for(var i=0;i<word.length;i++){
            if(cNode.children && cNode.children[word[i]]){
                cNode = cNode.children[word[i]];
            }else{
                var newNode = new node(word[i]);
                cNode.children[word[i]] = newNode;
                cNode = newNode;
            }
            if(i === word.length-1){
                cNode.isWord = true;
            }
        }
        print(trie.root);
    }
    var print = function(val){
        console.log('Trie:',val);
    }
    return{
        init:init
    }
})();

module.exports = trie;