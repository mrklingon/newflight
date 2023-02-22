function mkLandscape (size: number) {
    land = []
    for (let index = 0; index < size; index++) {
        land.push(randint(0, 2))
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(shipx, shipy)
    shipy += -1
    if (shipy < 0) {
        shipy = 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(shipx, shipy)
    shipy += 1
    if (shipy > 4) {
        shipx = 4
    }
})
function showLand () {
    for (let index2 = 0; index2 <= 4; index2++) {
        led.unplot(index2, 2)
        led.unplot(index2, 3)
        led.unplot(index2, 4)
        led.plotBrightness(index2, 4 - land[index2], 88)
    }
    land.push(land.shift())
}
let shipy = 0
let shipx = 0
let land: number[] = []
let speed = 0
mkLandscape(200)
showLand()
game.setLife(10)
basic.forever(function () {
    showLand()
    basic.pause(200)
    led.plot(shipx, shipy)
})
