export default class _tables{
    constructor(){
        this.sortIt = function(val){
            var table, rows, switching, i, x, y, shouldSwitch;
            var n = val.target.getAttribute('name');
            table = document.getElementById("myTable");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                  shouldSwitch = false;
                  x = rows[i].getElementsByTagName("TD")[n];
                  y = rows[i + 1].getElementsByTagName("TD")[n];
                  if(x&&y){
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                      }
                  } 
                }
                if (shouldSwitch) {
                  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                  switching = true;     
                }
            }
        }
        this.appenIntable = function(obj,table){
            var row = document.createElement('TR');
            var i = 0;
            for(var key in obj){
                var col = document.createElement('TH');
                col.addEventListener('click',this.sortIt);
                col.setAttribute('name',i);
                i++;
                col.innerHTML = obj[key].question;
                row.appendChild(col); 
            }
            table.appendChild(row);
            var obj1 = obj.q1;
            var obj2 = obj.q2;

            obj1.options.forEach((element,i) => {
                let row = document.createElement('TR');
                let col1 = document.createElement('td');
                let col2 = document.createElement('td');
                col1.innerHTML = element;
                col2.innerHTML = obj2.options[i];
                row.appendChild(col1);
                row.appendChild(col2);
                table.appendChild(row);
            });
        }
        
    }
    setData(data){
        var dataStr = JSON.parse(data);
        var node = document.getElementById('tableIn');
        var table = document.createElement('TABLE');
        table.id = 'myTable';
        for(var key in dataStr.quiz){
            this.appenIntable(dataStr.quiz[key],table);
        }
        node.appendChild(table);
    }
}