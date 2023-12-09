const fsP = require("fs/promises");

async function main() {
    const input = await fsP.readFile("./day_1/input.txt", "utf8");
    const inputArr = input.split('\n');

    let total = 0;

    for (let code of inputArr) {

        let digits = "";

        for (let i = 0; i < code.length; i++) {
            const convertedNumber = Number(code[i])
            if (!isNaN(Number(code[i]))) {
                digits += code[i];
                break;
            }
        }

        for (let i = code.length - 1; i >= 0; i--) {
            const convertedNumber = Number(code[i])
            if (!isNaN(Number(code[i]))) {
                digits += code[i];
                break;
            }
        }

        total += Number(digits);
    }

    console.log(total);
}

main()