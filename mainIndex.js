$(document).ready(function () {
    $('#Desaparecidos').DataTable({
        dom: '<"toolbar">frtip',
    });
 
    $('div.toolbar').html('<b>Alerta AMBER Safey: Desaparecidos</b>');
});

$(document).ready(function () {
    $('#Incidentes').DataTable({
        dom: '<"toolbar">frtip',
    });
 
    $('div.toolbar').html('<b>Incidentes</b>');
});