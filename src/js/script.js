//========== ARROW UP BUTTON ==========//
const arrowUpButton = document.getElementById('arrow-up-button');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUpButton.style.display = "block";
  } else {
    arrowUpButton.style.display = "none";
  }
};

arrowUpButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//========== HERO TEXT ==========//
const heroText = document.getElementById('hero-text');
const heroTextContent = 'Aspiring Full Stack Developer';
let count = 1;
let speed = 100;

writeText();

function writeText(){
    heroText.innerHTML = heroTextContent.slice(0, count) + ' <i class="fa fa-code" aria-hidden="true"></i>';
    count++;

    if (count > heroTextContent.length) {
        count = 1;
    }
    setTimeout(writeText, speed);
}

//========== CONTACT FORM VALIDATION ==========//
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const companyInput = document.getElementById('company');
const messageInput = document.getElementById('message');
const formErrorMessage = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' || companyInput.value === '' || messageInput.value === '') {
        formErrorMessage.innerText = 'You must fill in all of the fields.';
        formErrorMessage.style.background = '#dc3545';
        formErrorMessage.style.marginBottom = '10px';
        hideMessage();
    } else if (!nameInput.value.match(/^[{3}a-z ,.'-]+$/i)) {
        formErrorMessage.innerText = 'Please enter a valid name.';
        formErrorMessage.style.background = '#dc3545';
        formErrorMessage.style.marginBottom = '10px';
        formErrorMessage.style.width = '50%';
        hideMessage();
    } else if (!emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        formErrorMessage.innerText = 'Please enter a valid email address.';
        formErrorMessage.style.background = '#dc3545';
        formErrorMessage.style.marginBottom = '10px';
        formErrorMessage.style.width = '65%';
        hideMessage();
    } else if (!companyInput.value.match(/^[{3}a-z ,.'-]+$/i)) {
        formErrorMessage.innerText = 'Company name should only contain letters.';
        formErrorMessage.style.background = '#dc3545';
        formErrorMessage.style.marginBottom = '10px';
        formErrorMessage.style.width = '80%';
        hideMessage();
    } else {
        form.submit();
    }   
})

function hideMessage(){
    setTimeout(() => {
        formErrorMessage.innerText = '';
        formErrorMessage.style.background = 'transparent';
        formErrorMessage.style.marginBottom = 0;
    }, 3000)
}

//========== FORM BUTTON CURSOR ==========//
const formButton = document.querySelector('.submit');
formButton.addEventListener('mouseover', () => {
    if (nameInput.value === '' || emailInput.value === '' || companyInput.value === '' || messageInput.value === '') {
        formButton.style.cursor = 'not-allowed';
    } else {
        formButton.style.cursor = 'pointer';
    }
})

//========== FORM INPUT PLACEHOLDER ==========//
nameInput.addEventListener('mouseover', () => {
    nameInput.placeholder = 'Enter your name';
})

nameInput.addEventListener('mouseleave', () => {
    nameInput.placeholder = 'Name';
})

emailInput.addEventListener('mouseover', () => {
    emailInput.placeholder = 'Enter your email address';
})

emailInput.addEventListener('mouseleave', () => {
    emailInput.placeholder = 'Email';
})

companyInput.addEventListener('mouseover', () => {
    companyInput.placeholder = 'Enter your company or location';
})

companyInput.addEventListener('mouseleave', () => {
    companyInput.placeholder = 'Company';
})

messageInput.addEventListener('mouseover', () => {
    messageInput.placeholder = 'Write your message';
})

messageInput.addEventListener('mouseleave', () => {
    messageInput.placeholder = 'Message';
})