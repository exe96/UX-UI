import {options_proyect} from "./tools.js";
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.href;
    console.log(currentPage);                                                                                                                                                                                                http://127.0.0.1:5500/index.html
    if (/*currentPage === 'http://localhost/' || currentPage === 'http://localhost/index.html' ||*/ currentPage == 'http://127.0.0.1:5500/index.html' || currentPage == 'http://127.0.0.1:5500/' || currentPage == '127.0.0.1:5500') {
        // Código específico para la página index.php
        const aikido_action=new options_proyect();
        aikido_action.listener(".akido-action","about.html");
        const cook_action=new options_proyect();
        cook_action.listener(".cook-action","about.html");
        const read_action=new options_proyect();
        read_action.listener(".read-action","about.html");
        const desk_action=new options_proyect();
        desk_action.listener(".desk-action","about.html");
        aikido_action.listener(".i","about.html");
        }
    else if (currentPage === 'http://localhost/about.html' || currentPage === 'http://127.0.0.1:5500/about.html') {
       /* let link = window.document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'about.css';
        */
        //window.document.head.appendChild(link); 
        // Agrega el enlace al elemento head del documento
           
    // Código específico para la página about.php
        // ...
        const logo= new options_proyect();
        logo.listener('.e','index.html');
        logo.listener('.a','index.html');
        logo.listener('.work','index.html');
        logo.listener('.i','about.html');
       
    }else{
        console.log("page not found")
    }
});

//console.log (location.pathname);
//console.log (location.host);
//console.log (location.hostname);
console.log (window.location.href);
//console.log (window.location.search);
//console.log (window.location.hash);
