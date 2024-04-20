<script>
	// @ts-nocheck
	export let colors = [];
</script>

<ul class="list">
	{#each colors as color, index}
		<li style="background: {color}">{index + 1}</li>
	{/each}
</ul>

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
</style>
