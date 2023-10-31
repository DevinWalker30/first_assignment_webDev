const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

const result = document.querySelector('.result')

const userImg = document.querySelector('.user-img')
const computerImg = document.querySelector('.comp-img')

function rockBtnClick() {
    result.innerText = 'clicked rock'
}

function paperBtnClick() {
    result.innerText = 'clicked paper'
}

function scissorsBtnClick() {
    result.innerText = 'clicked scissors'
}

rockBtn.addEventListener('click', rockBtnClick)
paperBtn.addEventListener('click', paperBtnClick)
scissorsBtn.addEventListener('click', scissorsBtnClick)