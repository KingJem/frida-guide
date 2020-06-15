// .overload()
// .overload('com.xiaojianbang.app.Money')
// .overload('int')
function hookTest2() {
    var utils = Java.use("com.xiaojianbang.app.Utils");
    utils.test.overload('int').implementation = function (a) {
        a = 888;
        var retval = this.test();
        console.log(a, retval);
        return retval;
    }
    utils.test.overload().implementation = function () {
        var retval = this.test();
        console.log(retval);
        return retval;
    }
    utils.test.overload('com.xiaojianbang.app.Money').implementation = function (a) {
        var retval = this.test(a);
        console.log(retval);
        return retval;
    }
}

function hookTest3() {
    var utils = Java.use("com.xiaojianbang.app.Utils");
    //console.log(utils.test.overloads.length);
    for (var i = 0; i < utils.test.overloads.length; i++) {
        utils.test.overloads[i].implementation = function () {
            //console.log(JSON.stringify(arguments));

            if (arguments.length == 0) {
                return "调用了没有参数的";
            } else if (arguments.length == 1) {
                if (JSON.stringify(arguments).indexOf("Money") != -1) {
                    return "调用了Money参数的";
                } else {
                    return "调用了int参数的";
                }
            }

            //arguments[0] = 1000;
            //return this.test.apply(this, arguments);
        }
    }
}

function main() {
    Java.perform(function () {

        //hookTest2();
        hookTest3();
    });
}


setImmediate(main);