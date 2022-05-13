const input_key = document.querySelector(".input-checker")

const checker = document.querySelector(".checker")
// random number
let correctValue = Math.trunc(Math.random() * 10) + 1

const scoreValue = document.getElementById("score")
let ConvertedScoreValue = Number(scoreValue.textContent)
// console.log(ConvertedScoreValue);

const message_text = document.querySelector(".message")
const main_container = document.querySelector(".main-container")
const lucky_no = document.getElementById("lucky-no")

// highscore value
const highscore = document.getElementById("highscore-value")
const highscoreValue = Number(highscore.textContent)
const warning = document.getElementById("warning-text")

const check = document.querySelector(".check-btn")
correctValue = Math.trunc(Math.random() * 10) + 1
check.addEventListener("click", function () {
  const newVal = input_key.valueAsNumber

    // warning alarm
    // checking if the no is between 1 to 10
    if (newVal < 1 || newVal > 10  ) {
      warning.style.display = "block"
    }
    else if (!newVal) {
      warning.style.display = "block";
      lucky_no.textContent = "Please input a number🤨"
      message_text.textContent = "😔 No number!"
      main_container.style.backgroundColor = "green"
    }
     else {
      warning.style.display = "none"
      // the process
      if (correctValue === newVal) {
        checker.textContent = newVal
        highscore.textContent = newVal
        lucky_no.textContent = "Wow!!! Nice Guess🎉"
        ConvertedScoreValue++
        scoreValue.textContent = ConvertedScoreValue
        //background color change
        main_container.style.backgroundColor = "lawngreen";
        correctValue = Math.trunc(Math.random() * 10) + 1

        //correct text
        message_text.textContent = "💥 Correct number!"
        if (correctValue > highscoreValue) {
          highscore.textContent = correctValue
        }
      }
      else {
        lucky_no.textContent = "😭 Wrong number!"
        ConvertedScoreValue--
        scoreValue.textContent = ConvertedScoreValue

        if (ConvertedScoreValue < 0) {
          ConvertedScoreValue = 0
          scoreValue.textContent = ConvertedScoreValue
          lucky_no.textContent = "🙄Out of Guess...Start New Game🤞🏻";
          input_key.disabled = true;
          check.disabled = true;
        }
        main_container.style.backgroundColor = "lightblue"
        // console.log(scoreValue);
        newVal > correctValue
          ? (message_text.textContent = "📈 Too High")
          : (message_text.textContent = "📉 Too Low")
      }
    }
})

//reset
const reset = document.querySelector(".reset-btn")
reset.addEventListener("click", function () {
  input_key.value = ""
  main_container.style.backgroundColor = "#ff0000a8"
  checker.textContent = "?"
  lucky_no.textContent = "(Get the Lucky number😁)"
  message_text.textContent = "💭Start Guessing..."
  ConvertedScoreValue = 20
  scoreValue.textContent = ConvertedScoreValue
  correctValue = Math.trunc(Math.random() * 10) + 1
  warning.style.display = "none"
  input_key.disabled = false
  check.disabled = false
})
