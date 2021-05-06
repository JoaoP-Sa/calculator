//functios that makes appear values (numbers and operators) on screen:

function dis(i){
	document.getElementById('result').value+=i;
}


//function that realize the math operations and show the result on screen:

function solve(){
	let x = document.getElementById('result').value;
	let y = eval(x);
	document.getElementById('result').value=y;
}


//function that clears the screen to we can do new calcs:

function clr(){
	document.getElementById('result').value="";
}