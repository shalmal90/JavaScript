
export default class dynamic{
    constructor(){
       
    }
fibbonachi(val){
        var obj = {};
        function recFib(n){
            if( n === 0 || n === 1){
                return n;
            }
            if(!obj.hasOwnProperty(n)){
                obj[n] =  recFib(n-1) + recFib(n-2);   
            }
            return obj[n]; 
        }  
        recFib(val);
        return obj[val];  
}; 
knapsack(){
        var items = [1,2,3];
        var values = [10,20,30];
        var weights = 5;
        var maxValue = 0;
        var i = 0;
        function recKnap(weight,index,maxV){
            var cWeight = weight - items[index];
           // var maxV = maxV + values[index];
            if(cWeight>=0){
                var maxVal = maxV + values[index];
                if(maxVal > maxValue){
                    maxValue  = maxVal;
                }
                if(index === values.length-1){
                    return;
                }
                recKnap(cWeight,index+1,maxVal);
                recKnap(weight,index+1,maxV);
            }else{
                return;
            }
        }
        recKnap(weights,i,maxValue);
        return maxValue;

};
childSteps(){
        var arr = [1,2,3];
        var num = 5;
        var ans = 0;
        var temp = [];
        for(let i =0;i<arr.length;i++){
            temp[i] = [];
            for(let j = 0;j<num;j++){
                temp[i][j] = 0;
            }
        }
        function recChild(n,total){
            if(n<0){
                return 0;
            }
            if(n == 0){
                ans++;
                return ans;
            }else{
                for(var i =0;i<arr.length;i++){
                   // temp[i] = [];
                   recChild(n-arr[i],total+1,i);
                }
            }
           // return temp[ind][n];
        }
        recChild(num,0);
        console.log(ans);
};
shortestDistance(grid) {
        var points=  [];
        function findDistance(p1,p2){
            var newMap = new Map();
            var distanceIn = 0
            var arr=[];
            arr.push(p1);
            console.log('finding between',p1[0],p1[1] ,'and',p2[0],p2[1]);
            while(arr.length){
                //newMap.get()
                var point = arr.pop();
                if(!newMap.has(point)){
                    
                    var i  =point[0];
                    var j = point[1];
                    if(j>=0 && i>=0 && i<=grid.length -1 && j<=grid[0].length-1 ){
                        
                        if(grid[i][j] === grid[p2[0]][p2[1]]){
                            //newMap.set([i,j-1],[i,j]);
                            break;
                        }else{
                            //distance++;
                            if(i+1 >= 0 && i+1 <= grid.length-1){
                                newMap.set((i+1)+''+j,i+''+j);
                                arr.push([i+1,j])
                            }
                            if(i-1 >= 0 && i-1 <= grid.length-1){
                                newMap.set((i-1)+''+j,i+''+j);
                                arr.push([i-1,j])
                            }
                            if(j+1 >= 0 && j+1 <= grid[0].length-1){
                                newMap.set(i+''+(j+1),i+''+j);
                                arr.push([i,j+1])
                            }if(j-1 >= 0 && j-1 <= grid[0].length-1){
                                newMap.set(i+''+(j-1),i+''+j);
                                arr.push([i,j-1])
                            }
    
                        }
                    }  
                }
            }
            console.log(newMap);
            var obj = {};
            var ans =0;
            //var arr = [];
            var val = p2[0]+''+p2[1];
            var val2 = p1[0]+''+p1[1];
            var len = newMap.size;
            while(len>=0){
                obj[val] = newMap.get(val);
                ans++;
                val = newMap.get(val);
                len--;
                if(val === val2){
                   // ans++;
                    break;
                }
            };
            // while(!obj.get(val)){
            //     obj.set(val, newMap.get(val));
            //     ans++;
            //     val = newMap.get(val);
            // }
            return ans;
            //return distanceIn;
        };
        for(let i =0;i<grid.length;i++){
            for(let j = 0;j<grid[0].length;j++){
                if(grid[i][j]===1){
                    points.push([i,j]);
                }
            }
        }
        //find center point
        var iMid = 0;
        var jMid = 0;
        var len = points.length;
        for(let i=0;i<len;i++){
            iMid += points[i][0];
            jMid += points[i][1];
        }
        iMid = Math.floor(iMid/len);
        jMid = Math.floor(jMid/len);
        var arr = [];
        arr.push([iMid,jMid]);
        var distance = Number.MAX_VALUE;
        while(arr.length){
            var point1 = arr.pop();
            var i =point1[0];
            var j = point1[1];
            if(i>=0 && i<=grid.length-1 && j>=0 && i<=grid.length-1){
                if(grid[i][j] === 0){
                    console.log('checking distance from',i,j);
                    //find distance
                    var val = 0;
                    points.forEach((ele)=>{
                        val += findDistance(ele,point1);
                    });
                    console.log('checked distance from',i,j,'is',val);
                    if(distance>val){
                        distance = val;
                    }
                }else{
                    arr.push([i+1,j],[i-1,j],[i,j+1],[i,j-1]);
                }
            }
        } 
        return distance;
};
canCross(stones){
    var obj = new Map();
    stones.forEach((ele)=>{
        obj.set(ele,[]);
    });
    obj.get(0).push(0); 
    for(let i = 0;i<stones.length;i++){
        var k  = obj.get(stones[i]);
        console.log('steps',k);
        k.forEach((ele)=>{
             for(let step =ele-1;step<=ele+1;step++){
            console.log('steps',ele);
            if(step>0 && obj.has(stones[i]+step)){
                 obj.get(stones[i]+step).push(step);
            }
        }
        })
       
    }
      console.log(obj);
    return (obj.get(stones[stones.length-1]).length);
};
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
minWindow(s, t) {
    if(s.length<t.length){
        return '';
    }
    var obj = {};
    var ans = [];
    var ansStr = '';
    for(var i = 0;i<t.length;i++){
        if(obj.hasOwnProperty(t[i])){
            obj[t[i]]++;
        }else{
             obj[t[i]] = 1;
        }
    };
    var size = Object.keys(obj).length;
    // console.log(obj);
    var l = 0;
    var r = 0;
    var done = 0;
    var str = '';
    var countObj = {};
    while(r<s.length){
        var char = s[r];
        str += char;
        if(countObj.hasOwnProperty(s[r])){
            countObj[s[r]]++;
        }else{
             countObj[s[r]] = 1;
        }
        if(countObj[s[r]] === obj[s[r]]){
            done++;
        }
        if(done === size){
            ans.push(str);
            console.log('pushed');
        }
        
        //shrink from left
        while(done === size && l<r){
            //console.log('done',str);
            var charL = s[l];
            //console.log('char',charL,'index',l);
            var newStr = str.slice(1);
            str = newStr;
            //console.log(str);
            countObj[charL]--;
           //console.log('minus val',countObj);
            if((obj.hasOwnProperty(charL)) && countObj[charL] < obj[charL]){
                done--;
            }
            if(done === size){
                ans.push(newStr);
            }
            l++;
        }
        r++;
    }
    var min = ans[0];
    ans.forEach((ele)=>{
        if(ele.length<min.length){
            min = ele;
        }
    })
    return min?min:ansStr;
};
wordBreak(s, wordDict) {
    var obj = {};
    var visited = [];
    for(var i=0;i<s.length;i++){
        visited[i] = 0;
    }
    wordDict.forEach((ele)=>{
        if(!obj.hasOwnProperty(ele)){
            obj[ele] = ele;
        }
    });
    var bfsQ = [];
    bfsQ.push(0);
    while(bfsQ.length){
        var start = bfsQ.shift();
        if(start === s.length){
            return true;
        }
        var str = '';
        if(visited[start] === 0){
            for(var i =start;i<s.length;i++){
                str += s[i];
                if(obj.hasOwnProperty(str)){
                    bfsQ.push(i+1);
                }
            }
            visited[start] = 1;
        }
    }
    return false;
};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
findMinHeightTrees(n, edges) {
    
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
}


