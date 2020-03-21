export default class _graph{
    constructor(){
        this.vertices = [];
        this.adjList = new Map();
        this.addEdge = function(v1,v2){
            var a = this.adjList.get(v1);
            var b = this.adjList.get(v2);
            a.push(v2);
            b.push(v1);
        };
        this.addDirectionalEdge = function(v1,v2){
            var a = this.adjList.get(v1);
            a.push(v2);
        };
        this.addVertex = function(v){
            this.vertices.push(v);
            this.adjList.set(v,[]);
        };
        this.printGraph = function(){
            var keys =this.adjList;
            keys.forEach((val,key)=>{
                console.log(key,'=>',val)
            });
        }  
        this.bfs = (node)=>{
            var len = this.vertices.length;
            var visited = [];
            for(var i = 0;i<len;i++){
                var val = this.vertices[i];
                visited[val]=false;
            }
            var q = [];
            q.push(node);
            while(q.length){
                var cNode = q.shift();
                var current = this.adjList.get(cNode);
                console.log('bfs',cNode);
                visited[cNode] = true;
                current.forEach((ele)=>{
                    if(visited[ele] === false)
                    q.push(ele);
                })
               // console.log(visited);
            }
        }
        this.path = (n1,n2)=>{
            var newMap = new Map();
            var len = this.vertices.length;
            var visited = [];
            for(var i = 0;i<len;i++){
                var val = this.vertices[i];
                visited[val]=false;
            }
            var q = [];
            q.push(n1);
            newMap.set(n1,null);
            while(q.length){
                var cNode = q.shift();
                var current = this.adjList.get(cNode);
               // console.log('path',cNode,current);
                visited[cNode] = true;
                current.forEach((ele)=>{
                    if(!newMap.get(ele)){
                        newMap.set(ele,cNode);
                    }
                    if(ele === n2){
                       // console.log('found',n2,'in',cNode);
                        return;
                    }
                    if(visited[ele] === false)
                    q.push(ele);
                })
                // console.log(visited);
            };

            var obj = {};
            var ans = [];
            //var arr = [];
            var val = n2;
            while(!obj.hasOwnProperty(val)){
                obj[val] = val;
                ans.push(val);
                val = newMap.get(val);
            }
            console.log('path',ans.reverse().join('->'));
        }
        this.dfs = (node)=>{
            var that = this;
            var len = this.vertices.length;
            var visited = [];
            for(var i = 0;i<len;i++){
                var val = this.vertices[i];
                visited[val]=false;
            }
           // var q = [];
            //q.push(node);
            function rec(cNode){
                console.log('dfs',cNode);
                if(cNode && !visited[cNode]){
                    var current = that.adjList.get(cNode);
                    visited[cNode] = true;
                    current.forEach((ele)=>{
                        if(visited[ele] === false)
                        rec(ele)
                    })
                }
            }
            rec(node);
        };
        this.buildPackages = ()=>{
            var that = this;
            var len = this.vertices.length;
            var visited = [];
            for(var i = 0;i<len;i++){
                var val = this.vertices[i];
                visited[val]=false;
            }
            // var q = [];
            //q.push(node);
            var max = 0;
            this.adjList.forEach((key,val)=>{
                rec(val);
            });
            function rec(cNode){
                console.log('dependency',cNode);
                if(cNode && !visited[cNode]){
                    var current = that.adjList.get(cNode);
                    visited[cNode] = true;
                    current.forEach((ele)=>{
                        if(visited[ele] === false)
                        rec(ele)
                    })
                }
            }
           // 
        }
    }
    init(){
        this.addVertex('a');
        this.addVertex('b');
        this.addVertex('c');
        this.addVertex('d');
        this.addVertex('e');
        this.addVertex('f');
        // this.addDirectionalEdge('b','a');
        // this.addDirectionalEdge('c','a');
        // this.addDirectionalEdge('d','b');
        // this.addDirectionalEdge('d','c');
        // this.addDirectionalEdge('e','d');
        // this.printGraph();
        // this.buildPackages();

        this.addEdge('a','b');
        this.addEdge('a','e');
        this.addEdge('a','f');
        this.addEdge('b','c');
        this.addEdge('c','d');
        this.printGraph();
        this.bfs('a');
        this.dfs('a');
        this.path('a','d');
    };
};