/**
 * @param {string[]} logs
 * @return {string[]}
 * 937. Reorder Data in Log Files

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 */
var reorderLogFiles = function(logs) {
    var numArr = [];
    var strArr = [];
    logs.forEach((ele)=>{
        var arr = ele.split(' ');
       
        if(Number.isInteger(parseInt(arr[1]))){
            numArr.push(ele);
        }else{
            strArr.push(ele);
        }
    });
    strArr.sort((a,b)=>{
        var aArr = a.split(' ');
        var bArr = b.split(' ');
         //console.log(aArr[1],bArr[1],aArr[1]<bArr[1]);
        if(aArr[1] !== bArr[1]){
            if( aArr[1]>bArr[1])return 1;
            if( aArr[1]<bArr[1])return -1;
        }else if(aArr[2] && bArr[2] && aArr[2] !== bArr[2]){
             if( aArr[2]>bArr[2])return 1;
            if( aArr[2]<bArr[2])return -1;
        }else{
              if( aArr[0]>bArr[0])return 1;
            if( aArr[0]<bArr[0])return -1;
        }    
    });
    console.log(strArr);
    //console.log(newArr);
   var ans = [];
    strArr.forEach((ele)=>{
        ans.push(ele);
    });
     numArr.forEach((ele)=>{
        ans.push(ele);
    })
    console.log(ans);
    return ans;
};