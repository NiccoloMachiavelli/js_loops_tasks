function myStrSum() {
    var str = '123321';
    var sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    var sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
    if (sum1 == sum2) {
        console.log("Yes!");
    }
    else {
        console.log("Nope!");
    }
}

