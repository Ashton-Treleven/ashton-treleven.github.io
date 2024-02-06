const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

function WelcomeMessage() {
    var welcome = document.getElementById("welcome")
    if (isMorning) {
        welcome.textContent = "Good Morning! Welcome to my home page!"
    } else if (isAfternoon) {
        welcome.textContent = "Good Afternoon! Welcome to my home page!"
    } else if (isEvening) {
        welcome.textContent = "Good Evening!  Welcome to my home page!"
    }
}

WelcomeMessage()