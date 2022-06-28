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

function checkIfArg(n: number, args: Array<number>) {
    for (let i = 0; i < args.length; i++) {
        if (n == args[i]) {
            return 1;
        }
    }
    return 0;
}

function check(n: number, d: number, s: string, args: Array<number>) {
    let found = checkIfArg(d, args);
    if (n % d == 0 && found == 1) {
        process.stdout.write(s);
        return 1;
    }
    return 0;
}

function check_11_13(n: number, s1: string, s2: string, args: Array<number>) {
    let found_11 = checkIfArg(11, args);
    if (n % 11 == 0 && found_11 == 1) {
        let found_13 = checkIfArg(13, args);
        if (n % 13 == 0 && found_13 == 1) {
            console.log(s1);
        } else {
            console.log(s2);
        }
        return 1;
    }
    return 0;
}

rl.question('Insert number: ', (answer) => {
    const myArgs = process.argv.slice(2);
    let numArgs = [];
    for (let i = 0; i < myArgs.length; i++) {
        numArgs.push(parseInt(myArgs[i]));
    }
    let n = Number(answer);
    for (let index = 1; index <= n; index++) {
        let printed = 0;
        if (index % 17 == 0) {
            printed = max(printed, check_11_13(index, "BongFezz", "Bong", numArgs));
            if (printed == 1) {
                continue;
            }
            printed = max(printed, check(index, 7, "Bang", numArgs));
            printed = max(printed, check(index, 5, "Buzz", numArgs));
            printed = max(printed, check(index, 13, "Fezz", numArgs));
            printed = max(printed, check(index, 3, "Fizz", numArgs));
        } else {
            printed = max(printed, check_11_13(index, "FezzBong", "Bong", numArgs));
            if (printed == 1) {
                continue;
            }
            printed = max(printed, check(index, 3, "Fizz", numArgs));
            printed = max(printed, check(index, 13, "Fezz", numArgs));
            printed = max(printed, check(index, 5, "Buzz", numArgs));
            printed = max(printed, check(index, 7, "Bang", numArgs));
        }
        if (printed == 0) {
            process.stdout.write(index.toString());
        }
        console.log();
    }
    rl.close();
});