let userName = 'Next Level Code'
let log

// log = userName.charAt(0)
// log = userName.indexOf('l')
// log = userName.lastIndexOf('l')
// log = userName.length
// log = userName.trim()
// log = userName.toLowerCase()
// log = userName.toUpperCase()
// log = userName.repeat(5)
// log = userName.startsWith('Next')
// log = userName.endsWith('de')
// log = userName.includes('Level')

let numberPhone = '55 86 99999-9999'

// log = numberPhone.replaceAll(' ', '').replace('-', '')
// log = numberPhone.padStart(20, '5')
// log = numberPhone.padEnd(20, '0')

// const firstName = userName.slice(0, userName.indexOf(' '))
// log = firstName

// const larstName = userName.slice(userName.indexOf(' ') + 1)
// log = larstName

// ---------- METHOD CHAINING -------------
userName = 'marceLO'
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()
log = userName

console.log(log)