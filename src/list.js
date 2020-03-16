export default class _list{
    constructor(){
         this.first=true;
         this.searchFilter = function(){
           let val= document.getElementById('searchBar').value.toUpperCase();
           let ul = document.getElementById("myUL");
           let li = ul.getElementsByTagName("li");
           let len = li.length;
           var txtValue;
           for(let i =0;i<len;i++){
                console.log(li[i].innerText || li[i].innerHTML);
                txtValue = li[i].innerText || li[i].innerHTML;
                if (txtValue.toUpperCase().indexOf(val) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
           }
        };
    };
    insertItem(putItem){
        if(this.first){
            let node = document.getElementById('toDo');
            let unList = document.createElement('UL');
            unList.id = 'myUL';
            node.appendChild(unList);
            this.first = false;
        }
        var unList = document.getElementById('myUL');
        let unItem = document.createElement('LI');
        unItem.innerText = putItem;
        unList.appendChild (unItem);
    };
    searchList(){
        var searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('keyup',this.searchFilter);
    }
    
};