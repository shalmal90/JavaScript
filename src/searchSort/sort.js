var sort = (function(){
    var quickSort = function(str){

    };
    var mergeSort = function(str){

    }
    var builtInSort = function(str){
        console.log('sorted',str.sort());
    }
    var init = function(){
        quickSort('acdb');
        mergeSort('acdb');
        builtInSort('acdb');
    }
    return{
        init:init
    }
})()
module.exports = sort;