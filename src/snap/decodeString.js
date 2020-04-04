/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var parObj = {};
    var tempStack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '['){
            tempStack.push(i)
        }else if(s[i] === ']'){
            var val = tempStack.pop();
            parObj[i] = val; 
        }
    }
    console.log(parObj);
    function decode(s,start,end){
        var stk = [];
        var str = '';
        var ans = '';
        for(var i = end-1;i>=start;i--){ 
            if(s[i] ===']'){
                if(str.length){
                    stk.push(str);
                }
                str = '';
                var ansTemp = decode(s,parObj[i],i);
                stk.push(ansTemp);
                i = parObj[i];
                console.log('stack',stk);
            }else if(s[i]==='['){
                //console.log('pushed',str);
                stk.push(str);
                str = '';
            }else if(Number.isInteger(parseInt(s[i]))){
                var pre = stk.pop();
                 //console.log('number found',s[i],pre,stk);
                for(let j =0;j<s[i];j++){
                    stk.push(pre);
                }
                console.log('stack',stk);
            }else{
                str=s[i]+str;
                if(i===start){
                    stk.push(str);
                }
                console.log('str',str);
            }
        }
        console.log('now',ans);
        while(stk.length>0){
            var cur = stk.pop();
            ans+=cur;
        }
        console.log('returning',ans);
        return ans;
    }
    return decode(s,0,s.length);
};