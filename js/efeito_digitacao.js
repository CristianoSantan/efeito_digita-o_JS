// ------------------------------------------------- Só para a inserção do html
const insercaoHtml = () => {
    const app = document.querySelector('.app')
    const html = `
    <div class="intro">
        <h1 class="fixed-text">Eu</h1>
        <h1 data-js="typing" class="typing"></h1>
    </div>
    `;
    app.innerHTML += html
}

insercaoHtml()

// ---------------------------------------------------------------------------- Código

const typing = document.querySelector('[data-js="typing"]')
const messages = ['sou fluente em JS', 'construo aplicações web com JS puro']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ""
let currentCharacters = ""

const type = () => {
    const shouldTypeFirstMessage = messageIndex === messages.length
    if (shouldTypeFirstMessage) {
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    const shouldChangeMessageToBeTyped = 
        currentCharacters.length === currentMessage.length

    if (shouldChangeMessageToBeTyped) {
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 200)