var arr = [8,11,1,2,3,1,4,5,6];
var mh = [null];
class minHeap{
	insert(element){
  	mh.push(element);
    var index = Math.floor((mh.length-1));
    if(mh.length>2){
      while(element < mh[Math.floor(index/2)]){
					[mh[mh.length-1],mh[Math.floor(index/2)]] = [mh[Math.floor(index/2)],mh[mh.length-1]];
          index = Math.floor(index/2);
      }
    }
  };
  remove(){
    var index = 1;
    var left = 2;
    var right = 3;
    if(mh.length>1){
      if(mh.length>1){
      var value =  mh[1];
        mh[1]=mh[mh.length-1];
        mh.splice(mh.length-1,1);
         while(mh[index]>=mh[left]||mh[index]>=mh[right]){
         if(left>=mh.length || right>=mh.length){
         	break;
         }
          if(mh[left]>mh[right]){
            [mh[index],mh[right]] = [mh[right],mh[index]];
            index = right;
            left = 2*right;
            right = 2*right+1;
           //  console.log(mh);
           // console.log('right: '+right+'left: '+left+'index: '+index);
          }
          if(mh[right]>mh[left]){
            [mh[index],mh[left]] = [mh[left],mh[index]];
            index = left;
            right = 2*left+1;
            left = 2*left;
           // console.log(mh);
         // console.log('left right: '+right+'left: '+left+'index: '+index);        
          }
        } 
        return value;
      }
    } 
};
}
var minH = new minHeap();
arr.forEach(minH.insert);
console.log('inserted',mh);
var arr=[];
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
arr.push(minH.remove());
console.log(arr);



