
//Hook构造函数
function hookTest4(){
    var money = Java.use("com.xiaojianbang.app.Money");
    money.$init.overload('java.lang.String', 'int').implementation = function(str, num){
        console.log(str, num);
        str = "欧元";
        num = 2000;
        this.$init(str, num);
    }
}

function main(){
    Java.perform(function(){
        hookTest4();
    });
}


setImmediate(main);