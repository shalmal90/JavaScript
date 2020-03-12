import _getText from './home.js';
import './CSS/index.css';
class _putText{
    constructor(textVal,putId){
        this.textVal = textVal
        this.putId = putId 
    };
    insertText(){
        var node = document.getElementById(this.putId);
        node.innerHTML = this.textVal;
    }
    insertForm(){

    }
}
var myText = new _putText('Hello World shalmal','form');
myText.insertText();
var gText = new _getText('something','form1');
gText.insertText();
