  $( ".btn-platilla" ).click(function() {
    $( ".entrenador" ).show();
    $( ".defensa" ).show();
    $( ".medio" ).show();
    $( ".delantero" ).show();
    $( ".portero" ).show();
  });

  $( ".btn-entrenador" ).click(function() {
    $( ".entrenador" ).show();
    $( ".defensa" ).hide();
    $( ".medio" ).hide();
    $( ".delantero" ).hide();
    $( ".portero" ).hide();
  });

  $( ".btn-portero" ).click(function() {
    $( ".entrenador" ).hide();
    $( ".defensa" ).hide();
    $( ".medio" ).hide();
    $( ".delantero" ).hide();
    $( ".portero" ).show();
  });

  $( ".btn-defensa" ).click(function() {
    $( ".entrenador" ).hide();
    $( ".defensa" ).show();
    $( ".medio" ).hide();
    $( ".delantero" ).hide();
    $( ".portero" ).hide();
  });

  $( ".btn-medio" ).click(function() {
    $( ".entrenador" ).hide();
    $( ".defensa" ).hide();
    $( ".medio" ).show();
    $( ".delantero" ).hide();
    $( ".portero" ).hide();
  });

  $( ".btn-delantero" ).click(function() {
    $( ".entrenador" ).hide();
    $( ".defensa" ).hide();
    $( ".medio" ).hide();
    $( ".delantero" ).show();
    $( ".portero" ).hide();
  });

  $( ".clasificacion").show();
  $( ".fair").hide();

  $( ".btn-clasificacion" ).click(function() {
    $( ".clasificacion").show();
    $( ".fair").hide();
  });

  $( ".btn-fair" ).click(function() {
    $( ".clasificacion").hide();
    $( ".fair").show();
  });

  $( ".goles").show();
  $( ".asis").hide();

  $( ".btn-goles" ).click(function() {
    $( ".goles").show();
    $( ".asis").hide();
  });

  $( ".btn-asis" ).click(function() {
    $( ".goles").hide();
    $( ".asis").show();
  });