//take input from user
var x0 = prompt('Enter Initial value of X0');

//define value of ES
var es = 0.01;
var i = 1;
var x1;
var ea = Math.random();
var newea;



//define our provided function
function f(x) {
	return ((x*x*x)+(x*x)-1);
}

function fPrimeX(x) {
	return ((2*Math.pow(x,2))+(2*x));
}

function approxerror(x1){
	return ((x1-ea)/x1)*100;
}


for(;;){
	x1 = x0 - f(x0)/fPrimeX(x0);
	x0 = x1;
	newea = approxerror(x1);
	ea = newea;
	console.log(i+" ineration:");
	console.log("X"+i+" is: "+x1);
	console.log("Ea is: "+newea);

	if (newea<=es) {
		break;
	}

	i++;

}



