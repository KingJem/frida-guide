import frida
import sys

device = frida.get_usb_device()
pid = device.spawn(["com.yaotong.crackme"])
session = device.attach(pid)
device.resume(pid)



def message(message , data):
    if message["type"]=="send":
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

script = session.create_script('/hook_script/jshook.js')
script.on("message", on_message)
script.load()
sys.stdin.read()