"use strict";
while (true) {
   
    let answer = prompt("Вы умеете пользоваться vpn?     Напишите 'да' если умеете. "   , "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Изучите как пользоваться vpn.");
        window.location.href = './kurs_root.html';
    window.location = './kurs_root.html';

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
        alert("Без согласия вы не попадете на эту страницу.");
          window.location.href = './kurs_root.html';
    window.location = './kurs_root.html';

    return false;
    }
}
