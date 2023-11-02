const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

const result = document.querySelector('.result')

const userImg = document.querySelector('.user-img')
const computerImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp

// function rockBtnClick() {
//     result.innerText = 'clicked rock'
// }

// function paperBtnClick() {
//     result.innerText = 'clicked paper'
// }

// function scissorsBtnClick() {
//     result.innerText = 'clicked scissors'
// }


rockBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + rockBtn.id + '.png'
    // result.style.color = 'red'
    // If using a hyph. word then use caps background-color --> backgroundColor
    compChoice()
    result.innerText = comp
    winLose(rockBtn.id)
})
paperBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + paperBtn.id + '.png'
    compChoice()
    result.innerText = comp
    winLose(paperBtn.id)
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + scissorsBtn.id + '.png'
    compChoice()
    result.innerText = comp
    winLose(scissorsBtn.id)
})


function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    computerImg.src = '../imgs/rps_imgs/' + comp + '.png'
}

function winLose(userChoice) {
    console.log(comp, userChoice)
}