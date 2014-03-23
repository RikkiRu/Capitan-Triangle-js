var baseH=700; //����� ��������

var material=100; //�������
var money=100;

var mouse = {}; //������ � �� ������
var maxSize = {}; //���� ������� �������
var render;
var renderObj;
var textRender;

var obj=new Array(); //�������
var proto=new Array(); //���������
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
	proto.push(createBuildPrototype(0, 100, 1, 0, 'res/city.png', sizes.bw, sizes.bh)); //0 �����
	proto.push(createBuildPrototype(100, 0, 0, 1, 'res/kar.png', sizes.bw, sizes.bh)); //1 ������
	proto.push(createBuildPrototype(100, 100, 0, 0, 'res/factory.png', sizes.bw, sizes.bh)); //2 �������
	proto.push(createBuildPrototype(70, 70, 0, 0, 'res/mis.png', sizes.bw, sizes.bh)); //3 �����
	proto.push(createBuildPrototype(70, 70, 0, 0, 'res/radar.png', sizes.bw, sizes.bh)); //4 �����
	proto.push(createBuildPrototype(200, 200, 0, 0, 'res/air.png', sizes.bw, sizes.bh)); //5 ��������
	proto.push(createEmptyPrototype ('res/bCan.png', sizes.bw, sizes.bh)); //6 ���� ��������
	proto.push(createEmptyPrototype ('res/bNotCan.png', sizes.bw, sizes.bh)); //7 ���� �� ��������
	proto.push(createEmptyPrototype ('res/destroy.png', sizes.bw, sizes.bh)); //8 ����������
	proto.push(createEmptyPrototype ('res/destroySel.png', sizes.bw, sizes.bh)); //9 ���������� �������
}

