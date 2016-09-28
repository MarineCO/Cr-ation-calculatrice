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

/* Je définis element1 et element2, mais je n'ai pas besoin de leur donner de valeur pr l'instant*/

var element1;
var element2;


$('#calc').click(function(){

	/* Récupérer nombre 1*/
	element1 = $("#nombre1").val();
	console.log(element1)

	/* Récupérer nombre 2*/
	element2 = $("#nombre2").val();
	console.log(element2)

});




/* Définir que ce seront 2 nombres : nombre 1 et nombre 2 avec 10 pr que JS s'y retrouve*/

// var nb1 = parseInt(element1, 10);
// var nb2 = parseInt(element2, 10);


/* Récupérer l'opérateur */

var operation = $('#formulaire').val();
console.log("réalise opé");


/* Définir les différentes opérations possibles*/

function add(nb1, nb2) {
	var nb1 = parseInt(element1, 10);
	var nb2 = parseInt(element2, 10);
	var result = nb1 + nb2;
	return result;
}

function substract(nb1, nb2) {
	var nb1 = parseInt(element1, 10);
	var nb2 = parseInt(element2, 10);
	var result = nb1 - nb2;
	return result;
}

function multiply(nb1, nb2) {
	var nb1 = parseInt(element1, 10);
	var nb2 = parseInt(element2, 10);
	var result = nb1 * nb2;
	return result;
}

function divide(nb1, nb2) {
	var nb1 = parseInt(element1, 10);
	var nb2 = parseInt(element2, 10);
	var result = nb1 / nb2;
	return result;
}


/*Créer fonction de calcul*/

// $('#calc').click(calculer);

// 	function calculer(nb1, nb2, operation) {

// 		if (operation === 'add'){
// 			console.log(add(nb1, nb2));
// 		}
// 		else if {

// 		}
// }



/* Définir le résultat*/

// var resultat = calculer(nb1, nb2, operation);
// console.log("calcule");

// $('#result').text(resultat);