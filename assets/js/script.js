//A função desse código  é controlar a interação com o menu da navegação da página. 


// Obtém referências aos elementos HTML correspondentes aos links do menu.
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");

// Obtém referências aos elementos HTML correspondentes às seções da página.
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");

// Esta função remove a classe "selected" dos links do menu e a classe "view" das seções da página.
function removeClass() {

    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');

    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
}

// Sessão que adiciona um evento de clique para cada link.

getAbout.addEventListener('click', function (e) {
    // Verifica se a largura da janela é maior que 1040 pixels.
    if (window.innerWidth > 1040) {
        // Impede o comportamento padrão do link (navegação para outra página).
        e.preventDefault();
        // Remove as classes das seções e links.
        removeClass();
        // Adiciona a classe "view" à seção "about" e a classe "selected" ao link "getAbout".
        about.classList.add('view');
        getAbout.classList.add('selected');
    }
});

// Conforme no exemplo acima, segue a mesma lógica para os demais

getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})

getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})
