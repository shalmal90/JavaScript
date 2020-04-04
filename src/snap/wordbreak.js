var wordBreak = function(s, wordDict) {
    var obj = {};
    var visited = [];
    for(var i=0;i<s.length;i++){
        visited[i] = false;
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
        if(visited[start] === false){
            for(var i =start;i<s.length;i++){
                str += s[i];
                if(obj.hasOwnProperty(str)){
                    bfsQ.push(i+1);
                }
            }
            visited[start] = true;
        }
    }
    return false;
};