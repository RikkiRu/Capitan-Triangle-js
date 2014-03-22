var protoDraw =
{
	"draw": function()
	{
		render.drawImage(this.tex, this.x, this.y, this.w, this.h);
	},
	
	"doF": this.doF,
	"timerF": this.timerF
}

function createObj (x1, y1, Proto)
{
	var Obj=
	{
		x:x1,
		y:y1,
		w:Proto.w,
		h:Proto.h,
		tex: Proto.Tex,
		doF:function(){},
		timerF:function(){}
	}
	
	if(Proto.doF!=null) Obj.doF=Proto.doF;
	if(Proto.timerF!=null) Obj.timerF=Proto.timerF;
	if(Proto.dMoney!=null) Obj.dMoney=Proto.dMoney;
	if(Proto.dMaterial!=null) Obj.dMaterial=Proto.dMaterial;
	
	Obj.__proto__=protoDraw;
	return Obj;
}

function createEmptyPrototype (TexUrl, standartW, standartH)
{
	function addTex (url)
	{
		var img = new Image();
		img.src=url;
		return img;
	}
	
	var obj =
	{
		Tex: addTex(TexUrl),
		w: standartW,
		h: standartH
	}
	
	return obj;
}

function createBuildPrototype (cMoney, cMaterial, dMoney, dMaterial, TexUrl, standartW, standartH)
{
	var obj=createEmptyPrototype(TexUrl, standartW, standartH);
	obj.cMoney=cMoney;
	obj.cMaterial=cMaterial;
	obj.timerF=function(){money+=this.dMoney; material+=this.dMaterial;}
	obj.dMoney=dMoney;
	obj.dMaterial=dMaterial;
	return obj;
}

function canBuildProto(Proto)
{
	if(money>=Proto.cMoney && material>=Proto.cMaterial) return true;
	return false;
}

function buildObj (x1, y1, Proto) //это изменит ресурсность и запихнет объект в список
{
	if(canBuildProto(Proto) && placeTest(x1))
	{
		money-=Proto.cMoney;
		material-=Proto.cMaterial;
		obj.push(createObj(x1, y1, Proto));
	}
}