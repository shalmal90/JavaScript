
export default class dynamic{
    constructor(){
       
    }
    fibbonachi(val){
        var obj = {};
        function recFib(n){
            if( n === 0 || n === 1){
                return n;
            }
            if(!obj.hasOwnProperty(n)){
                obj[n] =  recFib(n-1) + recFib(n-2);   
            }
            return obj[n];
        }  
        recFib(val);
        return obj[val];  
    }; 
}
