class Skill {
	public name: string;
	public demage: number;
	constructor() {
		this.name = "技能";
		this.demage = 0;
	}
	effect(bob1: any, bob2: any) {
		console.log(bob1, bob2);
	}
}

class NormalAttack extends Skill {
	constructor() {
		super()
		this.name = "普通攻击";
		this.demage = 5;
	}
	effect(bob1: any, bob2: any) {
		bob2["life"] -= bob1["atk"] + this.demage;
	}
}

class Bite extends Skill {
	constructor() {
		super()
		this.name = "撕咬";
		this.demage = 2;
	}
}
const SkillComparisonTable: { [key: string]: string } = {
	"普通攻击": "NormalAttack",
	"撕咬": "Bite"
}

//实例化
function createSkill(skillname: string) {
	return eval("new " + skillname + '()');
}

export {
	createSkill,
	SkillComparisonTable
}