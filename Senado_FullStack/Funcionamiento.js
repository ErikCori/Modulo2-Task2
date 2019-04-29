//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

if(document.getElementById('senate-data')){
	createSenatorsTable();
}else if(document.getElementById('house-data')){
	createHouseTable();
}


function createSenatorsTable(){
	var miembros = data.results[0].members;
	var tableFinal = addTableToHtml(miembros);
	var tableSenators = document.getElementById('senate-data');
	tableSenators.innerHTML = tableFinal;
}
function createHouseTable(){
	var miembros = data.results[0].members;
	var tableFinal = addTableToHtml(miembros);
	var tableHouse = document.getElementById('house-data');
	tableHouse.innerHTML = tableFinal;
}


function addTableToHtml(members){
	var table = '<thead class="thead"><tr><th>Full name</th><th>Party</th><th>State</th><th>Seniority</th><th>Percentage of votes whith party</th></tr></thead>';
	
	table += '<tbody>';
	
	members.forEach(function(member){
		table += '<tr>';
		if(member.middle_name === null){
			table += '<td ><a href ="' +member.url+ '">' + member.first_name+' '+member.last_name+'</td>';
		}else{
			table +='<td><a href="' +member.url+ '">'+member.first_name+' '+member.middle_name+' '+member.last_name+'</td>';
		}
	table += '<td class="party">'+member.party+'</td>';
	table += '<td class="state">'+member.state+'</td>';
	table += '<td>'+member.seniority+'</td>';
	table += '<td>% '+member.votes_with_party_pct+'</td>';
	table += '</tr>';
	})
	table += '</tbody>';
	return table;
}

//Funciones de filtrado
function obtenerCheckBoxes(){
	return Array.from(document.querySelectorAll('input[name=party-filter]:checked')).map(opt => opt.value);
}

function filtrar(members){
	var filtros = obtenerCheckBoxes();
	var miembrosFiltrados = members.filter(members => filtros.includes(members.party));
	return miembrosFiltrados;
} 









/*									
var se=[]
var nodeList = document.querySelectorAll("input[name=party-filter]:checked)
var arrayCheck = Array.from(nodeList);
var table = doc
		
arrayCheck.forEach

function filtrar(partios, members){
	let items =[];
	let aux =[];
	partios.forEach(element =>)
}*/



