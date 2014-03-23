var baseH=700; //линия построек

var material=100; //ресурсы
var money=100;

var mouse = {}; //канавы и их друзья
var maxSize = {}; //сюда размеры матрицы
var render;
var renderObj;
var textRender;

var obj=new Array(); //объекты
var proto=new Array(); //прототипы
var curFollow=new Array();

var weBuilding=false;
var weDestroy=false;
var tempBuild=0;

var units=
{
	rA: 0,
	rD: 0,
	mru: 0,
	aA: 0,
	aD: 0
}

var sizes =
{
	bw: 30,
	bh: 30
}

var buildDistanse=sizes.bw/2;

function loadProto()
{
	proto.push(createBuildPrototype(0, 100, 1, 0, 'res/city.png', sizes.bw, sizes.bh)); //0 город
	proto.push(createBuildPrototype(100, 0, 0, 1, 'res/kar.png', sizes.bw, sizes.bh)); //1 карьер
	proto.push(createBuildPrototype(100, 100, 0, 0, 'res/factory.png', sizes.bw, sizes.bh)); //2 фабрика
	proto.push(createBuildPrototype(70, 70, 0, 0, 'res/mis.png', sizes.bw, sizes.bh)); //3 шахта
	proto.push(createBuildPrototype(70, 70, 0, 0, 'res/radar.png', sizes.bw, sizes.bh)); //4 радар
	proto.push(createBuildPrototype(200, 200, 0, 0, 'res/air.png', sizes.bw, sizes.bh)); //5 аэродром
	proto.push(createEmptyPrototype ('res/bCan.png', sizes.bw, sizes.bh)); //6 зона доступно
	proto.push(createEmptyPrototype ('res/bNotCan.png', sizes.bw, sizes.bh)); //7 зона не доступно
	proto.push(createEmptyPrototype ('res/destroy.png', sizes.bw, sizes.bh)); //8 уничтожить
	proto.push(createEmptyPrototype ('res/destroySel.png', sizes.bw, sizes.bh)); //9 уничтожить выбрано
}

