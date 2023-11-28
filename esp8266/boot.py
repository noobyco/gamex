from machine import Pin
from constants import *
from main import *
from utils import read_data
import mqtt
import time



led1 = Pin(L1, Pin.OUT)
led2 = Pin(L2, Pin.OUT)
led3 = Pin(L3, Pin.OUT)



btn1 = Pin(B1, Pin.IN, Pin.PULL_UP)
btn2 = Pin(B2, Pin.IN, Pin.PULL_UP)
btn3 = Pin(B3, Pin.IN, Pin.PULL_UP)


while GAME_OVER == False:
    mqtt.mqtt_connect()
    score = 0
    welcome(led1, led2, led3)
    l1, l2, l3 = ignite_led(read_data("mode.txt"), led1, led2, led3)
    c1, c2, c3 = btn_count(10, btn1, btn2, btn3)
    
    print("-----------------------")
    
    print(l1, l2, l3)
    print(c1, c2, c3)
    
    if l1 == c1 and l2 == c2 and l3 == c3:
        score += 1
    
    print(score)
    
    if score == 1:
        led1.on()
    else:
        led3.on()
    
    print("done!")

    
    
    GAME_OVER = True
    
    
    


