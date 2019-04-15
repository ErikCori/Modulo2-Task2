//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

var resultados = data.results[0].members;
var cantMiembros= data.results[0].num_results;
var elementosTabla=[];

for(var i=0; i<cantMiembros;i++){
	if(resultados[i].middle_name != null){
	var trCompleto = resultados[i].first_name+" "+resultados[i].middle_name+" "+resultados[i].last_name+" "+resultados[i].party+" "+resultados[i].state+" "+resultados[i].seniority+" %"+resultados[i].votes_with_party_pct;
	}else{
		var trCompleto = resultados[i].first_name+" "+resultados[i].last_name+" "+resultados[i].party+" "+resultados[i].state+" "+resultados[i].seniority+" %"+resultados[i].votes_with_party_pct;
	}
	console.log(trCompleto);
}



/*resultados.forEach(elemento =>agregarTR(crearTRStringTabla(elemento), elementosTabla));
console.log(elementosTabla);
function crearTRStringTabla(elemento){
	return elemento.first_name +" "+elemento.middle_name+" "+elemento.last_name+" "+elemento.party+" "+elemento.state+" "+elemento.seniority+" %"+elemento.votes_with_party_pct;
}
function agregarTR(elemento, cadenaAcumulador){
	cadenaAcumulador +=elemento;
}
function crearElementosTabla(){
	resultados.forEach(elemento => elementosTabla = elemento.first_name +" "+elemento.middle_name+" "+elemento.last_name+" "+
										elemento.party+" "+elemento.state+" "+elemento.seniority+" %"+elemento.votes_with_party_pct
										)
	return resultados;
}*/


