export default class _tables{
    constructor(){
        this.appenIntable = function(obj,table){
            var obj1 = obj.q1;
            var obj2 = obj.q2;
            var row = document.createElement('TR');
            var col1 = document.createElement('TH');
            var col2 = document.createElement('TH');
            col1.innerHTML = obj1.question;
            col2.innerHTML = obj2.question;
            row.appendChild(col1);
            row.appendChild(col2);
            table.appendChild(row);
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
        var obj = dataStr.quiz.sport;
        this.appenIntable(obj,table);
        var obj1 = dataStr.quiz.maths;
        this.appenIntable(obj1,table);
        node.appendChild(table);
    }
}