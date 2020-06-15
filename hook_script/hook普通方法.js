



setImmediate(function(){
    Java.perform(function(){

        var utils = Java.use("com.xiaojianbang.app.Utils");
        utils.getCalc.implementation = function(a, b){

            a = 123;
            b = 456;

            var retval = this.getCalc(a, b);
            console.log(a, b, retval);
            //return retval;

            return retval;

        }

    });
});