let inputStr = prompt('Zadejte cislo')
const isDIC = (inputStr) => {
    if (inputStr.length < 11) {
      console.log('min nez 11')
      return false
    }
    if (inputStr.length > 12) {
      return false
    }
    const prefix = inputStr.slice(0, 2)
    if (prefix !== 'CZ') {
      return false
    }
  
    const digits = inputStr.slice(2)
    if (!validator.isInt(digits)) {
      return false
    }
  
    return true
  }
  isDIC(inputStr)
  