function myStr() {
    var str = '12345';
    switch (str[0]) {
        case '1':
        case '2':
        case '3':
            console.log("Yes!");
            break;
        default:
            console.log("Nope!");
            break;
    }
}

