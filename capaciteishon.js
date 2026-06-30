console.log("capaciteishon.js cargado acorrectamente");


// =================================
// EFECTO TABLAS
// =================================

$(document).on('knack-view-render.view_4039 knack-view-render.view_4035', function() {

  $('#view_4039 tbody tr, #view_4035 tbody tr').each(function(index) {

    $(this)
      .css({
        opacity: 0,
        transform: 'translateY(15px)'
      })
      .delay(index * 50)
      .animate({
        opacity: 1
      }, 300);


    setTimeout(() => {

      $(this).css({
        transform: 'translateY(0)',
        transition: 'all 0.3s ease'
      });

    }, index * 50);


  });

});



// =================================
// FUNCIÓN VIEW 4034
// =================================

function cargarView4034() {


  const view = $('#view_4034');


  // si todavía no existe, salir
  if (!view.length) return;



  // -----------------------------
  // efecto formulario
  // -----------------------------

  view
    .css({
      opacity: 0,
      transform: 'translateY(20px)'
    })
    .animate({
      opacity: 1
    }, 400);



  setTimeout(function() {

    view.css({
      transform: 'translateY(0)',
      transition: 'all .4s ease'
    });


  },50);




  // -----------------------------
  // botón Examinar
  // -----------------------------

  const input = view.find('#field_3158_upload');


  // evita duplicados
  if (!input.length || view.find('.custom-upload-btn').length) {
    return;
  }



  // oculta input original
  input.hide();



  // crea botón personalizado
  input.after(`

    <label for="field_3158_upload" class="custom-upload-btn">
        Examinar...
    </label>

  `);



  // detecta archivo seleccionado
  input.on('change', function() {


    const fileName = this.files && this.files.length

      ? this.files[0].name

      : 'Sin archivo seleccionado';



    view.find('.custom-file-name').text(fileName);


  });



}



// =================================
// EVENTO NORMAL KNACK
// =================================

$(document).on('knack-view-render.view_4034', function() {

  cargarView4034();

});




// =================================
// SI EL SCRIPT CARGÓ DESPUÉS
// =================================

$(function(){

  cargarView4034();

});
