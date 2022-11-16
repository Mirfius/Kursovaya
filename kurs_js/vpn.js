while (true) {
    let answer = prompt("Желаете пройти регистрацию на сайте?", "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Попробуй ещё раз");
    }
}

while (true) {
    let login = prompt("Введите ваш логин");
    let password;
    if ((login == "Админ" ) || (login == "админ")|| (login == "admin")) {
        while(true){
            password = prompt("Введите пароль");
            if (!password) {
                alert("Отменено");
                break;
            } else if (password == "1234") {
                alert("Приветствую модератор!");
                break;
            } else {
                alert("Неверный пароль");
            }
        }
        break;
    } else if (!login) {
        alert("Отменено");
        break;
    } else {
        alert("Я вас не знаю");
    }
}
