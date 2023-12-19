const fsP = require("fs/promises");

async function main() {
    const input = await fsP.readFile("./day_2/input.txt", "utf8");
    const inputArr = input.split('\n');

    const max = {
        red: 12,
        green: 13,
        blue: 14
    }

    let total = 0;

    for (let game of inputArr) {
        let possibleGame = true;

        const [gameNum, reveals] = game.split(": ")

        for (let reveal of reveals.split("; ")) {

            for (let count of reveal.split(", ")) {
                const [num, color] = count.split(" ");

                if (num > max[color]) {
                    possibleGame = false;
                    break;
                }
            }

            if (!possibleGame) break;
        }

        if (possibleGame) total += +(gameNum.split(" ")[1]);
    }

    console.log(total);
}

main();