// Creare una griglia formata da 8x8 quadratini tutti
// bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se
// cliccati diventano rossi, gli altri diventano verdi
// Sopra alla griglia deve esserci un contatore che
// conta quanti rossi e quanti verdi sono stati scoperti

//----------------------------------------------
//CREAZIONE GRIGLIA nxn
var righe = parseInt(prompt('Quante righe?'))
var colonne = parseInt(prompt('Quante colonne?'))

function grid_maker(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      $('.griglia').append('<div class="elem"></div>')//vado a inserire nell html dentro al div griglia quello che voglio, in questo caso altri div, che sono proprio i miei elementi della griglia
    }
  }
  $('.elem').width(385/x)
  $('.elem').height(385/y)
  $('#dim_gr').html('Griglia: ' + x + ' x ' + y)
}

var tabella = grid_maker(righe, colonne)

//------------------------------------------
//ASSEGNAZIONE VERDI

var i = 0;
while (i < 15) {
  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }
  var n= random_int_number(1, (righe * colonne));
  if ($('.griglia div:nth-child(' + n + ')').hasClass('select')) {//di modo che non dia select a un div che ha gia select
  } else {
    $('.griglia div:nth-child(' + n + ')').addClass('select');
    i++//solo se ha dato select a un div che non aveva select, il contatore i va avanti
  }
}

//-------------------------------------------
//FUNZIONE

let count_g = 0;//se non usavo let non sapevo come uscirne
let count_r = 0;

$('.elem').click(function() {
  if ($(this).hasClass('select')) {
    $(this).addClass('red')
    count_r += 1;
  } else {
    $(this).addClass('green')
    count_g += 1;
  }
  console.log(count_g);
  console.log(count_r);
  $('.punteggio_g').html('Numero caselle verdi: ' + count_g)
  $('.punteggio_r').html('Numero caselle rosse: ' + count_r)
});
