function showCarnivores (carnivores) {
	for (var i = 0; i < carnivores.carnivores.length; i++){
		document.getElementById("carnivores").innerHTML += " " + carnivores.carnivores[i];
	}
}
Predator.loadCarnivores(showCarnivores);


function showHerbivores (herbivores) {
	for (var i = 0; i < herbivores.herbivores.length; i++){
		document.getElementById("herbivores").innerHTML += " " + herbivores.herbivores[i];
	}
}
Predator.loadHerbivores(showHerbivores);