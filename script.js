$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje")
let error = document.getElementById("error");


function enviarComentario(){
    if(nombre.value === null || nombre.value === "" ){
        swal("¡Ups!", "Ingresa tu nombre", "error")
    }

    else if(email.value === null || email.value === ""){
       swal("¡Ups!", "No te olvides de incluir tu email.", "error")
    }
    
    else if(mensaje.value === null || mensaje.value === "") {
        swal("Algo falta.", "No te olvides de dejar un comentario.", "error")
    }
    
    else{
        return swal("¡Genial!", "Enviaste un comentario", "success");
 }
}


function mensajeDescarga(){
    swal("Gracias por descargar mi CV", "Si tienes dudas, deja un comentario en la sección Contacto", "success")
}