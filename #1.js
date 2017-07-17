function myDecada() {
    var day = myRand(1,31);
    if (day <= 10) {
        console.log("First decada.");
    }
    if (day > 10 && day <=20) {
        console.log("Second decada.");
    }
    if (day > 20 && day <=31) {
        console.log("Third decada.");
    }
}
