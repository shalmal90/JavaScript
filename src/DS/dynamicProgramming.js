
export default class dynamic{
    constructor(){
        this.obj = {};
    }
    fibbonachi(val){
        //var that = this;
        function recFib(n){
            if(n<0){
                return;
            }
            if(this.obj.hasOwnProperty(n)){
                return this.obj[n];
            }
            if( n === 0){
                this.obj[n] = 0;
                return 0;
            }
            if( n === 1){
                this.obj[n] = 1;
                return 1;
            }
            this.obj[n] =  recFib(n-1) + recFib(n-2);
        }  
        recFib.call(this,val);
        return this.obj[val];  
    }; 
}
