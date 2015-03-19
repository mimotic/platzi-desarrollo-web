// function aumentarFuente(size){
// 	return function(){
// 		document.body.style.fontSize = size + 'px';
// 	}
// }

// var size30 = aumentarFuente(30);
// size30();

// var size80 = aumentarFuente(80);
// size80();


var contador = (function(){
	var _contadorPrivado = 0;

	function _cambiarValor(valor){
		_contadorPrivado += valor;
	}

	return {
		incrementar: function(){
			_cambiarValor(1);
		},
		decrementar: function(){
			_cambiarValor(-1);
		},
		valor: function(){
			return _contadorPrivado;
		}
	}
})();

console.log(contador.valor());

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.valor());
contador.decrementar();

console.log(contador.valor());


