// размер матрицы установлен эмпирически и равен 300 на 150
//	alert(renderObj.width.toString());
//	alert(renderObj.height.toString());

var baseH=600; //уровень построек
var rA=110; //attack rockets
var rD=213; //defend

var material=100; //ресурсы
var money=100;
var dMaterial=1;
var dMoney=1;

var mouse = {x: 0, y:0}; //канавы и их друзья
var maxSize = {}; //сюда размеры матрицы
var render;
var renderObj;

var obj=new Array(); //объекты
var tex=new Array();

function initialize() 
{    
	renderObj=document.getElementById('canv');
	render=renderObj.getContext("2d");
	maxSize.x=renderObj.width;
	maxSize.y=renderObj.height;
	
	document.body.onmousemove = function(e) 
	{
        e = e || window.event;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
	}
	
	loadTexts();
	
	obj.push(createObj(0, 0, maxSize.x, maxSize.y, 0));
	
	setInterval('timer()', 1000);
	setInterval('renderFunc ()', 30);
}

function addTex (url)
{
	var img = new Image();
	img.src=url;
	tex.push(img);
}

function loadTexts()
{
	addTex ('res/city.png'); //0
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

function renderFunc ()
{
	for(var i=0; i<obj.length; i++)
	{
		obj[i].draw();
	}
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























