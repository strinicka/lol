



function obrisi()
{
	var a=document.getElementById("txt");
	a.value="";
}
function add(n)
{
	var a=document.getElementById("txt");
	a.value=a.value+n;
}

function calculate()
{
	a=document.getElementById ("txt");
	a.value=eval(a.value);
}


function nazad() {
 var v =document.getElementById("txt").value; document.getElementById("txt").value = v.substr(0, v.length - 1); 
}

