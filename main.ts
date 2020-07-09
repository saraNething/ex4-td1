input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x += -1
    if (x < 0) {
        x = 0
    }
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x += 1
    if (x > 4) {
        x = 4
    }
    led.plot(x, 0)
})
let x = 0
x = 2
led.plot(x, 0)
