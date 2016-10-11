
// CALCULATRICE

/* METHODE 1 INPUT */

(function(){

	$('#calc').click(ButtonFormul);

	function ButtonFormul(){

		var element1 = $("#nombre1").val();
		var element2 = $("#nombre2").val();
		var operation = $('#formulaire').val();
		var resultat = calculer(element1, element2, operation);

		$('#result').html(resultat);
	}

	function add(x, y){
		var nb1 = parseInt(x, 10);
		var nb2 = parseInt(y, 10);
		return nb1 + nb2;
	}

	function substract(x, y){
		var nb1 = parseInt(x, 10);
		var nb2 = parseInt(y, 10);
		return nb1 - nb2;
	}

	function multiply(x, y){
		var nb1 = parseInt(x, 10);
		var nb2 = parseInt(y, 10);
		return nb1 * nb2;
	}

	function divide(x, y){
		var nb1 = parseInt(x, 10);
		var nb2 = parseInt(y, 10);
		return nb1 / nb2;
	}

	function calculer(nb1, nb2, operation) {

		if (operation === '+'){
			return add(nb1, nb2);

		} else if (operation === '-'){
			return substract(nb1, nb2);

		}else if (operation === '*'){
			return multiply(nb1, nb2);

		} else if (operation === '/'){
			return divide(nb1, nb2);
		} else {
			return alert('Il y a une erreur, recommencez')
		}

	}

})();




/* METHODE 2 BUTTON */

(function(){

// Point de départ : variables non déterminés

	var nombre1;
	var nombre2;
	var opeRation; 
	var result = 0;


// Définition des différentes opérations utiles

	function add(x, y){
		return x + y;
	}

	function substract(x, y){
		return x - y;
	}

	function multiply(x, y){
		return x * y;
	}

	function divide(x, y){
		return x / y;
	}

	function calculer(x, y, opeRation) {

		if (opeRation === '+'){
			return add(x, y);

		} else if (opeRation === '-'){
			return substract(x, y);

		}else if (opeRation === '*'){
			return multiply(x, y);

		} else if (opeRation === '/'){
			return divide(x, y);

		} else {
			return alert('Il y a une erreur, recommencez')
		}
	}

// Click sur les nombres 

	$(".number").click(function(){
		var nombre = parseInt($(this).data('number'));

		if (nombre1 === undefined) {
			nombre1 = nombre;
			$("#resultat").text(nombre);

		} else {
			nombre2 = nombre;
			$("#resultat").text(nombre);
		}

	});

// Click sur les opérateurs 

	$(".ope").click(function(){

		opeRation = $(this).data('operateur');

		if (opeRation === null){
			opeRation = 'add';
			$("#resultat").text('+');

		} else if (opeRation === null){
			opeRation = 'substract';
			$("#resultat").text('-');

		} else if (opeRation === null){
			opeRation = 'multiply';
			$("#resultat").text('*');

		} else if (opeRation === null){
			opeRation = 'divide';
			$("#resultat").text('/');
		}
	});

// Click sur le = 

	$(".egal").click(function() {

		result = calculer(nombre1, nombre2, opeRation);

		$("#resultat").text(result);

	});
	
})();
