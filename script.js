const questionsAndAnswers = {
    'В каком году был создан JavaScript': ['1996', '1996 год', '1996г'],
    'Как называется строготипизированный JavaScript': ['typescript', 'ts'],
    'Как называется движок, который отвечает за работу JS в браузере': ['v8']
}

const questions = Object.keys(questionsAndAnswers)
const answers = Object.values(questionsAndAnswers)
const container = document.querySelector('.questions')
const btnSubmit = document.querySelector('.submit')
const resultContainer = document.querySelector('.result-container');
const points = document.querySelector('.number');
questions.forEach((question, index) => {
    const copy = document.querySelector('.question').cloneNode(true)
    
    copy.querySelector('.text').textContent = `${index + 1}.${question}?`
    copy.querySelector('input').dataset.index = index
    copy.style.display = 'block'
    container.append(copy)
})
// NodeList != Array
const buttons = [...document.querySelectorAll('.check')].slice(1)
let countPoint = 0
buttons.forEach((button) => {
    button.onclick = () => {
        const input = button.previousElementSibling
        const userAnser = input.value
        const correctAnswer = answers[input.dataset.index]
        const result = button.nextElementSibling
        if (correctAnswer.includes(userAnser.toLowerCase())) {
            result.textContent = 'Правильно'
            result.style.color = 'green'
            countPoint++
            points.textContent = countPoint
          
        }
        else {
            result.textContent = 'Неправильно'
            result.style.color = 'red'
        }
        input.disabled = true
        button.disabled = true
        button.remove()
        const allButtonsDisabled = buttons.every(button => button.disabled)
        if (allButtonsDisabled) {
            console.log(resultContainer.style.display = 'block');
            resultContainer.style.display = 'block'
        }
    }
})

btnSubmit.onclick = () => {
    location.reload();
}