function mkLandscape (size: number) {
    land = []
    for (let index = 0; index < size; index++) {
        land.push(randint(-2, 2))
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
        rock = 88
        if (0 > land[index2]) {
            rock = 200
        }
        led.plotBrightness(index2, 4 - Math.abs(land[index2]), rock)
    }
    land.push(land.shift())
}
let rock = 0
let shipy = 0
let shipx = 0
let land: number[] = []
let speed = 0
images.createBigImage(`
    # # # . . . . . . #
    # . . # . # . # . #
    # # . # . . # . . #
    # . . # . . # . . .
    # . . # # . # . . #
    `).scrollImage(1, 200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
mkLandscape(200)
showLand()
game.setLife(5)
basic.forever(function () {
    showLand()
    basic.pause(200)
    if (88 == led.pointBrightness(shipx, shipy)) {
        game.removeLife(1)
    }
    if (200 == led.pointBrightness(shipx, shipy)) {
        game.addLife(1)
        game.addScore(randint(1, 10))
    }
    led.plot(shipx, shipy)
})
