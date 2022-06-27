import * as readline from 'readline';

let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Insert number: ', (answer) => {
    let n = Number(answer);
    for (let index = 1; index <= n; index++) {
        let printed = 0;
        if (index % 17 == 0) {
            if (index % 11 == 0) {
                if (index % 13 == 0) {
                    console.log("BongFezz");
                } else {
                    console.log("Bong");
                }
                continue;
            }
            if (index % 7 == 0) {
                process.stdout.write("Bang");
                printed = 1;
            }
            if (index % 5 == 0) {
                process.stdout.write("Buzz");
                printed = 1;
            }
            if (index % 13 == 0) {
                process.stdout.write("Fezz");
                printed = 1;
            }
            if (index % 3 == 0) {
                process.stdout.write("Fizz");
                printed = 1;
            }
            if (printed == 0) {
                process.stdout.write(index.toString());
            }
        } else {
            if (index % 11 == 0) {
                if (index % 13 == 0) {
                    console.log("FezzBong");
                } else {
                    console.log("Bong");
                }
                continue;
            }
            if (index % 3 == 0) {
                process.stdout.write("Fizz");
                printed = 1;
            }
            if (index % 13 == 0) {
                process.stdout.write("Fezz");
                printed = 1;
            }
            if (index % 5 == 0) {
                process.stdout.write("Buzz");
                printed = 1;
            }
            if (index % 7 == 0) {
                process.stdout.write("Bang");
                printed = 1;
            }
            if (printed == 0) {
                process.stdout.write(index.toString());
            }
        }
        console.log();
    }
    rl.close();
});