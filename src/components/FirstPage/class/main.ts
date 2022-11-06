import {
	createPlayer,
	createMonster
} from "./Creature";



function init() {
	const player = createPlayer({
		name: "玩家",
		life: 1000,
		atk: 15,
		skills: ["普通攻击"]
	});
	const monster = createMonster({
		name: "野狗",
		life: 250,
		atk: 5,
		skills: ["撕咬"]
	});
	return {
		player: player,
		monster: monster
	}
}


export {
	init
}