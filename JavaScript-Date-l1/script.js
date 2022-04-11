// Kullanıcı Bilgisi
let userName = document.querySelector('#userName');
let userNameValue = prompt('Lütfen Adınızı Giriniz:');
userName.innerHTML = userNameValue;


// Tarih Bilgisi

let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function dateObject() {
    let clock = document.querySelector('#clock');
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()} : ${days[date.getDay()]}`;
}

setInterval(dateObject, 1000);