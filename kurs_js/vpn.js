"use strict";
/* */

    let answer = prompt("Вы знакомы с vpn?    Напишите 'да' если знакомы.", "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        
        
        
        
         let answer1 = prompt("Вы берете на себя ответственность за использование ресурсов из закрытых источников и возможное нарушение авторского права? Напишите 'да' если согласны.","");
    if ((answer1 == "Да") || (answer1 == "да")|| (answer1 == "yes")) {
        alert("Круто");
       
    }
    else {
        alert("Страница не откроется, если вы не дадите согласие.");
        ggg();
        
    }
        
    }
    else {
        alert("Сначала изучите VPN.");
        ggg();
       
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
function ggg() {

    window.location.replace("https://mirfius.github.io/Kursovaya/kurs_root.html");
   

    window.location.replace("https://mirfius.github.io/Kursovaya/kurs_root.html");
   
 
    
  }


