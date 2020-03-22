var sort = (function(){
    var quickSort = function(str){
        function recQuck(start,end){
            if(start === end || end === 0 || start === arr.length-1){
                return;
            }
            var mid = Math.floor((start+end)/2);
            var i = start;
            var j = end;
            while(i<=mid && j>=mid && i<j){
                if(arr[i]>=arr[mid] && arr[j]<=arr[mid]){
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    i++;
                    j--;
                }
                else if(arr[i]>arr[mid]){
                    j--;
                }
                else if(arr[j]<arr[mid]){
                    i++;
                }else{
                    i++;
                    j--;
                }
            };
            recQuck(start,mid);
            recQuck(mid+1,end)
        };
        var arr = str.split('');
        recQuck(0,arr.length-1);
        console.log(arr);
    };
    var mergeSort = function(str){
        
        function mergeArrays(l,r){
                //merge arrays;
                var newArr = [];
                var i = 0;
                var j = 0;
               // var str = '';
                while(i<l.length||j<r.length){
                    if(i === l.length){
                        newArr.push(r[j])
                        j++;
                    }
                    else if(j === r.length){
                        newArr.push(l[i]);
                        i++;
                    }else{
                        if(l[i]>=r[j]){
                            newArr.push(r[j]);
                            j++;
                        }else{
                            newArr.push(l[i]);
                            i++;
                        }
                    }
                }
                //console.log('merging',newArr)
                return newArr; 
        }
        function reMerge(arr){
            if(arr.length === 1){
                return arr;
            }
            var mid = Math.floor(arr.length/2);
            var leftArr = arr.slice(0,mid);
            var rightArr = arr.slice(mid);
            var left = reMerge(leftArr);
            var right = reMerge(rightArr);
            return mergeArrays(left,right);
        }
        console.log('mergeSort',reMerge(str.split('')).join(''));
    }
    var builtInSortNum = function(str){
        console.log('sorted',str.sort((a,b)=>{
            return a-b;
        }).join(''));
    }
    var init = function(){
        
        mergeSort('acdb');
        builtInSortNum([1,3,4,2,5,11,15]);
        quickSort('13452');
    }
    return{
        init:init
    }
})()
module.exports = sort;