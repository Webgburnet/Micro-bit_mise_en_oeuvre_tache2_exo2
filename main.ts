grove.onGesture(GroveGesture.Right, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(100)
})
grove.onGesture(GroveGesture.Left, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(100)
})
grove.initGesture()
basic.forever(function () {
	
})
