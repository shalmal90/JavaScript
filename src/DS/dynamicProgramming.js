
export default class dynamic{
    constructor(){
        this.obj = {};
    }
    fibbonachi(val){
        function recFib(n){
            if(n<0){
                return;
            }
            if(this.obj.hasOwnProperty(n)){
                return obj[n];
            }
            if( n === 0){
                this.obj[n] = 0;
                return 0;
            }
            if( n === 1){
                this.obj[n] = 1;
                return 1;
            }
            this.obj[n] =  fibbonachi(n-1) + fibbonachi(n-2);
        }  
        recFib(val);
        return this.obj[val];  
    }; 
}
