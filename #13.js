function myPyramid(num) {
    for (var y = 1;y <= num;y++) {
        for (var x = 1;x <= y;x++) {
            document.write(' ' + y + ' ');
            //console.log(y);
        }
        document.write('<br>');
    }
}