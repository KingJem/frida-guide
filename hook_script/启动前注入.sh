

frida -H 127.0.0.1:8888 -f com.xiaojianbang.app -l hook普通方法.js
完成后输入
%resume 以恢复应用运行


frida -H 127.0.0.1:8888 -f com.xiaojianbang.app -l hook普通方法.js --no-pause