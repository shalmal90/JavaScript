var generateMatrix = function(n) {
    var tl = 0,
        tr = n-1,
        bl = 0,
        br = n-1,
        arr = [],
        num = 1,
        i;
    //create matrix with null;
    for(i = 0; i < n; i++){
        var aux = [];
        for(var j = 0; j < n; j++){
            aux.push(0);
        }
        arr.push(aux);
    }
    
    while(num <= (n*n)){
        for(i = tl; i <= tr; i++){
            arr[tl][i] = num++;
        }
        tl++;
    
        for(i = tl; i <= br; i++){
            arr[i][br] = num++;
        }
        br--;
    
        for(i = br; i >= bl; i--){
            arr[tr][i] = num++;
        }
        tr--;
    
        for(i = tr; i >= tl; i--){
            arr[i][bl] = num++;
        }
        bl++;
    }
    
    return arr;
    
};