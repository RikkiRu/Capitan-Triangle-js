var baseH=600;
var rA=110; //attack rockets
var rD=213; //defend
var material=100;
var money=100;
var dMaterial=1;
var dMoney=1;

function initialize() 
{     
	setInterval('timer()', 1000);
}

function writeInfo ()
{
	var render;
	var temp;
	
	function setFontAndClear(x)
	{
		render=document.getElementById(x).getContext("2d");
		render.clearRect(0,0, document.getElementById(x).width, document.getElementById(x).height);
		render.fillStyle = "black";
		render.font = "40pt Arial";
	}
	
	function testAndWrite (x, cx, cy, where)
	{
		setFontAndClear(where);
		temp='>999';
		if(x>=0 && x<1000) temp=x.toString();
		render.fillText(temp, cx, cy);
	}
	
	testAndWrite(money, 100, 140, 'money');
	testAndWrite(material, 100, 140, 'material');
	testAndWrite(rA, 190, 100, 'tbA');
	testAndWrite(rD, 180, 120, 'tbD');
}



function timer()
{
	material+=dMaterial;
	money+=dMoney;
	writeInfo();
}