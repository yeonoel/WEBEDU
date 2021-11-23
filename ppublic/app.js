// REALISATION DU FORMULAIRE

let contactForm = document.querySelector('.contact_form');


let nom = document.getElementById('name');
let number = document.getElementById('number');
let message = document.getElementById('message');
let email = document.getElementById('email');


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = {
        nom : nom.value,
        email : email.value,
        number : number.value,
        message : message.value

    }
    //creation dun nouvelle object pour lenvoie des requetes
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            alert('Email a été envoyé');
            nom.value = '';
            email.value = '';
            number.value = '';
            message.value = '';

        }else{
            alert('Email a été envoyé');
            nom.value = '';
            email.value = '';
            number.value = '';
            message.value = '';
        }
    }
    xhr.send(JSON.stringify(formData));
})