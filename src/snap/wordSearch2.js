/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    var ans = [];
     function rec(word){
         console.log(word);
         var obj = {};
         let counter = 0;
         var bfs = [];
         var ans = false;
         for(let i =0;i<board.length;i++){
             for(let j =0;j<board[0].length;j++){
                  if(board[i][j] === word[counter]){
                     //console.log('found',board[i][j])
                     bfs.push([i,j,counter]);
                     while(bfs.length>0){
                         var ele = bfs.pop();
                         
                          var ia = ele[0];
                          var ja = ele[1]; 
                          var ct = ele[2];
                          //console.log('found',board[ia][ja]);
                         if(!obj.hasOwnProperty(ia+''+ja)){
                             obj[ia+''+ja] = true;
                             console.log('found',board[ia][ja],obj);
                             if(ct === word.length-1){
                                  ans =  true;
                                  break;
                              }
                             if(ia<board.length-1 && board[ia+1][ja] === word[ct+1]){
                                 bfs.push([ia+1,ja,ct+1]);
                             }
                             if(ia>0 && board[ia-1][ja] === word[ct+1]){
                                 bfs.push([ia-1,ja,ct+1]);
                             }
                             if(ja<board[0].length-1 && board[ia][ja+1] === word[ct+1]){
                                 bfs.push([ia,ja+1,ct+1]);
                             }
                             if(ja>0 && board[ia][ja-1] === word[ct+1]){
                                 bfs.push([ia,ja-1,ct+1]);
                             }
                             if(ja<board[0].length-1 && ia<board.length-1 && board[ia+1][ja+1] === word[ct+1]){
                                 bfs.push([ia+1,ja+1,ct+1]);
                             }
                             if(ja>0 && ia>0 && board[ia-1][ja-1] === word[ct+1]){
                                 bfs.push([ia-1,ja-1,ct+1]);
                             }
                         }
                        
                     }
                 }
             }
         }
         return ans;
     };
     words.forEach((ele)=>{
         var val = rec(ele);
         if(val){
             ans.push(ele);
         }
     })
     return ans;
 };