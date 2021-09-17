let i = 0
let j = 0
basic.forever(function () {
    i = randint(0, 5)
    j = randint(0, 5)
    led.plot(i, j)
    basic.pause(100)
    led.toggle(i, j)
})
