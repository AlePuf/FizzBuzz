for (let index = 1; index <= 100; index++) {
    let printed = 0;
    if (index % 11 == 0) {
        console.log("Bong");
        continue;
    }
    if (index % 3 == 0) {
        process.stdout.write("Fizz");
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
    console.log();
}
