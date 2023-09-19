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
}

const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', () => {
    const isConfirmed = confirm('Click OK to change background color');

    if (isConfirmed) {
        document.body.style.backgroundColor = 'black'; 
        document.body.style.transition = "background-color 2s";
    }
});

class UserInfo {
    constructor(ad, soyad, password) {
        this.ad =ad;
        this.soyad = soyad;
        this.password = password;
    }
    fullname() {
        return (this.ad + " " + this.soyad).toUpperCase();
    }
}
function showFullName() {
  const ad = document.getElementById("ad-inp").value;
  const soyad = document.getElementById("soyad-inp").value;
  const password = document.getElementById("password-inp").value;
  const user = new UserInfo(ad, soyad, password);
  const fullName = user.fullname();
  const output = document.getElementById("output");
  output.innerHTML = "Full name: " + fullName + "<br>Password: " + password;
}
showFullName();
