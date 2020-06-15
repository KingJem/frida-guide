# -*- coding: UTF-8 -*-

# 一般情况下是没有这种需求的
import frida, sys

jscode = """

setImmediate(function(){
    Java.perform(function () {
        var utils = Java.use("com.xiaojianbang.app.Utils");
        utils.getCalc.implementation = function(a, b){
            a = 12345;
            b = 54321;
            var retval = this.getCalc(a, b);
            console.log(a, b, retval);
            return retval;
        }
	});
});

"""


def message(message, data):
    if message["type"] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


# rdev = frida.get_device_manager().enumerate_devices()
rdev = frida.enumerate_devices() # 和上面的方式的原理是一样的 返回一个列表
print(rdev)
rdev = rdev[int(sys.argv[1])] # 获取命令行参数
# rdev = rdev[3]
process = rdev.attach('com.xiaojianbang.app')  # 也可以传入唯一的进程pid
script = process.create_script(jscode)
script.on('message', message)
script.load()
sys.stdin.read()
