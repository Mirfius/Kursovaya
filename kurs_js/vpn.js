"use strict";
/* */

while (true) {
    let answer = prompt("Вы знакомы с vpn?    напишите 'да' если знакомы.", "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Сначала ознакомьтесь с VPN");
    }
}

while (true) {
    let answer = prompt("Вы берете на себя ответственность за использование ресурсов из закртых источников и возможное нарушение авторского права? напишите 'да' если согласны.");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Без вашего согласия страница не откроется");
    }
}



let button = document.querySelector(".red__button");  /*находим красную кнопку */
let button1 = document.querySelector(".bad__button");  /*находим красную кнопку */
button.addEventListener("click", event => {     /*всякий раз когда кликаем */
    if(button.classList.contains("active")){
        button.style.backgroundColor = "gray";
        button.style.color = "aliceblue";
        button.classList.remove("active");
    } else{
        button.style.backgroundColor = "green";
        button.style.color = "green";
        button.classList.add("active"); 
        delactive1(button1);
    }
});
button1.addEventListener("click", event => {     /*всякий раз когда кликаем */
if(button1.classList.contains("active")){
    button1.style.backgroundColor = "gray";
    button1.style.color = "aliceblue";
    button1.classList.remove("active");
    } else{
        button1.style.backgroundColor = "red";
        button1.style.color = "red";
        button1.classList.add("active"); 
        delactive1(button);
    }
});

function delactive1(button) {
    button.style.backgroundColor = "gray";
    button.style.color = "aliceblue";
    button.classList.remove("active");
  }



