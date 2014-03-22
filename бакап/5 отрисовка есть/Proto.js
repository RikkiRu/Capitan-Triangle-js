var protoObj =
{
	"draw": function()
	{
		render.drawImage(tex[this.TexId], this.x, this.y, this.w, this.h);
	}
}

function createObj (x1, y1, x2, y2, TexId)
{
	var Obj=
	{
		x:x1,
		y:y1,
		w:x2-x1,
		h:y2-y1,
		TexId: TexId
	}
	Obj.__proto__=protoObj;
	return Obj;
}