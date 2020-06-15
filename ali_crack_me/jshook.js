///<reference path='./index.d.ts' />
// 这个可以在写frida hook的时候有提示信息出来，也非常方便
// 安装 npm i  @types/frida-gum 把里面的ts文件复制到这个目录写上上面的注释就可以在pycharm中使用了


function test() {
    var ma = Java.use("com.yaotong.crackme.MainActivity");
    ma.securityCheck.implementation = function (str) {

        return true;

    };
}

function main() {
    Java.perform(function () {
        test();
    });
}

setImmediate(main);

