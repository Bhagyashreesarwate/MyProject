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

function isValidinput() {
    let input = document.getElementById("num3")
        // TODO
        // check that input is only digits, return true if only digits otherwise return false
    let reg = /^[0-9]+$/;
    if (input.value.match(reg)) {
        return true
    } else {
        alert('Input should be in digits only')
        return false
    }


}

function checkAndUpdateQuestion() {
    if (isValidinput(status === false)) {

    }

    checkAnswer()
    updateQuestion()

}


function showFailedMessage(userAnswer, correctAnswer) {
    let failedMsg = `Sorry --- you said ${userAnswer}\nBut the correct answer is ${correctAnswer}`
    console.error(`Showing error message ...\n${failedMsg}`)
    setTimeout(function() { alert(failedMsg); }, 200);
}

function showPassedMessage(correctAnswer) {
    let succMsg = `Good Job!\nYou got the correct answer\n<${correctAnswer}>`
    console.log(`Showing success message ...\n${succMsg}`)
    setTimeout(function() { alert(succMsg); }, 200);
}

function generateRandomSequence(numberInList) {
    let randomSequence = {
        "sequence": []
    }

    let originalList = []
    for (let i = 1; i <= numberInList; i++) {
        originalList.push(i)
    }

    for (let i = 1; i <= numberInList; i++) {

        let selectedNumber = Math.floor(Math.random() * originalList.length)
        let element = originalList[selectedNumber]
        console.log(`selectedNumber = ${selectedNumber} element = ${element}`)
        originalList = removeElementFromList(originalList, selectedNumber)
        randomSequence.sequence.push(element)
        console.log(originalList)

    }

    console.log("final sequence:" + JSON.stringify(randomSequence))
    return randomSequence.sequence
}

function removeElementFromList(aList, index) {
    let myValue = aList[index]

    function removeNumber(num) {
        return num != myValue
    }

    let filteredList = aList.filter(removeNumber)
    return filteredList

}

function getAnswerlist(correctAnswer) {
    let options = [correctAnswer, correctAnswer - 1, correctAnswer + 1, correctAnswer + 2, correctAnswer - 2]
    return options

}

function getrandomOptionList(correctAnswer) {
    let answerList = getAnswerlist(correctAnswer)
    let randomlist = generateRandomSequence(answerList.length)
    console.log("randomlist" + randomlist)
    let randomAnswerList = []
    randomlist.forEach(element => {
        randomAnswerList.push(answerList[element - 1])
    });
    return randomAnswerList
}


function answerTimerHandler() {

    console.log("got timer event")
    answerTimer.stop()
    let continueTimer = checkAnswerOption()

    if (continueTimer) {
        answerTimer.reset()
        console.log("set timer for next answer")
    }

    console.log("done with correct option")


}

function checkAnswerOption() {
    if (isCurrentOptionCorrect()) {
        alert("you missed correct answer")
        return false
    }
    if (iscurrentoptionLast()) {
        alert("you did not guess any answer")
        return false
    }
    return true

}

function isCurrentOptionCorrect() {

}

function iscurrentoptionLast() {

}

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}

let timeToShowAnswer = 10;
// let answerTimer = setInterval(answerTimerHandler, timeToShowAnswer * 1000);

/**
 * 
 
var answerTimer = new Timer(answerTimerHandler, timeToShowAnswer * 1000);


// switch interval to 10 seconds
answerTimer.reset(10000);

// stop the timer
answerTimer.stop();

// start the timer
answerTimer.start();
*/

function newQuestion() {
    let num1 = getNum1()
    let num2 = getNum2()
    let correctAnswer = getAnswer(num1, num2)
    let optionSequence = generateRandomSequence(correctAnswer)
    optionSequence.forEach(e => {
        showOption(e)
        let continueOrNot = waitForTimerExpireOrUserInteraction()
        if (continueOrNot) {
            console.log("will now give next option")
        } else {
            console.log("options ended or user gave an answer")
        }
    })
}

function waitForTimerExpireOrUserInteraction(){
    
}