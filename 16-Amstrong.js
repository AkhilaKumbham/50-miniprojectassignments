let rangeStart = parseInt(prompt("Enter the starting number of the range:"));
let rangeEnd = parseInt(prompt("Enter the ending number of the range:"));


for (let currentNumber = rangeStart; currentNumber <= rangeEnd; currentNumber++) {
    let armstrongSum = 0;
    let tempNumber = currentNumber;
    let digitCount = String(currentNumber).length;
    while (tempNumber > 0) {
        let lastDigit = tempNumber % 10;
        armstrongSum += lastDigit ** digitCount;
        tempNumber = Math.floor(tempNumber / 10);
    }
    if (armstrongSum === currentNumber) {
        document.write(currentNumber + "");
    }
}
