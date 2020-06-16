function hookTest6() {
    // 内部类的hook
    Java.perform(function () {
        var innerClass = Java.use("com.xiaojianbang.app.Money$innerClass");
        console.log(innerClass);
        innerClass.$init.implementation = function (a, b) {
            a = "xiaojianbang";
            b = 888;
            return this.$init(a, b);
        }

        var xxx = Java.use("com.xiaojianbang.app.MainActivity$1"); //得到匿名内部类的文件句柄
        console.log(xxx);
        xxx.getInfo.implementation = function () {
            return "匿名类被Hook了"
        }


    });
}
