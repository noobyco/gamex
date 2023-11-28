from random import randrange, shuffle
from machine import Pin
import constants as c

def restructure_led_pattern(pattern):
    """
    fn restructure_led_pattern() --> List[]
    
    converts List[[1,3], [2,3], [3,2]] --> List[1, 1, 1, 2, 2, 2, 3, 3]
    
    """
    
    
    
    restructured_list = []
    for x in pattern:
        for y in range(x[1]):
            restructured_list.append(x[0])
    return restructured_list

def btn_count_decode(encoded):
    """
    fn btn_count_decode() --> int
    
    converts List of form List[11100111000011111000011110001111111000000] into int 5
    """
    count = 0
    for i in range(len(encoded)):
        if len(encoded) != i+1:
            if encoded[i] != encoded[i+1]:
                count += 1
        else:
            continue
        
    return int(count/2)


def shuffle_led():
    """
    fn shuffle_led() --> List[]
    
    shuffle_led function uses random.shuffle() function from micropython standard lib `random`.
    """
    leds = [1,2,3]
    shuffle(leds)
    return leds
    
def blink_time():
    """
    fn blink_time() --> int
    
    returns the random interger between 1-3
    
    """
    return randrange(1, 3)

def generate_pattern():
    """
    fn generate_pattern() --> List[[]] { Nested list }
    
    This function generates a list[] containing sublist [x, y] where x = led number and y = number of times x should blink.
    
    example of generated led pattern.
    
    [[1,3], [3,1], [2,2]]
    
    
    """
    
    pattern_array = []
    for i in range(c.LED_LIMIT):
        temp_struct = [shuffle_led()[i], blink_time()]
        pattern_array.append(temp_struct) 
        
    return pattern_array

def write_data(file, data):
    with open(file, "w") as file:
        file.write(data)
        file.close()
        
def read_data(file):
    with open(file, "r") as file:
        d = file.read()
        return d
        file.close()