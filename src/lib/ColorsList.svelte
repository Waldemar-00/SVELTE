<script>
	// @ts-nocheck
	export let colors = [];
	function deleteColor() {
		colors = colors.slice(1);
	}
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};
	function createEmojis(index) {
		const fruit = emojis[colors[index].product];
		return fruit;
	}
</script>

<ul class="list">
	{#each colors as color, index (color.id)}
		<li style="background: {color.color}">{createEmojis(index)} = {color.product}</li>
	{/each}
</ul>
<button class="delete" on:click={deleteColor}>Delete color</button>

<style>
	.list {
		list-style: none;
		margin: 2rem auto;
		width: 70vw;

		color: azure;
		text-align: center;
	}
	.list li {
		border-radius: 7px;
		padding: 0.5rem;
		margin-bottom: 2px;
	}
	.delete {
		margin-left: 1rem;
		padding: 0.5rem;
		width: 20vw;
		background-color: transparent;
		border-radius: 7px;
		background-color: #f81876;
		border: none;
		color: azure;
		font-weight: bold;
	}
</style>
