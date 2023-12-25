const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLinkLink=addEventListener('click', ()=> { 
   wrapper.classList.add('active'); 
});

loginLinkLink=addEventListener('click', ()=> { 
    wrapper.classList.remove('active'); 
 });

btnpopup=addEventListener('click', ()=> { 
    wrapper.classList.add('active-popup'); 
 });

iconCloseClose=addEventListener('click', ()=> { 
    wrapper.classList.remove('active-popup'); 
 });

