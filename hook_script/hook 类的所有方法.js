//Hook类的所有方法
function hookTest8() {
    Java.perform(function () {
        var md5 = Java.use("com.xiaojianbang.app.MD5");
        var methods = md5.class.getDeclaredMethods();
        for (var j = 0; j < methods.length; j++) {
            var methodName = methods[j].getName();
            console.log(methodName);

            for (var k = 0; k < md5[methodName].overloads.length; k++) {

                md5[methodName].overloads[k].implementation = function () {
                    for (var i = 0; i < arguments.length; i++) {
                        console.log(arguments[i]);
                    }
                    return this[methodName].apply(this, arguments);
                }
            }

        }

    });
}
