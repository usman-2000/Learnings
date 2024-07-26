function rendertext(ele, text) {
    return ele.innerHTML = text
}

function handleWord(text) {
    var wordsCount = text.split(' ')
    return wordsCount.length
}

function handleChar(text) {
    var charsCount = text.length
    return charsCount
}

function init() {
    console.log("chal raha")
    var textArea = document.querySelector('textarea')
    var calculateBtn = document.querySelector("#calculate")
    var wordsCount = document.querySelector('#words')
    var charsCount = document.querySelector('#chars')

    // textArea.addEventListener('input', function (e) {
    //     const text = e.target.value.trim()
    //     console.log({ text })
    //     rendertext(wordsCount, handleWord(text))
    //     rendertext(charsCount, handleChar(text))

    // })

    var text;
    textArea.addEventListener('input', function (e) {
        text = e.target.value
    })

    calculateBtn.addEventListener('click', function () {
        rendertext(wordsCount, handleWord(text))
        rendertext(charsCount, handleChar(text))
    })



}

init()