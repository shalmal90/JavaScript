
 var validate = (function(){
    var validateForm = function(){
        console.log('here');
    };
    var checkLog = function(){
        console.log('here again');
    };
    return {
        validateForm:validateForm,
        checkLog:checkLog
    };
})();