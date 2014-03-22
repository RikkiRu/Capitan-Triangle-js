function loadProto()
{
	proto.push(createUnitPrototype(0, 100, 1, 0, 'res/city.png')); //0 город
	proto.push(createUnitPrototype(100, 0, 0, 1, 'res/kar.png')); //1 карьер
	proto.push(createUnitPrototype(100, 100, 0, 0, 'res/factory.png')); //2 фабрика
	proto.push(createUnitPrototype(70, 70, 0, 0, 'res/mis.png')); //3 шахта
	proto.push(createUnitPrototype(70, 70, 0, 0, 'res/radar.png')); //4 радар
	proto.push(createUnitPrototype(200, 200, 0, 0, 'res/air.png')); //5 аэродром
}

