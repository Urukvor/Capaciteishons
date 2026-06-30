console.log("capaciteishon.js cargado correctamentexd");


// ===============================
// EFECTO TABLA VIEW 4039
// ===============================

$(document).on('knack-view-render.view_4039', function() {

  console.log("Vista 4039 cargada");

  $('#view_4039 tbody tr').each(function(index) {

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


// ===============================
// EFECTO TABLA VIEW 4035
// ===============================

$(document).on('knack-view-render.view_4035', function() {

  console.log("Vista 4035 cargada");

  $('#view_4035 tbody tr').each(function(index) {

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


// ===============================
// EFECTO FORMULARIO VIEW 4034
// ===============================

$(document).on('knack-view-render.view_4034', function () {

  console.log("Vista 4034 cargada");


  $('#view_4034')
    .css({
      opacity: 0,
      transform: 'translateY(20px)'
    })
    .animate({
      opacity: 1
    }, 400);


  setTimeout(function () {

    $('#view_4034').css({
      transform: 'translateY(0)',
      transition: 'all .4s ease'
    });

  }, 50);


});


// ===============================
// BOTÓN EXAMINAR PERSONALIZADO
// ===============================

$(document).on('knack-view-render.view_4034', function() {


  setTimeout(function(){


    const view = $('#view_4034');

    const input = view.find('#field_3158_upload');


    console.log("Input archivo encontrado:", input.length);


    // evita duplicados
    if (!input.length || view.find('.custom-upload-btn').length) {
        return;
    }


    // oculta input nativo
    input.hide();


    // crea botón
    input.after(`

        <label for="field_3158_upload" class="custom-upload-btn">
            Examinar...
        </label>

    `);



    // muestra nombre del archivo
    input.on('change', function () {


        const fileName = this.files && this.files.length

            ? this.files[0].name

            : 'Sin archivo seleccionado';


        view.find('.custom-file-name').text(fileName);


        console.log("Archivo seleccionado:", fileName);


    });



  },500);


});
