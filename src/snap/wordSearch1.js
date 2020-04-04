
var exist = function(board, word) {
    var obj ={};
    
for(var i=0;i<board.length;i++){
    for(var j=0;j<board[0].length;j++){
        if(dfs(board, word, 0, i,j)){
            return true;
        }
    }
}
    
    function dfs(board, word, w, i,j){
        var key = i + ',' + j;
        if(obj[key]){
            return false;
        }
        
        if(w===word.length){
            return true;
        }
        
        if(i<0 || i>=board.length || j<0 || j>=board[0].length){
            return false;
        }
        
        var result = false;
        
        if(board[i][j] === word[w]){
            obj[key] = true;
            
            result = dfs(board, word, w + 1, i+1, j) || dfs(board, word, w + 1, i-1, j) || dfs(board, word, w + 1, i, j+1) || dfs(board, word, w + 1, i, j-1);
            
            obj[key] = false;
        }
        return result;
    }
    
    return false;
};