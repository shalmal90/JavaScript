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
    }
    init(){
        this.addVertex('a');
        this.addVertex('b');
        this.addVertex('c');
        this.addVertex('d');
        this.addVertex('e');
        this.addVertex('f');
        this.addEdge('a','b');
        this.addEdge('a','e');
        this.addEdge('a','f');
        this.addEdge('b','c');
        this.addEdge('c','d');
        this.printGraph();
    };
};