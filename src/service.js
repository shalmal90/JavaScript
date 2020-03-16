

export default class _getContent{
    constructor(){
        
    };
    get(){
        var content;
        
            let myFirstPromise = new Promise((resolve,reject)=>{
                try {
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            resolve(this.responseText)
                        }
                    };
                    xhttp.open("GET", "dist/mock/content.json", true);
                    xhttp.send();
                } catch (error) {
                    console.log(error);
                    }
                });
                //myFirstPromise.then((content)=>{
                return myFirstPromise;
            //})
            
        
    } 
};