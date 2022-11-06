import {
	createSkill,
	SkillComparisonTable
} from "./skill";

class Creature {
	public name: string;//姓名
	public life: number;//生命
	public atk: number;//攻击力
	public isAlive: boolean;//是否存活
	constructor(parms: { [key: string]: any }) {
		this.name = parms["name"] || "";
		this.life = parms["life"] || 50;
		this.atk = parms["atk"] || 5;
		this.isAlive = true;
	}
	set _life(val:number) {
		this.life = val;
	}
	get _life() {
		if(this.life <= 0) {
			this.dead();
			return 0;
		}else{
			return this.life;
		}
	}

	dead() {
		this.isAlive = false
	}
}

class Player extends Creature {
	public skillList: { [key: string]: any };
	constructor(parms: any) {
		super(parms);
		this.skillList = this.initSkill(parms["skills"]);
	}

	// 初始化技能
	initSkill(parms: string[]): { [key: string]: any } {
		const obj: { [key: string]: any } = {};
		for (let i = 0; i <= parms.length - 1; i++) {
			const skillname: string = SkillComparisonTable[parms[i]];
			obj[parms[i]] = createSkill(skillname);
		}
		return obj
	}
	//施放
	release(skillname: string, bob: any) {
		if(!this.isAlive) {
			return;
		}
		console.log(`[${this.name}]使用[${skillname}]攻击了[${bob.name}]`);
		this.skillList[skillname].effect(this, bob)
	}
	//使用道具
	use() {
		console.log(this)
	}
}

class Monster extends Creature {
	public skillList: { [key: string]: any };
	constructor(parms: any) {
		super(parms);
		this.skillList = this.initSkill(parms["skills"]);
	}
	initSkill(parms: string[]): { [key: string]: any } {
		const obj: { [key: string]: any } = {};
		for (let i = 0; i <= parms.length - 1; i++) {
			const skillname: string = SkillComparisonTable[parms[i]];
			obj[parms[i]] = createSkill(skillname);
		}
		return obj
	}
	release(skillname: string, bob: any) {
		if(!this.isAlive) {
			return;
		}
		console.log(`[${this.name}]使用[${skillname}]攻击了[${bob.name}]`);
		this.skillList[skillname].effect(this, bob)
	}
}

function createPlayer(obj: object) {
	return new Player(obj)
}

function createMonster(obj: object) {
	return new Monster(obj)
}

export {
	createPlayer,
	createMonster
}