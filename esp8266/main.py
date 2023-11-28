from constants import *
from utils import *
import time


def welcome(led1, led2, led3):
    
    state = True 
    for x in range(WELCOME_LED_BLINK+3):
        for y in [led1, led2, led3]:
            if state == True :
                y.on()
            elif state == False:
                y.off()
        state = not state
            
            
        time.sleep(0.3)
        

def ignite_led(mode, led1, led2, led3):
    
    # manipulating modes
    if mode == "easy":
        sec = 0.8
    elif mode == "medium":
        sec == 0.3
    elif mode == "hard":
        sec = 0.1
    
    # generating led blink sequence and storing them into LED_PATTERN constant
    parent_list = generate_pattern()
    print(parent_list)
    LED_PATTERN = parent_list
    
    for child_list in parent_list:
        led = child_list[0]
        times = child_list[1]
    
        if led == 1:
            for x in range(times):
                led1.on()
                time.sleep(sec)
                led1.off()
                time.sleep(sec)
                
        if led == 2:
            for x in range(times):
                led2.on()
                time.sleep(sec)
                led2.off()
                time.sleep(sec)
                
        if led == 3:
            for x in range(times):
                led3.on()
                time.sleep(sec)
                led3.off()
                time.sleep(sec)
                
    led_pattern = restructure_led_pattern(LED_PATTERN)
    l1 = led_pattern.count(1)
    l2 = led_pattern.count(2)
    l3 = led_pattern.count(3)
    
    print("LED 1: ", l1)
    print("LED 2: ", l2)
    print("LED 3: ", l3)
    
    
    return (l1, l2, l3)


def progress_bar(delay):
    
    pass



def btn_count(delay, btn1, btn2, btn3):
    
    t_end = time.time() + delay
    b1_seq = []
    b2_seq = []
    b3_seq = []
    
    while time.time() < t_end:
        b1 = btn1.value()
        b2 = btn2.value()
        b3 = btn3.value()
        print(b1, b2, b3)
        
        b1_seq.append(b1)
        b2_seq.append(b2)
        b3_seq.append(b3)
        
        time.sleep(0.2)
    
    b1_decoded = btn_count_decode(b1_seq)
    b2_decoded = btn_count_decode(b2_seq)
    b3_decoded = btn_count_decode(b3_seq)
    
    print("BUTTON 1 : ",b1_decoded)
    print("BUTTON 2 : ",b2_decoded)
    print("BUTTON 3 : ",b3_decoded)
    
    return (b1_decoded, b2_decoded, b3_decoded)

def get_input():
    pass
