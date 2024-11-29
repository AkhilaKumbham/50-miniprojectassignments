function doesRobotMakeCircle(moves)
{
    let x = 0, y = 0;
    moves = moves.toUpperCase();
    for (let move of moves) {
        switch (move) {
            case 'U': 
                y += 1;
                break;
            case 'D': 
                y -= 1;
                break;
            case 'L': 
                x -= 1;
                break;
            case 'R': 
                x += 1;
                break;
            default:
                console.log(`Invalid move: ${move}`);
        }
    }
    return x === 0 && y === 0;
}
let moves = prompt("Enter the robot's moves (e.g., LR, UD, udrl):");
if (moves) {
    let result = doesRobotMakeCircle(moves);
    document.write(`<h3>Input: ${moves}</h3>`);
    document.write(`<h3>Output: ${result ? "True" : "False"}</h3>`);
} 
else {
    document.write("<h3>No input provided!</h3>");
}