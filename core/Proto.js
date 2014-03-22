var protoObj =
{
	"draw": function()
	{
		render.drawImage(this.tex, this.x, this.y, this.w, this.h);
	}
}

function createObj (x1, y1, x2, y2, Proto)
{
	var Obj=
	{
		x:x1,
		y:y1,
		w:x2-x1,
		h:y2-y1,
		tex: Proto.Tex
	}
	Obj.__proto__=protoObj;
	return Obj;
}

function createUnitPrototype (cMoney, cMaterial, dMoney, dMaterial, TexUrl)
{
	function addTex (url)
	{
		var img = new Image();
		img.src=url;
		return img;
	}

	var obj =
	{
		cMoney: cMoney,
		cMaterial: cMaterial,
		dMoney:dMoney,
		dMaterial:dMoney,
		Tex: addTex(TexUrl)
	}
	return obj;
}

function canBuildProto(Proto)
{
	if(money>=Proto.cMoney && material>=Proto.cMaterial) return true;
	return false;
}

function buildObj (x1, y1, x2, y2, Proto) //это изменит ресурсность и запихнет объект в список
{
	if(canBuildProto(Proto))
	{
		money-=Proto.cMoney;
		material-=Proto.cMaterial;
		dMoney+=Proto.dMoney;
		dMaterial+=Proto.dMaterial;
		obj.push(createObj(x1, y1, x2, y2, Proto));
	}
}