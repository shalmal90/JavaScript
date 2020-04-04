/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    var points=  [];
       function findDistance(p1,p2){
           var newMap = new Map();
           var distanceIn = 0
           var arr=[];
           arr.push(p1);
          // console.log('finding between',p1[0],p1[1] ,'and',p2[0],p2[1]);
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
         //  console.log(newMap);
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
       //get points
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
       //start from center point and find pt with 0,0 with min distance.
       arr.push([iMid,jMid]);
   console.log(arr);
       var distance = Number.MAX_VALUE;
       while(arr.length){
           var point1 = arr.pop();
           var i =point1[0];
           var j = point1[1];
           if(i>=0 && i<=grid.length-1 && j>=0 && i<=grid.length-1){
               if(grid[i][j] === 0){
                  // console.log('checking distance from',i,j);
                   //find distance
                   var val = 0;
                   points.forEach((ele)=>{
                       val += findDistance(ele,point1);
                   });
                  // console.log('checked distance from',i,j,'is',val);
                   if(distance>val){
                       distance = val;
                   }
               }else{
                   arr.push([i+1,j],[i-1,j],[i,j+1],[i,j-1]);
               }
           }
       } 
       return distance;
   }