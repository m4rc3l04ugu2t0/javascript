function rollDice() {
    const numberOfDice = document.querySelector('#number-of-dice').value
    const diceResult = document.querySelector('.dice-result')
    const diceImage = document.querySelector('.dice-images')
    const values = []
    const images = []

    for (let i = 0; i < numberOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="../images/dice/dice (${value}).png" alt="Dice ${value}" />`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImage.innerHTML = images.join('')
}