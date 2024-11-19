const body = document.querySelector('body');
const b = document.querySelector('.botaoModo');
const projMeio = document.querySelector('.capa-meio');
let assinaturaApresentacao = document.querySelector('.assinaturaApresentacao')

b.addEventListener('click', () => {
    if(body.classList.contains('body-back--white')) {
        body.classList.replace('body-back--white', 'body-back--dark');
        b.classList.replace('fa-star-and-crescent', 'fa-sun');
        b.style.backgroundColor = '#ffa500';
        assinaturaApresentacao.src = 'img/Pessoal/Assinatura-black.jpg'
        assinaturaApresentacao.style.mixBlendMode = 'normal'
    } else {
        body.classList.replace('body-back--dark', 'body-back--white');
        b.classList.replace('fa-sun', 'fa-star-and-crescent');
        b.style.backgroundColor = '#0000AD';
        assinaturaApresentacao.src = 'img/Pessoal/Assinatura.jpg'
        assinaturaApresentacao.style.mixBlendMode = 'multiply'
    }
});

document.querySelector('.bmsg').addEventListener('click', ()=> {
    document.querySelectorAll('input').forEach( i => {
        i.value = '';
    });
    document.querySelector('.inpt-msg').value = '';
});

if(window.matchMedia("(max-width: 760px)")) {
    projMeio.classList.replace('capa-meio', 'capa');
}
 