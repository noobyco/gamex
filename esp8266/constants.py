from micropython import const

# LED Pins

L1 = const(5) # D1
L2 = const(4) # D2
L3 = const(0) # D3

# BTN Pins

B1 = const(14) # D5
B2 = const(13) # D7
B3 = const(2)  # D4

# Game Variables

GAME_OVER = const(False)



WELCOME_LED_BLINK = const(3) # numer of times all three leds blink at once.
LED_LIMIT = const(3) # number of individual led target for led ignition time. 

PLAYER_ID = const("12345")

