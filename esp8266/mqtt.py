from umqtt.simple import MQTTClient
import network
from constants import *
import time
from utils import read_data, write_data
from machine import Pin

# this led blinks twice on recieving both room and mode data. 
led_success = Pin(L2, Pin.OUT)

# this led turns on indicating that the device has been connected successfully to the mqtt broker.
led_connect = Pin(L1, Pin.OUT)

# WIFI connectivity

nic = network.WLAN(network.STA_IF)
nic.active(True)

ssid = "your-ssid"
pwd = "your-password"
nic.connect(ssid, pwd)



# callback function
def sub_cb(topic, msg):
    led_connect.off()
    if topic.decode("ascii") == PLAYER_ID + "/room":
        write_data("room.txt", msg.decode("ascii"))
        
        led_success.on()
        time.sleep(1)
        led_success.off()
        time.sleep(1)
        
    elif topic.decode("ascii") == PLAYER_ID + "/mode":
        write_data("mode.txt", msg.decode("ascii"))
        
        led_success.on()
        time.sleep(1)
        led_success.off()
        time.sleep(1)
        
    print(topic, msg)
    print("-----------------------------------")
    room = read_data("room.txt")
    mode = read_data("mode.txt")
    print("room : ", room)
    print("mode : ", mode)
    

# connecting to MQTT broker
def mqtt_connect():
    x = True
    c = MQTTClient(client_id = PLAYER_ID.encode(),
                   server = b"server-url",
                   port = 0,
                   user = b"username",
                   password = b"password",
                   keepalive = 7200,
                   ssl = True,
                   ssl_params = {'server_hostname':'server-url'}
                   )
    c.connect()
    c.set_callback(sub_cb)
    
    topicx = PLAYER_ID + "/room"
    c.subscribe(topicx)
    
    topicy = PLAYER_ID + "/mode"
    c.subscribe(topicy)
    
    print("connected!")
    led_connect.on()

    
    
    
    while x == True :
        
        
        # Non-blocking wait for message
        c.wait_msg()
        c.wait_msg()
        # Then need to sleep to avoid 100% CPU usage (in a real
        # app other useful actions would be performed instead)
        time.sleep(1)
        x = False

    c.disconnect()

