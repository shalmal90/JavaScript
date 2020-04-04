var trap = function(height) {
    var leftH = [];
    var rightH = [];
    leftH.push(height[0]);
    for(let i = 1;i<height.length;i++){
        var ht = Math.max(leftH[i-1],height[i-1]);
        leftH.push(ht);
    }
   // console.log(leftH);
    rightH.push(0);
    var ch = height[height.length-1];
    for(let i = height.length-2;i>=0;i--){
        var ht = Math.max(ch,height[i+1]);
        ch = ht;
        rightH.unshift(ht);
    }
    //console.log(rightH);
    var water = 0;
     for(let i = 0;i<height.length;i++){
        var ht = Math.min(leftH[i],rightH[i]);
       if(height[i]<ht){
           water += ht-height[i];
       }
    }
    return water;
};