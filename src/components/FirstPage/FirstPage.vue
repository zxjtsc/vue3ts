<script setup lang="ts">
	import {
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		init
	} from "./class/main";

	var player: {
		[key: string]: any
	} = ref({});
	var monster: {
		[key: string]: any
	} = ref({});
	onMounted(() => {
		let result = init();
		player.value = result.player;
		monster.value = result.monster;
	})


	function handleClick() {
		console.log(player, monster)
	}
</script>

<template>
	<ul style="list-style-type: none;">
		<li><div>玩家:{{player["name"]}}</div></li>
		<div v-if="player['isAlive']">血量:{{player["_life"]}}</div>
		<div v-else>血量:已死亡</div>
		<li>
			<div>
				拥有技能:
				<ul>
					<li class="skill" v-for="(item, key, index) in player['skillList']" :key="index" @click="player.release(key, monster)">{{key}}</li>
				</ul>
			</div>
		</li>
		<li>--------------------------</li>
		<li><div>怪物:{{monster["name"]}}</div></li>
		<li>
			<div v-if="monster['isAlive']">血量:{{monster["_life"]}}</div>
			<div v-else>血量:已死亡</div>
		</li>
		<li>
			<div>
				拥有技能:
				<ul v-if="monster['skillList']">
					<li class="skill" v-for="(item, key, index) in monster['skillList']" :key="index" @click="monster.release(key, player)">{{key}}</li>
				</ul>
				<ul v-else>
					<li>无</li>
				</ul>
			</div>
		</li>
	</ul>


</template>

<style lang="scss" scoped>
	.skill{
		cursor: pointer;
	}
</style>
