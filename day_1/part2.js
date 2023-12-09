const fsP = require("fs/promises");

async function main() {
    const input = await fsP.readFile("./day_1/input.txt", "utf8");
    const inputArr = input.split('\n');

    const spelledNums = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    const numKeys = Object.keys(spelledNums);

    let total = 0;

    for (let code of inputArr) {

        let digits = "";

        for (let i = 0; i < code.length; i++) {
            const convertedNumber = Number(code[i]);

            const threeLetter = code.substring(i, i + 3);
            const fourLetter = code.substring(i, i + 4);
            const fiveLetter = code.substring(i, i + 5);

            if (!isNaN(convertedNumber)) {
                digits += code[i];
                break;
            } else if (numKeys.includes(threeLetter)) {
                digits += spelledNums[threeLetter];
                break;
            } else if (numKeys.includes(fourLetter)) {
                digits += spelledNums[fourLetter];
                break;
            } else if (numKeys.includes(fiveLetter)) {
                digits += spelledNums[fiveLetter];
                break;
            }
        }

        for (let i = code.length - 1; i >= 0; i--) {
            const convertedNumber = Number(code[i]);

            const threeLetter = code.substring(i - 2, i + 1);
            const fourLetter = code.substring(i - 3, i + 1);
            const fiveLetter = code.substring(i - 4, i + 1);

            if (!isNaN(convertedNumber)) {
                digits += code[i];
                break;
            } else if (numKeys.includes(threeLetter)) {
                digits += spelledNums[threeLetter];
                break;
            } else if (numKeys.includes(fourLetter)) {
                digits += spelledNums[fourLetter];
                break;
            } else if (numKeys.includes(fiveLetter)) {
                digits += spelledNums[fiveLetter];
                break;
            }
        }

        total += Number(digits);
    }

    console.log(total);
}

main()