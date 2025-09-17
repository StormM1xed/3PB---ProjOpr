import random

def randomise():
    a = random.randint(0, 100)
    b = random.randint(0, 100)
    c = random.randint(0, 100)
    delta = (b * b) - 4 * a * c
    print(delta)

randomise()