const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        console.log("bla");
        if(response.ok){
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('_sending')
        }else {
            alert("Что-то пошло не так");
            form.classList.remove('_sending');
        }
        closePopUp();
    } else {
        alert('Корректно заполните обязательные поля');
    }
}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let i = 0; i < formReq.length; i++) {
        const input = formReq[i];

        formRermoveError(input);

        if(input.classList.contains('_email')) {
            if(validateEmail(input)) {
                formAddError(input);
                error++;
            }
        }
        else if(input.classList.contains('_phone')) {
            if(validatePhone(input)) {
                formAddError(input);
                error++;                   
            }
        }
        else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
        } 
        else {
            if (input.value === '') {
                formAddError(input);
                error++;                    
            }
        }           
    }       
    return error;
}

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRermoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

//test e-mail
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(input.value);
}
//test Phone
function validatePhone(input) {
    const re = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    return !re.test(input.value);
}



//pop-up

let openPopUpBtn = document.getElementsByClassName('open-form-button');
let closePopUpBtn = document.getElementById ('close-pop-up');

for (let i = 0; i < openPopUpBtn.length; i++) {
    openPopUpBtn[i].addEventListener('click', () => {
        showPopUp();
    })
}

closePopUpBtn.addEventListener('click', () => {
    closePopUp();
})


function showPopUp() {
    document.getElementById('form-pop-up').classList.add('show');
}

function closePopUp() {
    document.getElementById('form-pop-up').classList.remove('show');
}