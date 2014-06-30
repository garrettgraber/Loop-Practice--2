$(document).on('ready', function() {

	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	var animalsLength = animals.length;

//Problem 1
	console.log("\nProblem 1");

	for (var i=0; i < animals.length - 1; i++) {
		console.log(animals[i]);
	}

//Problem 2
	console.log("\nProblem 2");
	
	for (var i=0; i < animals.length; i ++) {
		var animalsVal = animals[i];
		if (i % 2 == 0) {
			console.log(animalsVal);
		}
	}

//Problem 3
	console.log('\nProblem 3');
	
	for (var i=0; i < animals.length; i++) {
		var animalsVal = animals[ animals.length - (i + 1) ];
		console.log(animalsVal);
	}

//Problem 4
	console.log("\nProblem 4");

	for (var i=0; i < animals.length; i++) {
		var animalsVal = animals[i];
		console.log(animalsVal);
		if (i !== 0 && i !== animals.length -1) {
			console.log(animalsVal);
		}
	}
  
});