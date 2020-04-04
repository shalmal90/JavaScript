/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    
    //convert to graph
    var graph = function(){
        this.vertices = new Map();
        this.node = function(val){
            this.adj = new Map();
            this.val = val;
            this.height = Number.max_safe_intiger;
        }
    }
    
    graph.prototype.addVertices = function(n1,n2){
       // console.log(n1,n2);
        var node1,node2;
        if(!this.vertices.has(n1)){
             node1 = new this.node(n1);
            this.vertices.set(n1,node1);
        }else{
            node1 = this.vertices.get(n1);
        };
        if(!this.vertices.has(n2)){
            node2 = new this.node(n2);
            this.vertices.set(n2,node2);
        }else{
            node2 = this.vertices.get(n2); 
        }
        node1.adj.set(n2,node2);
        node2.adj.set(n1,node1);
    }
    var gr = new graph();
    edges.forEach((ele)=>{
        //console.log(ele);
        gr.addVertices(ele[0],ele[1]);
    });
   
    var height = [];
   // console.log(gr.vertices.get(1).adj);
    // gr.vertices.forEach((key)=>{
    //     visitedObj[key.val] = false;
    // });
    
    //gr.vertices
    function dfs(node,visited,ht,maxH){
         var hh;
        //console.log('internal dfs for:',node.val,ht);
        if(!visited.hasOwnProperty(node.val)){
            visited[node.val] = true;
            node.adj.forEach((ele)=>{
                 hh = dfs(ele,visited,ht+1,maxH);
                if(hh>maxH){
                    maxH=hh;
                };
              //  console.log('hhis:',node.val,maxH);
               // return hh;
            })
        }else{
            // console.log(ht);
            if(ht>maxH){
                    maxH=ht;
                }
            return ht;
        }
        return maxH;
        
    };
    
     gr.vertices.forEach((key)=>{
          var visitedObj = {};
        // console.log('---------------------dfs for:',key.val);
        // console.log(visitedObj);
        //  gr.vertices.forEach((key)=>{
        //     visitedObj[key.val] = false;
        // });
         //console.log('list',gr.vertices.get(key.val).adj);
        var hit =  dfs(key,visitedObj,0,0);
         console.log('dfs got:',hit);
         height.push([key.val,hit])
    });
    console.log(height);
    
};