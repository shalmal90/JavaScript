// (function(){
//     function _putText(){
//         console.log('hello');
//         var node = document.getElementById('form');
//         node.innerHTML = 'Hello World';
//     }
//     return {
//         putText:_putText
//     }
// }());
export default class _getText{
    constructor(textVal,putId){
        this.textVal = textVal
        this.putId = putId 
    };
    insertText(){
        var node = document.getElementById(this.putId);
        node.innerHTML = this.textVal;
    } 
};