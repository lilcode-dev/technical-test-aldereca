const correctAnswers = {
    question1: 'Santo Domingo',
    question2: '6',
    question3: '10',
    question4: '9',
    question5: '100',
}

document
    .querySelector('form')
    .addEventListener('submit', (e) => e.preventDefault())

const sendAnswers = (e) => {
    const selectOptions = JSON.parse(localStorage.getItem('selects'))
    e.preventDefault()
    let inputSelect
    const inputs = document.querySelectorAll('input')
    for (const input of inputs) {
        if (input.checked) {
            inputSelect = input.previousSibling.textContent.trim()
        }
    }
    if (inputSelect == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe seleccionar una opcion',
        })
    } else {
        selectOptions.question5 = inputSelect
        localStorage.setItem('selects', JSON.stringify(selectOptions))
        let puntos = 0
        let arrCorrect = Object.keys(correctAnswers).map(
            (key) => correctAnswers[key]
        )
        let arrAnswers = Object.keys(selectOptions).map(
            (key) => selectOptions[key]
        )
        for (let i = 0; i < arrCorrect.length; i++) {
            if (arrCorrect[i] == arrAnswers[i]) {
                puntos++
            }
        }
        Swal.fire({
            title: 'Resultado',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            text: `${puntos} preguntas correctas de ${arrCorrect.length}`,
        })
    }
}

document.querySelector('#reset').addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('selects')
    window.location.href = '../../'
})

// double click event compatible with mobile and pc
let clicks = 0
document.querySelector('#send').addEventListener(
    'click',
    (e) => {
        clicks++
        if (clicks === 1) {
            oneClickTimer = setTimeout(() => {
                clicks = 0;
            }, 300)
        } else if (clicks === 2) {
            clearTimeout(oneClickTimer)
            clicks = 0
            sendAnswers(e)
        }
    },
    false
)
