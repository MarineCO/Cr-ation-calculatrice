/* Pour changer couleur du texte de l'input*/
// var $input = $('input');
// console.log($input);
// $input.css('color', 'blue');


// CALCULATRICE


/* TEST : VERIF QUE DOC BIEN LIE EN RECUPERANT H1:*/

// var valH1 = $("h1").text();
// console.log("Mon h1 est ")


/*TEST : FONCTION CLICK*/

// $("#calc").click(function() {
// 	alert("Ready");
// });


/* Fonction click pr bouton formulaire*/

$('#calc').click(clickButtonFormulaire);

function clickButtonFormulaire(){
	console.log("Bouton du formulaire");
}


/* Récupérer nombre 1*/

var element1 = $("nombre1").val();
console.log("Nombre case 1")


/* Récupérer nombre 2*/

var element2 = $("nombre2").val();
console.log("Nombre case 2")


/* Définir que ce seront 2 nombres : nombre 1 et nombre 2 avec 10 pr que JS s'y retrouve*/

var nb1 = parseInt(element1, 10);
var nb2 = parseInt(element2, 10);


/* Récupérer l'opération */

var operation = $('#formulaire').val();
console.log("réalise opé");


/* Définir le résultat*/

var resultat = calculer(nb1, nb2, operation);
console.log("calcule");


/*Créer fonction de calcul*/

function calculer()





// function add(a, b) {
// 	var result = a + b;
// 	return result;
//  }

// function substract(a, b) {
// 	var result = a - b;
// 	return result;
// }

// function multiply(a, b) {
// 	var result = a * b;
// 	return result;
// }

// function divide(a, b) {
// 	var result = a / b;
// 	return result;
// }