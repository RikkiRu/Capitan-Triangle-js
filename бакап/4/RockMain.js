var baseH=600;
var rA=110; //attack rockets
var rD=213; //defend
var material=100;
var money=100;
var dMaterial=1;
var dMoney=1;
var mouse = {x: 0, y:0};

var obj=new Array();

function initialize() 
{     
	setInterval('timer()', 1000);
	
	document.body.onmousemove = function(e) 
	{
        e = e || window.event;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
	}
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
	testAndWrite(rA, 180, 120, 'tbA');
	testAndWrite(rD, 180, 120, 'tbD');
}

function timer()
{
	material+=dMaterial;
	money+=dMoney;
	writeInfo();
}

function buildClick(n)
{
}

function showInfo(n)
{
	var inf = document.getElementById('InfoBar');
	if(n==0) 
	{
		inf.style.height='0px';
		return;
	}
	
	inf.style.left=(mouse.x-50).toString()+'px';
	inf.style.height='50px';
	
	switch(n)
	{
		case 1: inf.style.backgroundColor='red'; break;
		case 2: inf.style.backgroundColor='green'; break;
		case 3: break;
		case 4: break;
		case 5: break;
		case 6: break;
	}
}























