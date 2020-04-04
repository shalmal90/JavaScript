/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    var mat = [];
    var len = Math.max(L,M);
    for(let i=0;i<A.length;i++){
        mat[i]=[];
        for(let j=0;j<=len;j++){
            if(i=== 0 || j === 0){
                if(i === 0 && j>0){
                    mat[i][j] = A[i];
                }else{
                     mat[i][j] = 0 
                } 
            }else{
                mat[i][j] = A[i]+mat[i-1][j-1]
            }  
        }
    }
   console.log(mat);
    var ans1  = 0;
    var max1 = mat[0][L];
    var maxi = 0;
    var maxi2 = 0;
    var max2 = mat[0][L];
    //obj[L] = {};
    for(let i = 0;i<mat.length;i++){
        if(max1<mat[i][L]){
            max1 = mat[i][L];
            maxi = i;
        }  
    }
    ans1+= max1;
    console.log('max in L',ans1);
     for(let i = 0;i<mat.length;i++){
        if(max2<mat[i][M] && (i<maxi-len || i>=maxi+len) ){
            max2 = mat[i][M];
        }  
    }
    ans1+= max2;
     //console.log('max',ans1);
    var ans2 = 0;
    var max1 = mat[0][M];
    var maxi = 0;
    var maxi2 = 0;
    var max2 = mat[0][M];
    for(let i = 0;i<mat.length;i++){
        if(max1<mat[i][M]){
            
            max1 = mat[i][M];
            maxi = i;
        }  
    }
    ans2+= max1;
     for(let i = 0;i<mat.length;i++){
        if(max2<mat[i][L] && (i<maxi-len || i>=maxi+len) ){
            max2 = mat[i][L];
        }  
    }
    ans2+= max2;
    //console.log(ans2);
    return Math.max(ans1,ans2);
};