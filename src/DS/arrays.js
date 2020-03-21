var array = (function(){
    var median = function(){
        var arr1 = [1,2,3,4,5,6];
        var arr2 = [0,0,0,0,10,10];
        function getMid(arr){
            if(arr.length%2 === 0){
                var index1 = arr.length/2;
                var index2 = index1-1;
                var value = (arr[index1]+arr[index2])/2
                return value
            }else{
                var index =  Math.floor(arr.length/2);
                return arr[index];
            }
        }
        function getMidVal(arr){
            if(arr.length%2 === 0){
                var index1 = arr.length/2;  
                return index1
            }else{
                var index =  Math.floor(arr.length/2);
                return index;
            }
        }
        function recMedian(a1,a2){
            if(a1.length <= 2 && a2.length <= 2){
                var newArr = [];
                var i = 0;
                var j = 0;
                while(i<2 || j<2){
                    console.log('values',a1[i],a2[i]);
                    if(a1[i] == undefined){
                        var key = a2[j];
                        newArr.push(key);
                        j++;
                        //break;
                    }else if(a2[j] == undefined){
                        var key = a1[i];
                        newArr.push(key)
                        i++
                    }else if(a1[i] < a2[j]){
                        var key1 = a1[i];
                        newArr.push(key1)
                        i++;
                    }else if(a1[i] > a2[j]){
                        var key2 = a2[j];
                        newArr.push(key2)
                        j++;
                    }
                }
                var ans = getMid(newArr);
                console.log('merge',ans);
                return ans;
            }else{
                var med1 = getMid(a1);
                var med2 = getMid(a2);
                console.log('median',med1, med2);
                var midVal1 =  getMidVal(a1);
                var midVal2 =  getMidVal(a2);
                console.log('mid val',midVal1, midVal2);
                if(med1 < med2){
                    if(midVal1 == 1){  
                        a1 = a1.slice(midVal1);
                   }else{
                    a1 = a1.slice(midVal1-1);
                   }
                   a2 = a2.slice(0,midVal2+1);
                }else{
                   a1 = a1.slice(0,midVal1+1);
                   if(midVal2 == 1){
                        a2 = a2.slice(midVal2);
                   }else{
                        a2 = a2.slice(midVal2-1);
                   }
                }
                recMedian(a1,a2);
            }  
        }
        recMedian(arr1,arr2);
    }
    var knapsack = function(weights,values,maxW){

        function knapRec(cWeights,cValues,cMaxW,i){
            console.log('knapsack',cMaxW,i);
            if(i === cWeights.length){
                return 0;
            }
            if(cMaxW - cWeights[i]<0){
                return knapRec(cWeights,cValues,cMaxW,i+1);
            }
            return Math.max(knapRec(cWeights,cValues,cMaxW-cWeights[i],i+1)+cValues[i],knapRec(cWeights,cValues,cMaxW,i+1));
        }
        console.log('knapsack',knapRec(weights,values,maxW,0));
    }
    var matProduct= function(mat){
        var k =0,l=0;
        var maxV= 0;
        function rec(i,j){
            if(i===mat.length-1 && j===mat[0].length-1){
                return mat[i][j];
            }else if(j===mat[0].length-1){
                return mat[i][j]*rec(i+1,j);
            }else if(i===mat.length-1){
                return mat[i][j]*rec(i,j+1);
            }
            return Math.max(mat[i][j]*rec(i+1,j),mat[i][j]*rec(i,j+1))
        }
        //for(var k = 0;k<mat.length;k++){
          //  for(var l = 0;l<mat.length;l++){
                var max = rec(k,l);
               // if(max>maxV){
                //    maxV = max;
               // }
           // }
       // }
        console.log(max);
    }
    var squareMatrix = function(matri){
        var count = 0;
        for(var i =0;i<matri.length;i++){
            for(var j = 0;j<matri[0].length;j++){
                if(matri[i][j]===1){
                    if(i>0 && j>0){
                        if(matri[i-1][j-1] ===  matri[i-1][j]=== matri[i][j-1]){
                            matri[i][j] = matri[i-1][j-1] +1;
                            var val  = matri[i][j];
                            if(val>count){
                                count = val;
                            }
                        } 
                    }
                }
            }
        }
        console.log('square',matri,count);
    };  
    var init = function(){
        median();
        var arr1 = [1,2,3];
        var arr2 = [10,20,30];
        var max = 5;
        knapsack(arr1,arr2,max);
        var matrix = [[1,2,3],[4,9,6],[7,8,9]];
        matProduct(matrix);
        var matr = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
        squareMatrix(matr);
    }
    return{
        init:init
    }
})();

module.exports = array;