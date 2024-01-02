const btnOne = document.querySelector('.btn-one')
const btnTwo = document.querySelector('.btn-two')
const btnThree = document.querySelector('.btn-three')
const btnFour = document.querySelector('.btn-four')

const answerOne = document.querySelector('.answer one')
const answerTwo = document.querySelector('.answer two')
const answerThree = document.querySelector('.answer three')
const answerFour = document.querySelector('.answer four')

btnOne.addEventListener('click', () => {
    whichOne(btnOne, answerOne)
    // btnOne.src = '/imgs/icon-minus.svg'
})

function whichOne(source, answer) {
    if (source.src == '/imgs/icon-plus.svg') {
        source.src = '/imgs/icon-minus.svg'
        answer.style.display = 'block'
    }
    else if (source.src == '/imgs/icon-minus.svg') {
        source.src = '/imgs/icon-plus.svg'
        answer.style.display = 'none'
    }
}