// beregning: 
// menn: (10*vekt i kg)+(6.25 * høyde i cm) - (5 * alder) + 5
// kvinne: (10 * kg) + (6.25 * høyde i cam) - (5 * alder) - 161

$("#knappen").click(function(){
	let x = document.getElementById('resultatet');
	let vekt = document.getElementById('weight').value;
	let hoyde = document.getElementById('hoyde').value;
	let alder = document.getElementById('age').value;
	if (document.getElementById('mann').checked){
		let resultat = (10 * vekt) + (6.25 * hoyde) - (5 * alder) +5;
		x.innerHTML = "BMR Kalori per dag er :<br><h4>" + resultat + "</h4><br> Klikk et sted på skjermen for å prøve igjen." ;
	} else if (document.getElementById('kvinne').checked){
		let resultat = (10 * vekt) + (6.25 * hoyde) - (5 * alder) - 161;
		x.innerHTML = "BMR Kalori per dag er :<br><h4>" + resultat + "</h4><br> Klikk et sted på skjermen for å prøve igjen." ;
	}
	$("#result").show(200);
});



// send resultatet til: $("#result")