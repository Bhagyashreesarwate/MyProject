let n1 = 1
let n2 = 2
let n3 = 3


function updateQuestion() {
    console.log("\n\nupdate question .....")
    n1 = Math.floor(Math.random() * 99) + 1;
    n2 = Math.floor(Math.random() * 99) + 1;

    let eN1 = document.getElementById("num1");
    let oldn1 = eN1.value
    eN1.value = n1

    let eN2 = document.getElementById("num2");
    let oldn2 = eN2.value
    eN2.value = n2

    console.log(`oldn1=${oldn1}, oldn2=${oldn2}`)
    console.log(`n1=${n1}, n2=${n2}`)

    let eN3 = document.getElementById("num3");
    eN3.value = ""

    return true

}

const passSound = 'https://www.soundjay.com/misc/bell-ringing-04.mp3'
const failSound = 'https://www.soundjay.com/misc/fail-buzzer-03.mp3'

const audioPass = new Audio(passSound);
const audioFail = new Audio(failSound);

function playPassFail(status) {

    if (status) {
        audioPass.play()
    } else {
        audioFail.play()
    }
    console.log("playing audio for - " + (status));
}



function checkAnswer() {
    console.log("Checking answer")

    let eN1 = document.getElementById("num1");
    let strN1 = eN1.value
    let vN1 = parseInt(strN1)

    let eN2 = document.getElementById("num2");
    let strN2 = eN2.value
    let vN2 = parseInt(strN2)

    let eN3 = document.getElementById("num3");
    let strN3 = eN3.value
    let vN3 = parseInt(strN3)

    console.log(`strN1=${strN1}, strN2=${strN2}, strN3=${strN3}`)
    console.log(`vN1=${vN1}, vN2=${vN2}, vN3=${vN3}`)

    let userAnswer = vN3
    let correctAnswer = vN1 + vN2

    if (userAnswer != correctAnswer) {
        playPassFail(false)
        showFailedMessage(userAnswer, correctAnswer)
    } else {
        playPassFail(true)
        showPassedMessage(correctAnswer)
    }

}


let lastEvent = null
    // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
let input = document.getElementById("num3")
input.addEventListener("keyup", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode === 13) {
        checkAndUpdateQuestion()
    }
})

function checkAndUpdateQuestion() {
    checkAnswer()
    updateQuestion()

}


function showFailedMessage(userAnswer, correctAnswer) {
    let failedMsg = `Sorry --- you said ${userAnswer}\nBut the correct answer is ${correctAnswer}`
    console.error(`Showing error message ...\n${failedMsg}`)
    setTimeout(function() { alert(failedMsg); }, 90);
}

function showPassedMessage(correctAnswer) {
    let succMsg = `Good Job!\nYou got the correct answer\n<${correctAnswer}>`
    console.log(`Showing success message ...\n${succMsg}`)
    setTimeout(function() { alert(succMsg); }, 90);
}