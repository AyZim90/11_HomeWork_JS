let age;
while (true) {
  age = prompt('Salam! Zəhmət olmasa yaşınızı daxil edin:');
  
  // Если пользователь нажал "Отмена" или не ввел возраст, прерываем цикл
  if (age === null || age === "") {
    alert('Siz yaşınızı daxil etmədiniz. Yenidən cəhd edin.');
  } else {
    age = parseInt(age);
    if (!isNaN(age) && age >= 0) {
      break; 
    } else {
      alert('Yaşınızı rəqəm ilə daxil edin.');
    }
  }
}
if (age < 18) {
  alert('Yaşınız 18-dən kiçikdir. Bu səyfəyə girişiniz məhdudlaşdırılmışdır!');
} else {
  window.location.href = 'https://www.opennet.ru/docs/jsmethod/jsmethod.html';
}















// while (true) {
// var age = prompt("Salam! Zəhmət olmasa yaşınızı daxil edin:");
// age = parseInt(age);

// if (age < 18) {
//     alert("Yaşınız 18-dən kiçikdir. Bu səyfəyə girişiniz məhdudlaşdırılmışdır!");
// } else {
//     var userName = prompt("Adınızı daxil edin:");
    
//     if (userName) {
//     alert("Salam, " + userName + "! Saytımıza xoş gəlmisiniz!");
//     var welcomePage = window.open("", "_blank");
//     welcomePage.document.write("<h1>WELCOME!</h1>");
//     break;
// }
// else {
//     alert("😞");
// }
// }
// }
