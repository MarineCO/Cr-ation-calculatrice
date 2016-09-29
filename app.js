
// CALCULATRICE

(function(){
	// console.log(Bienvenue);

	$('#calc').click(ButtonFormul);

	function ButtonFormul(){

		var element1 = $("#nombre1").val();
		// console.log("ok" + element1);

		var element2 = $("#nombre2").val();
		// console.log("ok" + element2);

		var operation = $('#formulaire').val();
		// console.log('ope' + operation);

		var resultat = calculer(element1, element2, operation);
		// console.log('cal' + operation);

		$('#result').text(resultat);
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
		}

	}

})();
