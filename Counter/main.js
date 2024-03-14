const increment =  document.querySelector('#increment-btn')
const decrease = document.querySelector('#decrease-btn')
const reset = document.querySelector('#reset-btn')
const count = document.querySelector('#count')
let accumulator = 0

const handleClickIncrement = (event) => {
    count.innerHTML = accumulator += 1
}

const handleClickDecrease = (event) => {
    count.innerHTML = accumulator -= 1
}

const handleClickReset = (event) => {
    accumulator = 0
    count.innerHTML = accumulator
}

increment.onclick = handleClickIncrement
decrease.onclick = handleClickDecrease
reset.onclick = handleClickReset
