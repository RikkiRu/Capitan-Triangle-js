// размер матрицы установлен эмпирически и равен 300 на 150
//	alert(renderObj.width.toString());
//	alert(renderObj.height.toString());

function initialize() 
{    
	renderObj=document.getElementById('canv');
	
	render=renderObj.getContext("2d");
	maxSize.x=renderObj.width=1200;
	maxSize.y=renderObj.height=800;
	maxSize.playerZone=440;
	
	document.body.onmousemove = function(e) 
	{
        e = e || window.event;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
	
		mouse.cx=mouse.x-renderObj.offsetLeft;
		mouse.cy=mouse.y-renderObj.offsetTop;
	}
	
	loadProto();
	
	setInterval('timer()', 200);
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
}

function renderFunc ()
{
	render.clearRect(0,0, renderObj.width, renderObj.height);

	for(var i=0; i<obj.length; i++)
	{
		obj[i].draw();
		obj[i].doF();
	}
	
	for(var i=0; i<curFollow.length; i++)
	{
		curFollow[i].draw();
		curFollow[i].doF();
	}
}

function timer()
{
	for(var i=0; i<obj.length; i++)
	{
		obj[i].timerF();
	}
	
	writeInfo();
}

function destroyClick()
{
	weBuilding=false;
	weDestroy=true;
	curFollow.splice(0, curFollow.length);
	var x = createObj (mouse.cx, baseH, proto[8]);
	x.doF=
	function()
	{
		this.x=mouse.cx-sizes.bw/2; 
		if(!testObjs(this.x)) this.tex=proto[9].Tex;
		else this.tex=proto[8].Tex;
	};
	curFollow.push(x);
}

function buildClick(n)
{
	tempBuild=n-1;
	weBuilding=false;
	weDestroy=false;
	curFollow.splice(0, curFollow.length);
	if(proto[n-1]!=null) 
	{
		var x=proto[n-1];
		if(canBuildProto(x))
		{
			var x = createObj (0, baseH, x);
			var zone = createObj(0, baseH, proto[6]);
			x.doF=function(){this.x=mouse.cx-sizes.bw/2;};
			zone.doF=function()
			{
				this.x=mouse.cx-sizes.bw/2; 
				if(placeTest(this.x)) this.tex=proto[6].Tex;
				else this.tex=proto[7].Tex;
			};
			curFollow.push(zone);
			curFollow.push(x);
			weBuilding=true;
		}	
	}
}

function canvClick()
{
	if(weBuilding)
	{
		var a=curFollow[1];
		buildObj (a.x, a.y, proto[tempBuild]);
		weBuilding=false;
		curFollow.splice(0, curFollow.length);
		return;
	}
	
	if(weDestroy)
	{
		weDestroy=false;
		findAndDel (curFollow[0].x)
		curFollow.splice(0, curFollow.length);
		return;
	}
}

function findAndDel (x)
{
	for(var i=0; i<obj.length; i++)
	{
		if(Math.abs(obj[i].x-x)<buildDistanse) 
		{
			obj.splice(i, 1);
			return;
		}
	}
}

function testObjs (x)
{
	for(var i=0; i<obj.length; i++)
	{
		if(Math.abs(obj[i].x-x)<buildDistanse) return false;
	}
	return true;
}

function placeTest(x)
{
	if(x>maxSize.playerZone) return false;
	return testObjs (x);
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
	
	if(canBuildProto(proto[n-1])) inf.style.backgroundColor='#E2FFE7'; 
	else inf.style.backgroundColor='red';
	
	write(proto[n-1].cMoney.toString(), 30, 130, 'InfoBar', false);
	write(proto[n-1].cMaterial.toString(), 180, 130, 'InfoBar', true);
}























