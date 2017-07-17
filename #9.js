function myFunc4() {
    var frst = myRand(1,20);
    var sec = myRand(1,10);
    var thrd = myRand(2,10);
    console.log(frst + ' ' + sec + ' ' + thrd);
    ((frst - sec) != 0) ? console.log(((frst - sec) / thrd)):console.log("Exception devided by NULL");
}