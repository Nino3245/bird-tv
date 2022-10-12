input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    for (let index = 0; index < 20; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    for (let index = 0; index < 7; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
