let name1 = document.getElementById('NAME');
let surname1 = document.getElementById('SURNAME');
let mail1 = document.getElementById('MAIL');

function dane ( name1,surname1,mail1 ) {
    name1.value = prompt('Podaj imię');
    surname1.value = prompt('Podaj nazwisko');
    mail1.value = prompt('Podaj swój adres e-mail');
    if (name1.value == ''){
        name1.value = "BŁĄD"
    };
    if (surname1.value == ''){
        surname1.value = ("BŁĄD")
    };
    if (mail1.value == ''){
        mail1.value = ("BŁĄD")
    }
    
}

dane (name1,surname1,mail1);