function mySeasons() {
    var month = myRand(1,12);
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log("Winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Summer");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Spring");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Autumn");
            break;
        default:
            console.log("Error");
            break;
    }
}
