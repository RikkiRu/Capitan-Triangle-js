var sizes =
{
	bw: 50,
	bh: 50
}

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
}

