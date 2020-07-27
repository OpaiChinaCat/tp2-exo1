let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let liste: number[] = []
function faireQuelqueChose () {
    led.plot(0, a)
    led.unplot(0, a)
    led.plot(1, b)
    led.unplot(1, b)
    led.plot(2, c)
    led.unplot(2, c)
    led.plot(3, d)
    led.unplot(3, d)
    led.plot(4, e)
    led.unplot(4, e)
    while (a < 4) {
        a += 1
        led.plot(0, a)
        basic.pause(100)
        led.unplot(0, a)
    }
    while (a > 0) {
        a += -1
        led.plot(0, a)
        basic.pause(100)
        led.unplot(0, a)
    }
}
function faireQuelqueChose4 () {
    while (d < 4) {
        d += 1
        led.plot(3, d)
        basic.pause(100)
        led.unplot(3, d)
    }
    while (d > 0) {
        d += -1
        led.plot(3, d)
        basic.pause(100)
        led.unplot(3, d)
    }
}
function faireQuelqueChose2 () {
    while (b < 4) {
        b += 1
        led.plot(1, b)
        basic.pause(100)
        led.unplot(1, b)
    }
    while (b > 0) {
        b += -1
        led.plot(1, b)
        basic.pause(100)
        led.unplot(1, b)
    }
}
function faireQuelqueChose3 () {
    while (e < 4) {
        e += 1
        led.plot(4, e)
        basic.pause(100)
        led.unplot(4, e)
    }
    while (e > 0) {
        e += -1
        led.plot(4, e)
        basic.pause(100)
        led.unplot(4, e)
    }
}
function faireQuelqueChose5 () {
    while (c < 4) {
        c += 1
        led.plot(2, c)
        basic.pause(100)
        led.unplot(2, c)
    }
    while (c > 0) {
        c += -1
        led.plot(2, c)
        basic.pause(100)
        led.unplot(2, c)
    }
}
basic.forever(function () {
    liste = [0, 1, 2, 3, 4]
    a = liste[0]
    b = liste[1]
    c = liste[2]
    d = liste[3]
    e = liste[4]
    faireQuelqueChose()
    faireQuelqueChose2()
    faireQuelqueChose3()
    faireQuelqueChose4()
    faireQuelqueChose5()
})
