export class button_event{
    create(item,path){
        document.querySelector(item).addEventListener('click', function(){
            window.open(path, '_blank');
          
        })
    }
}

const pdf=new button_event();
document.addEventListener('DOMContentLoaded', function() {
    function intercambiarPosicion(elemento1, elemento2) {
        var padre = elemento1.parentNode;
        var siguienteElemento1 = elemento1.nextSibling;
      
        // Mover elemento2 antes de elemento1
        siguienteElemento1.before(elemento2);
      
        // Mover elemento1 después de elemento2
        padre.insertBefore(elemento1, siguienteElemento1);
      }
    if(sessionStorage.getItem("info")=='.akido-action'){
    const title_aikido='Aplicación web móvil para una escuela de aikido';
    const p_aikido='A continuación  se  podrá ver un pdf que corresponde al caso  practico, donde se ven partes del desarrollo de diseño de la aplicación web para móvil'
    document.querySelector('h2').textContent=title_aikido;
    document.querySelector('.about-p').textContent=p_aikido;
   
    const picture= document.querySelector('.picture-fill');
    picture.style.backgroundImage = "url('../origin/thao.jpg')";
    picture.style.backgroundSize = "cover";
    picture.style.backgroundPosition = "center";
    pdf.create('.about-button',"../pdf/entrega_final-1.pdf");
}else if (sessionStorage.getItem("info")=='.cook-action') {
    const title_cook='Aplicación web para visualizar tutoriales de cocina';
    const p_cook='A continuación  se  podrá ver un pdf que corresponde al caso  practico donde se ven partes del desarrollo de diseño de la aplicación web .'
    document.querySelector('h2').textContent=title_cook;
    document.querySelector('.about-p').textContent=p_cook;
    const picture= document.querySelector('.picture-fill');
    picture.style.backgroundImage = "url('../origin/cook.jpg')";
    picture.style.backgroundSize = "cover";
    picture.style.backgroundPosition = "center";
    pdf.create('.about-button',"../pdf/portfolio-2.pdf");
}else if(sessionStorage.getItem("info")=='.read-action') {
    const title_read='Aplicación multiplataforma para aprender a leer por primera vez';
    const p_read='A continuación  se  podrá ver un pdf que corresponde al caso  practico donde se ven partes del desarrollo de diseño de la aplicación.'
    document.querySelector('h2').textContent=title_read;
    document.querySelector('.about-p').textContent=p_read;
    const picture= document.querySelector('.picture-fill');
    picture.style.backgroundImage = "url('../origin/read.jpg')";
    picture.style.backgroundSize = "cover";
    picture.style.backgroundPosition = "center";
    pdf.create('.about-button',"../pdf/caso-practico-3.pdf");
}else if (sessionStorage.getItem("info")=='.desk-action') {
    //joven-charlando
    const title_desk='Aplicación de escritorio para mensajeria';
    const p_desk='';
    const b_desk='Próximamente';
    document.querySelector('h2').textContent=title_desk;
    document.querySelector('.about-p').textContent=p_desk;
    document.querySelector('.about-button').textContent=b_desk;
    const picture= document.querySelector('.picture-fill');
    picture.style.backgroundImage = "url('../origin/joven-charlando.jpg')";
    picture.style.backgroundSize = "cover";
    picture.style.backgroundPosition = "center";
}else if(sessionStorage.getItem("info")=='.i'){
    var div1 = document.querySelector('.about-col');
    var div2 = document.querySelector('.picture-fill');
    intercambiarPosicion(div1, div2);

    //console.log(parte);
    const title_i='Descubre Más Sobre Mí';
    const p_i="¡Hola! Soy Exequiel Acosta, un desarrollador full-stack. Aunque inicialmente mi interés se inclinaba a construir, mi curiosidad me llevo hacia el diseño que fue un evento que consideró valioso. Actualmente mi enfoque está en mejorar continuamente mis habilidades en el desarrollo web. Si desean conocer más sobre mi experiencia y habilidades, les invito a revisar mi curriculum. Saludos cordiales. La foto es ficticia por ahora."
    document.querySelector('h2').textContent=title_i;
    document.querySelector('.about-p').textContent=p_i;
    const picture= document.querySelector('.picture-fill');
    picture.style.backgroundImage = "url('../origin/person.png')";
    picture.style.backgroundSize = "cover";
    picture.style.backgroundPosition = "center";
    pdf.create('.about-button',"../pdf/Exequiel Acosta Currículum Vitae.pdf");
}else{
    console.log("Tuvimos un problema en about")
}
});

