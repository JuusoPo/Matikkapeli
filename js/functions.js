let rand_num1 = 0
let rand_num2 = 0
let rising_num1 = ''
let rising_num2 = ''

const getRandomInNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumber = () => {
    rand_num1 = getRandomInNumberInRange(1,10)
    rand_num2 = getRandomInNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const risingNumber = () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {

        rising_num1 = Number(rising_num1 + 1)
    } else {

        rising_num2 = Number(rising_num2 + 1)
    }
    document.querySelector('#num3').innerHTML = rising_num1
    document.querySelector('#num4').innerHTML = rising_num2
}


addEventListener("DOMContentLoaded", () => {
    randomizeNumber()
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Oikein!')  

    } else {
        alert('Väärin!')

    }

    risingNumber()
    randomizeNumber()
    document.querySelector('input').value=''
})
