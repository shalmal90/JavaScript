/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
    var getAbb = function(ele1,ele2){
      // console.log(ele1,ele2)
       var len =ele1.length-1;
       var same = '';
       var count = 1;
       var i = 0;
       //{
         while(ele1[i] === ele2[i]){
               same = same + ele1[i];
              i++;
           }
       for(j=i+1;j<len-1;j++){
               count++;
           }
       if(count>1){
               var ans1 = same+ele1[i] + count +  ele1[len];
               var ans2 = same+ele2[i]+ count +  ele2[len];
               obj[ans1] = [ele1];
           obj[ans2] = [ele2];
       }else{
           obj[ele1] = [ele1];
           obj[ele2] = [ele2];

       }
   };
   var obj = {};
   var ansArr = [];
   dict.forEach((ele)=>{
       var count = 0;
       var len =ele.length-1;
       for(i=1;i<len;i++){
           count++;
       }
       if(count>1){
          var ans = ele[0]+count+ele[len]; 
           if(obj.hasOwnProperty(ans)){
               var temp = obj[ans];
               getAbb(temp[0],ele);
               delete obj[ans];
                //obj[ans].push(ele);
           }else{
               obj[ans] = [ele]; 
           }
           
       }else{
           obj[ele] = [ele]
       }
   })
   
   var propValue = Object.keys(obj);
  console.log(propValue);
   return propValue;
};
