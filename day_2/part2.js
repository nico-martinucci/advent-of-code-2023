const fsP = require("fs/promises");

async function main() {
    const input = await fsP.readFile("./day_2/input.txt", "utf8");
    const inputArr = input.split('\n');

    let total = 0;

    for (let game of inputArr) {
        let mins = {
            red: 0,
            green: 0,
            blue: 0
        }

        const reveals = game.split(": ")[1]

        for (let reveal of reveals.split("; ")) {

            for (let count of reveal.split(", ")) {
                const [num, color] = count.split(" ");

                mins[color] = Math.max(mins[color], num)
            }
        }

        let power = 1;

        Object.keys(mins).map(key => power *= mins[key]);

        total += power;
    }

    console.log(total);
}

main();