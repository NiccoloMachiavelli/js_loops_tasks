function myDaysOfWeek(num) {
    var days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
    switch (num) {
        case 1:
            return console.log(days[0]);
            break;
        case 2:
            return console.log(days[1]);
            break;
        case 3:
            return console.log(days[2]);
            break;
        case 4:
            return console.log(days[3]);
            break;
        case 5:
            return console.log(days[4]);
            break;
        case 6:
            return console.log(days[5]);
            break;
        case 7:
            return console.log(days[6]);
            break;
        default:
            console.log('Error');
            break;
    }
}