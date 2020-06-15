//Hook重载函数
function hookTest2(){
    var utils = Java.use("com.xiaojianbang.app.Utils");
    var money = Java.use("com.xiaojianbang.app.Money");
    utils.test.overload('int').implementation = function(a){
        a = 888;
        var retval = this.test(money.$new("日元", 100000));//对象实例化
        console.log(a, retval);
        return retval;
    }
    utils.test.overload().implementation = function(){
        var retval = this.test();
        console.log(retval);
        return retval;
    }
    utils.test.overload('com.xiaojianbang.app.Money').implementation = function(a){
        var retval = this.test(a);
        console.log(retval);
        return retval;
    }
}
