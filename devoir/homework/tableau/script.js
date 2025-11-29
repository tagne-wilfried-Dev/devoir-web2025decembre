function generer(){
	let ln = document.getElementById("ln").value;// nb de lignes
	console.log(ln);
	let col = document.getElementById("col").value;// nb de colonnes
	console.log(col);
	const div = document.querySelector('.div');// selection de la div vide
	div.innerHTML = ''; // rafrichissement de la div
	// cas d'erreur d'entree
	const errorMessage = document.querySelector('.error');
	// Réinitialisation du message d'erreur
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';
    if (isNaN(ln) || isNaN(col) || ln <= 0 || col <= 0) {
        errorMessage.innerHTML = 'Veuillez entrer des nombres valides supérieurs à 0.';
        errorMessage.style.display = 'block';
        return;
    }


	var tab = document.createElement("table");// creation du tableau

	var head = document.createElement('thead');
	var thr = document.createElement('tr');
	var th,tht;
	
	for (var i = 1; i <= col; i++) {
		th = document.createElement('th');
		tht = document.createTextNode("Colonne "+i);
		th.appendChild(tht);
		thr.appendChild(th);
	}
	head.appendChild(thr);
	tab.appendChild(head);

	// creation du tbody
	var tbody = document.createElement("tbody");

	var tr,td;

	for(var j=0;j<ln;j++){
		tr = document.createElement("tr");
		for(var k=0;k<col;k++){
			td = document.createElement("td");
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	tab.appendChild(tbody);
	div.appendChild(tab);	
}