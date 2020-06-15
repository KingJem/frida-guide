function hookTest5() {
    Java.perform(function () {
        //静态字段的修改
        var money = Java.use("com.xiaojianbang.app.Money");
        //console.log(JSON.stringify(money.flag));
        money.flag.value = "xiaojianbang";
        console.log(money.flag.value);

        //非静态字段的修改
        Java.choose("com.xiaojianbang.app.Money", {
            onMatch: function (obj) {
                obj._name.value = "ouyuan"; //字段名与函数名相同 前面加个下划线
                obj.num.value = 150000;
            },
            onComplete: function () {

            }
        });

    });
}


