input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
})
input.onGesture(Gesture.Shake, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
