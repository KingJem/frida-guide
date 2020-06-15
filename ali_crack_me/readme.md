
# 使用adb 工具把frida-server 推到模拟器上并设置运行权限

```bash
adb push frida-server  /data/local/tmp
adb shell 

cd  /data/local/tmp
chmod +x frida-server
./frida-server

```

新开窗口，设置端口转发
``` bash
adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
```


查看是否能够正常工作
```bash
frida-ps -U 
```


```shell script
 frida  -U -l jshook.js com.yaotong.crackme


```


报错 Failed to attach: the connection is closed   
解决办法：
下载最新版的frida-server 推送到手机上就可以了

