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
    const fullName =user.fullname();
    const output = document.getElementById("output");
    output.innerHTML = "This is: " + fullName;
}