//efectoTablas
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

//efectoForm
$(document).on('knack-view-render.view_4034', function () {
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

//botónExaminar
$(document).on('knack-view-render.view_4034', function() {
    const view = $('#view_4034');
    const input = view.find('#field_3158_upload');
    // evitaDuplicados
    if (!input.length || view.find('.custom-upload-btn').length) return;
    //ocultaInputNativoSoloEnEstaVista
    input.hide();
    //creaBotónPersonalizado
    input.after(`
        <label for="field_3158_upload" class="custom-upload-btn">
            Examinar...
        </label>
    `);
  
    //detectCambioDeArchivo
    input.on('change', function () {
        const fileName = this.files && this.files.length
            ? this.files[0].name
            : 'Sin archivo seleccionado';
        view.find('.custom-file-name').text(fileName);
    });
});
