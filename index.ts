import * as readline from 'readline';

let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function max(a: number, b: number) {
    if (a > b) {
        return a;
    }
    return b;
}

function check(n: number, d: number, s: string) {
    if (n % d == 0) {
        process.stdout.write(s);
        return 1;
    }
    return 0;
}

function check_11_13(n: number, s1: string, s2: string) {
    if (n % 11 == 0) {
        if (n % 13 == 0) {
            console.log(s1);
        } else {
            console.log(s2);
        }
        return 1;
    }
    return 0;
}

rl.question('Insert number: ', (answer) => {
    let n = Number(answer);
    for (let index = 1; index <= n; index++) {
        let printed = 0;
        if (index % 17 == 0) {
            printed = max(printed, check_11_13(index, "BongFezz", "Bong"));
            if (printed == 1) {
                continue;
            }
            printed = max(printed, check(index, 7, "Bang"));
            printed = max(printed, check(index, 5, "Buzz"));
            printed = max(printed, check(index, 13, "Fezz"));
            printed = max(printed, check(index, 3, "Fizz"));
        } else {
            printed = max(printed, check_11_13(index, "FezzBong", "Bong"));
            if (printed == 1) {
                continue;
            }
            printed = max(printed, check(index, 3, "Fizz"));
            printed = max(printed, check(index, 13, "Fezz"));
            printed = max(printed, check(index, 5, "Buzz"));
            printed = max(printed, check(index, 7, "Bang"));
        }
        if (printed == 0) {
            process.stdout.write(index.toString());
        }
        console.log();
    }
    rl.close();
});