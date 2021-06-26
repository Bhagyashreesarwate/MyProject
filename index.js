let r1 = 1;


let r2 = 2;


function myFunction() {
    let userAnswer = document.getElementById("answer").getAttribute("value");
    console.log(userAnswer);
    console.log("Values", r1, r2);
    let correctAnswer = r1 + r2;
    validateAnswer(userAnswer, correctAnswer);
    generateNewQuestion();

}

function validateAnswer(userAnswer, correctAnswer) {
    console.log(`useranswer=${userAnswer},correctanswer${correctAnswer}`);
    if (userAnswer == correctAnswer) {
        alert("congratulations");
    } else {
        alert("oops the correct answer is " + correctAnswer);
    }
}

function generateNewQuestion() {
    r1 = Math.floor(Math.random() * 100);
    document.getElementById("first").value = r1;
    console.log(`value of first set to ${r1}`);

    r2 = Math.floor(Math.random() * 100);
    document.getElementById("second").value = r2;
    console.log(`value of second set to ${r2}`);
}