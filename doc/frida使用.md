

```shell script
frida -U -l hook.js  # 加载本地的hook脚本 



```


```shell script

frida -H 127.0.0.1:999 com.xiaojianbang.app -l hook.js
```