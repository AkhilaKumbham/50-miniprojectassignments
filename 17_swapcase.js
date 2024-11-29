function invert(str1) {
    return str1.split('').map(c => {
        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    }).join('');
}

let input =prompt("Enter string")
let output = invert(input);
document.write(output);