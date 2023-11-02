const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_/+"


const setpass = document.getElementById("setpass")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("uppercasee")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("numberInput")
const symbolInput = document.getElementById("symbolInput")


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

// getRandomData();

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    setpass.innerText = truncateString(password, totalChar.value);

}
generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}



