// размер матрицы установлен эмпирически и равен 300 на 150
//	alert(renderObj.width.toString());
//	alert(renderObj.height.toString());

var baseH=130; //линия построек
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
var textRender;

var obj=new Array(); //объекты
var proto=new Array(); //прототипы

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
	
	loadProto();
	buildObj(0, 0, maxSize.x, maxSize.y, proto[0]);
	
	setInterval('timer()', 500);
	setInterval('renderFunc ()', 30);
}

function write (x, cx, cy, where, isAdd)
{
	textRender=document.getElementById(where).getContext("2d");
	if(!isAdd) textRender.clearRect(0,0, document.getElementById(where).width, document.getElementById(where).height);
	textRender.fillStyle = "black";
	textRender.font = "40pt Arial";
	textRender.fillText(x, cx, cy);
}

function testAndWrite (x, cx, cy, where)
{
	var temp='>999';
	if(x>=0 && x<1000) temp=x.toString();
	write(temp, cx, cy, where, false);
}

function writeInfo ()
{
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
	if(canBuildProto(proto[n-1]))
	{
		console.log('sooo');
	}
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
	
	if(canBuildProto(proto[n-1])) inf.style.backgroundColor='green'; 
	else inf.style.backgroundColor='red';
	
	write(proto[n-1].cMoney.toString(), 30, 130, 'InfoBar', false);
	write(proto[n-1].cMaterial.toString(), 180, 130, 'InfoBar', true);
}























