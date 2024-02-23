var aux = 0

function clearEntry() {
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function clr() { 
    document.getElementById("display").value = "" 
} 
function display(val) { 
			document.getElementById("display").value += val 
} 
function resultado(resultado) {
	var resultado = document.getElementById("display").value
	document.getElementById("display").value = eval(resultado)

}
function porcentagem(){
	var resultado = document.getElementById("display").value 
	document.getElementById("display").value = resultado / 100
	alert("Essa tecla ainda está em desenvolvimento")
}
//function alerta() {
//	alert("Essa tecla ainda está em desenvolvimento")
//}