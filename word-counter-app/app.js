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
    var textArea = document.querySelector('textarea')
    var wordsCount = document.querySelector('#words')
    var charsCount = document.querySelector('#chars')

    textArea.addEventListener('input', function (e) {
        const text = e.target.value.trim()
        console.log({ text })
        rendertext(wordsCount, handleWord(text))
        rendertext(charsCount, handleChar(text))

    })

}

init()