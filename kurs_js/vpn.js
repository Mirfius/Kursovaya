"use strict";
while (true) {
    window.location.href = 'file:///C:/html_project/kurs_root.html';
    window.location = 'file:///C:/html_project/kurs_root.html';

    return false;
    let answer = prompt("Вы умеете пользоваться vpn?     Напишите 'да' если умеете. "   , "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Изучите как пользоваться vpn.");
        window.location.href = 'file:///C:/html_project/kurs_root.html';
        window.location = 'file:///C:/html_project/kurs_root.html';

        return false;
        $('#someButton').click(function() {
            window.location.href = '/some/new/page';
            return false;
        });
    }
   
}

while (true) {
    let answer = prompt("Вы берете всю ответственность за использование контента из закрытых источников на себя?     Напишите 'да' если согласны. "   , "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Изучите как пользоваться vpn.");
    }
}