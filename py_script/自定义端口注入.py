import frida
import sys

jscode = """
console.log('test');
"""


def message(message, data):
    if message["type"] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


process = frida.get_device_manager().add_remote_device('127.0.0.1:666').attach('com.xiaojianbang.app')

script = process.create_script(jscode)

script.on('message', message)
