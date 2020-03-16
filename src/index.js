import _getText from './home.js';
import scroll from './scroll.js';
import _list from './list.js';
import './CSS/index.css';
// class _putText{
//     constructor(textVal,putId){
//         this.textVal = textVal
//         this.putId = putId 
//     };
//     insertText(){
//         var node = document.getElementById(this.putId);
//         node.innerHTML = this.textVal;
//     }
//     validateForm(){
//         console.log('here');
//         //window.location.href = "http://localhost:8080/action.html";
//     }
// }

// var myText = new _putText('Hello World shalmal','form');
// myText.insertText();
// var gText = new _getText('something','form1');
// gText.insertText();
// return myText;

var validate = (function(){
    var gText;
    var scroll1;
    var list1;
    var validateForm = function(event){
        event.preventDefault()
        var value1 = document.getElementById('nameInput').value;
        scroll1.increaseWidth(25);
        insertText('Validated','form1');
        list1.insertItem(value1);
    };
    var checkLog = function(){
        console.log('here again');
    };
    var insertText = function(textVal,putId){
        // var node = document.getElementById(putId);
        // node.innerHTML = textVal;
        gText = new _getText(textVal,putId);
        gText.insertText();
    };
    var searchBar = function(){
        let node = document.getElementById('toDo');
        let holder = document.createElement('DIV');
        holder.innerHTML = 'SEARCH';
        let bar = document.createElement('INPUT');
        bar.id = 'searchBar';
        holder.appendChild(bar);
        node.appendChild(holder);
        list1.searchList();
    };
    var init = function(){
        list1 = new _list();
        scroll1 = new scroll();
        var nodeForm = document.getElementById('form3');
        insertText('Hello Shalmal','form');
        searchBar();
        nodeForm.addEventListener("submit", validateForm,false);
    }
    return {
        validateForm:validateForm,
        checkLog:checkLog,
        init:init(),
    };
})();