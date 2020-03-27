var str = (function(){

    var stringDeleteion = function(s,arr){
        let obj = {};
        let max = 0;
        arr.forEach(element => {
            obj[element] = element;
        });
        var st = s[0];
        for(var i = 1;i<s.length;i++){
            while(obj.hasOwnProperty(st)){
                var j = st.length; 
                max = Math.max(j,max);
                st += s[i]; 
            }
        }
        return s.length - max;
    };
    var strCommon = (s1,s2)=>{
        let obj = {};
        var ans = '';
        for(let i=0;i<s1.length;i++){
            let st = s1[i];
            if(!obj.hasOwnProperty(st)){
                obj[st] = st;
            }
           for(j=i+1;j<s1.length;j++){
                st += s1[j];
                if(!obj.hasOwnProperty(st)){
                    obj[st] = st;
                }
           }
        }
        for(let i = 0;i<s2.length;i++){
            let st = s2[i];
            var j = i;
            var tempAns = '';
            while(obj.hasOwnProperty(st)){
                tempAns = st;
                if(tempAns.length > ans.length){
                    ans = tempAns;
                }
                j++;
                st += s2[j];
            }
        }
        console.log(ans);
    };
    var compress = (str)=>{
        if(str.length===1){
            return str;
        }
        var i = 1;
        var prev = str[0];
        var count = 1;
        var ans = '';
        while(i<=str.length){
            if(prev === str[i]){
                count++;
            }
            else{
                ans+= prev+count;
                count = 1;
            }
            prev = str[i];
            i++;
        }
        return ans;
    };
    var allPerms = (str)=>{
        var obj = [];
        var suffix = str;
        var prefix = '';
        var recPerm = function(p,s){
            if(s.length === 0){
                obj.push(p);
            }else{
                for(var i = 0; i<s.length;i++){
                    recPerm(p+s[i],s.substring(0,i)+s.substring(i+1))
                }
            }   
        }
        recPerm(prefix,suffix);
        console.log('perm',obj);

    }
    var isMatch = function(s, p) {
        var cache = [];
        var isStar = false;
        for(let i=0;i<s.length;i++){
            cache[i] = [];
            for(let j=0;j<p.length;j++){
                if(s[i]===p[j]){
                    cache[i][j] = true;
                }else if(p[j] === '?' || p[j] === '*'){
                    if(p[j] === '*'){
                        isStar = true;
                    }
                    cache[i][j] = true;
                }else{
                    cache[i][j] = false;
                }
                
            }
        }
        console.log(cache);
        var ind = 0;
        var jind = 0;
        if(cache[s.length-1][p.length-1]!== true){
            return false;
        }else if(!isStar && s.length !== p.length){
            return false;
        }else{
            function recCheck(i,j){
                if(i>s.length-1){
                    return false;
                }
                if(j>p.length-1){
                    return false;
                }
                if(i===s.length-1 && j === p.length-1 && cache[i][j] === true){
                    return true;
                }
                 if(i===s.length-1 && j === p.length-1 && cache[i][j] === false){
                    return false;
                }
                if(p[j] === '*'){
                    var val  = recCheck(i+1,j) || recCheck(i+1,j+1) || recCheck(i,j+1);
                    return val;
                }else if(cache[i][j] === true){ 
                     return recCheck(i+1,j+1);
                }else if(cache[i][j] !== true){
                    return false;
                }
            }
            return recCheck(ind,jind);
        } 
    };
    var init = ()=>{
        var s = 'abc';
        var arr = ['a','aa','aaa','ab'];
        stringDeleteion(s,arr);
        var str1 = 'abab';
        var str2 = 'baba';
        strCommon(str1,str2);
        console.log(compress('aaabbcccb'));
        allPerms('abc');
        console.log('match is',isMatch('aa','*'));
    };
    return{
        init:init
    }
})();
module.exports = str;