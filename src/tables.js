export default class _tables{
    constructor(){
        this.appenIntable = function(obj,table){
            var row = document.createElement('TR');
            for(var key in obj){
                var col = document.createElement('TH');
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