export default class scroll{
    constructor(){
        this.val = 1;
    };
    increaseWidth(val){
        var node = document.getElementById('scrollBar');
        node.style.width = this.val+'%';
        this.val = this.val+5;
    } 
};