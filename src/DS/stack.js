var stack = (function(){
    var reverse = function(stk){
        var rec = function(st){
            let val = st.shift();
            console.log('hold',val);
            if(st.length>0){
                rec(st);
            }
            console.log('call',val);
            rec2(val);
        }
        var rec2 = function(val1){
            if(stk.length === 0){
                console.log('pushed',val1);
                stk.unshift(val1)
                return;
            }
            var temp  = stk.shift()
            console.log('tempted',temp);
            rec2(val1);
            console.log('pushed',temp);
            stk.unshift(temp);

        }
        rec(stk);
        console.log(stk);
    }
    var sort = function(stack){
        var stack2 = [];
        stack2.push(stack.pop());
        while(stack.length){
            var cVal = stack.pop();
            while(stack2.length && cVal > stack2[stack2.length-1]){
                stack.push(stack2.pop());
            }
            stack2.push(cVal);
        }
        return stack2;
    }
    var init =function(){
        reverse([1,2,3,4]);
        console.log('sorted',sort([1,3,2,4]));
    }
    return{
        init:init
    }
})();
module.exports = stack;