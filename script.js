var floorStep = 20;

var types = [ "인간", "자연", "물질", "사령", "마물", "용족" ];

var boss = {
	'pirates':{
		'name':"해적",
		'type':0,
		'weakness':"<span style='color:#FFC300'>뇌</span>",
		'resistance':"-"
	},
	'kraken':{
		'name':"크라켄",
		'type':1,
		'weakness':"<span style='color:#FFC300'>뇌</span>",
		'resistance':"-"
	},
	'minotaur':{
		'name':"미노타우루스",
		'type':0,
		'weakness':"<span style='color:#FFC300'>뇌</span>",
		'resistance':"-"
	},
	'gargoyleGate':{
		'name':"가고일게이트",
		'type':2,
		'weakness':"-",
		'resistance':"<span style='color:red'>염</span>"
	},
	'vampire':{
		'name':"뱀파이어",
		'type':0,
		'weakness':"<span style='color:#FFC300'>뇌</span>",
		'resistance':"-"
	},
	'wraith':{
		'name':"레이스",
		'type':3,
		'weakness':"-",
		'resistance':"<span style='color:blue'>빙</span>"
	},
	'harpy':{
		'name':"하피",
		'type':4,
		'weakness':"<span style='color:#FFC300'>뇌</span>",
		'resistance':"-"
	},
	'medusa':{
		'name':"메두사",
		'type':4,
		'weakness':"-",
		'resistance':"-"
	},
	'doomBeetle':{
		'name':"둠비틀",
		'type':1,
		'weakness':"<span style='color:red'>염</span>",
		'resistance':"-"
	},
	'cyclops':{
		'name':"사이클롭스",
		'type':0,
		'weakness':"-",
		'resistance':"-"
	},
	'golem':{
		'name':"골렘",
		'type':2,
		'weakness':"-",
		'resistance':"-"
	},
	'archDemon':{
		'name':"아크데몬",
		'type':4,
		'weakness':"-",
		'resistance':"-"
	},
	'wyvern':{
		'name':"와이번",
		'type':5,
		'weakness':"<span style='color:blue'>빙</span>",
		'resistance':"-"
	},
	'redDragon':{
		'name':"레드드래곤",
		'type':5,
		'weakness':"<span style='color:blue'>빙</span>",
		'resistance':"<span style='color:red'>염</span>"
	},
	'warlock':{
		'name':"워록",
		'type':0,
		'weakness':"-",
		'resistance':"-"
	},
	'chimera':{
		'name':"키마이라",
		'type':4,
		'weakness':"-",
		'resistance':"-"
	},
	'gazer':{
		'name':"게이저",
		'type':4,
		'weakness':"ALL",
		'resistance':"-"
	},
	'killerRabbit':{
		'name':"킬러토끼",
		'type':1,
		'weakness':"<span style='color:red'>염</span>",
		'resistance':"-"
	},
	'ancientDragon':{
		'name':"에이션트드래곤",
		'type':5,
		'weakness':"-",
		'resistance':"-"
	},
	'demonLord':{
		'name':"<span class='dload'>데몬로드</span>",
		'type':4,
		'weakness':"-",
		'resistance':"-"
	}
};
var floorList = [ boss.archDemon, boss.wyvern, boss.chimera, boss.warlock, boss.medusa, boss.doomBeetle, boss.harpy, boss.gazer, boss.pirates, boss.vampire, boss.cyclops, boss.killerRabbit, boss.minotaur, boss.doomBeetle, boss.gazer, boss.cyclops, boss.pirates, boss.wraith, boss.wraith, boss.kraken, boss.archDemon, boss.killerRabbit, boss.archDemon, boss.pirates, boss.golem, boss.harpy, boss.archDemon, boss.doomBeetle, boss.wyvern, boss.chimera, boss.warlock, boss.vampire, boss.killerRabbit, boss.minotaur, boss.pirates, boss.redDragon, boss.wyvern, boss.wyvern, boss.vampire, boss.chimera, boss.cyclops, boss.warlock, boss.doomBeetle, boss.kraken, boss.wraith, boss.pirates, boss.harpy, boss.gazer, boss.medusa, boss.redDragon, boss.wraith, boss.wyvern, boss.golem, boss.gargoyleGate, boss.gazer, boss.medusa, boss.golem, boss.redDragon, boss.golem, boss.cyclops, boss.redDragon, boss.pirates, boss.killerRabbit, boss.minotaur, boss.chimera, boss.gargoyleGate, boss.cyclops, boss.warlock, boss.golem, boss.wyvern, boss.gazer, boss.kraken, boss.chimera, boss.archDemon, boss.doomBeetle, boss.gargoyleGate, boss.gargoyleGate, boss.harpy, boss.vampire, boss.minotaur, boss.vampire, boss.medusa, boss.vampire, boss.redDragon, boss.medusa, boss.wraith, boss.harpy, boss.warlock, boss.wraith, boss.archDemon, boss.minotaur, boss.kraken, boss.golem, boss.redDragon, boss.gazer, boss.killerRabbit, boss.gargoyleGate, boss.kraken, boss.killerRabbit, boss.kraken  ];

function initPage() {
	console.log('initPage');
	var table=document.getElementById('bossTable' );
	for( var index = 1; index <=floorStep; index++ ) {
		var row = table.insertRow( index );
		row.insertCell(0).innerHTML=( index );
		row.cells[0].className = "rowHeader";

		var floorBoss = floorList[index];
		if( index % 9 == 0 ) {
			if( index % 2 == 0 ) {
				floorBoss = boss.ancientDragon;
			} else {
				floorBoss = boss.demonLord;
			}
		}

		row.insertCell(1).innerHTML=floorBoss.name;
		row.insertCell(2).innerHTML=types[floorBoss.type];
		row.insertCell(3).innerHTML=floorBoss.weakness;
		row.insertCell(4).innerHTML=floorBoss.resistance;
		if( index % 2 == 0 ) {
			row.className = "even";
		}
	}
}

function moveFloor() {
	console.log('moveFloor');
	var floorNo = document.getElementById('floorNo').value;
	if( floorNo < 1 ) {
		floorNo = 1;
	}

	var table=document.getElementById('bossTable' );
	var rowCount = 1;

	for( var index = floorNo; index <= floorNo + floorStep; index++ ) {
			var row = table.rows[rowCount];
			row.cells[0].innerHTML=( index );
			row.cells[0].className="rowHeader";


			var convertFloor = index % 100;
			var floorBoss = floorList[convertFloor];
			if( index % 9 == 0 ) {
				if( index % 2 == 0 ) {
					floorBoss = boss.ancientDragon;
				} else {
					floorBoss = boss.demonLord;
				}
			}
			row.cells[1].innerHTML=floorBoss.name;
			row.cells[2].innerHTML=types[floorBoss.type];
			row.cells[3].innerHTML=floorBoss.weakness;
			row.cells[4].innerHTML=floorBoss.resistance;
			// console.log("rc" + rowCount);
			if(rowCount == 20){
				break;
			} else {
				rowCount++;
			}
	}
}

function previous() {
	var floorNo = document.getElementById('floorNo').value;
	floorNo = floorNo - floorStep;
	if( floorNo < 1 ) {
		floorNo = 1;
	}
	document.getElementById('floorNo').value = floorNo;
	moveFloor();
}

function next() {
	var floorNo = document.getElementById('floorNo').value;
	floorNo = ( parseInt( floorNo ) + floorStep );
	document.getElementById('floorNo').value = floorNo;
	moveFloor();
}

const floorButtonLeft = document.getElementById("floorButtonLeft");
floorButtonLeft.addEventListener("click", previous, false);

const floorButtonRight = document.getElementById("floorButtonRight");
floorButtonRight.addEventListener("click", next, false);

//const floorNo = document.getElementById('floorNo');
//floorNo.addEventListener("focus", (event) => {
//	event.target.value = '';
//}, true);

floorNo.addEventListener("keypress", (event) => {
	if (event.keyCode==13){
		moveFloor();
	}
}, true);

const floorNoBtn =  document.getElementById('floorNoBtn');
floorNoBtn.addEventListener("click", (event) => {
	moveFloor();
}, true);

document.addEventListener("DOMContentLoaded", function(){
	initPage();
	// moveFloor();
});