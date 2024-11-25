// ===========================
// Fonction Boussole
// ===========================
function Boussole () {
    basic.pause(500)
    Direction2 = input.compassHeading()
    if (Direction2 >= 0 && Direction2 < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (Direction2 >= 45 && Direction2 < 90) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (Direction2 >= 90 && Direction2 < 135) {
        basic.showArrow(ArrowNames.West)
    }
    if (Direction2 >= 135 && Direction2 < 180) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (Direction2 >= 180 && Direction2 < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (Direction2 >= 225 && Direction2 < 270) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (Direction2 >= 270 && Direction2 < 315) {
        basic.showArrow(ArrowNames.East)
    }
    if (Direction2 >= 315 && Direction2 < 360) {
        basic.showArrow(ArrowNames.NorthEast)
    }
}
// ===========================
// Fonction Chronometre
// ===========================
function Chronometre () {
    basic.pause(500)
    tps_chrono = 0
    while (input.buttonIsPressed(Button.A)) {
        basic.pause(100)
        tps_chrono += 0.1
    }
    basic.showNumber(tps_chrono)
    if (input.buttonIsPressed(Button.B)) {
        tps_chrono = 0
    }
}
// ===========================
// Fonction Podometre
// ===========================
function Podometre () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Remise a zero")
        basic.pause(500)
        pas = 0
        basic.showNumber(pas)
    }
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        pas += 1
        if (input.buttonIsPressed(Button.A)) {
            basic.showNumber(pas)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (pas >= 8000) {
            basic.showString("Bravo !")
        } else {
            basic.showString("Marchez encore !")
        }
    }
}
// ===========================
// Fonction Température
// ===========================
function Temperature () {
    basic.pause(500)
    basic.showNumber(input.temperature())
    basic.pause(500)
    if (input.temperature() < 10) {
        basic.showString("Couvrez-vous !")
    }
    if (input.temperature() >= 10 && input.temperature() <= 25) {
        basic.showString("Bonne journée !")
    }
    if (input.temperature() > 25) {
        basic.showString("Hydratez-vous !")
    }
}
// ===========================
// Fonction Compte a rebours
// ===========================
function Rebours () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Remise à Zero")
        basic.pause(500)
        nbre_depart = 0
        basic.showNumber(nbre_depart)
    }
    if (input.buttonIsPressed(Button.B)) {
        nbre_depart += 1
        basic.showNumber(nbre_depart)
    }
    if (input.buttonIsPressed(Button.A)) {
        while (nbre_depart > 0) {
            basic.showNumber(nbre_depart)
            basic.pause(1000)
            nbre_depart += -1
        }
    }
}
// ===========================
// Fonction Distance parcourue
// ===========================
function DistanceP () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        Distance += pas
    }
    if (input.buttonIsPressed(Button.AB)) {
        Distance = 0
        pas = 0.25
        basic.showNumber(Distance)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        if (Distance < 1000) {
            basic.showNumber(Distance)
            basic.showString("m")
        } else {
            basic.showNumber(Distance / 1000)
            basic.showString("km")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (pas <= 1.2) {
            pas += 0.1
        }
        if (pas > 1.2) {
            pas = 1.2
        }
    }
}
let mode = 0
let tps_chrono = 0
let pas = 0
let nbre_depart = 0
let Distance = 0
let Direction2 = 0
Direction2 = 0
Distance = 0
nbre_depart = 0
pas = 0
tps_chrono = 0
// ===========================
// Programme Principal
// ===========================
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        mode += 1
        if (mode == 1) {
            basic.showString("Temperature")
            Temperature()
        }
        if (mode == 2) {
            basic.showString("Pas")
            Podometre()
        }
        if (mode == 3) {
            basic.showString("Distance")
            DistanceP()
        }
        if (mode == 4) {
            basic.showString("Chronometre")
            Chronometre()
        }
        if (mode == 5) {
            basic.showString("Compte a rebours")
            Rebours()
        }
        if (mode == 6) {
            basic.showString("Boussole")
            Boussole()
        }
        if (mode > 6) {
            mode = 0
        }
    }
})
