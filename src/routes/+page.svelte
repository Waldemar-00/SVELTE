<script>
	import Dialog from '$lib/Dialog.svelte';
	import ColorsList from '$lib/ColorsList.svelte';
	import Posts from '$lib/Posts.svelte';
	const name = 'cats';
	const message = 'This page only for free cats like <em>The cat in boots!</em>';
	const alt = 'Cat in glasses and shirt';
	const src_0 =
		'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg';
	const src =
		'https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg';
	let passengerCounter = 0;
	$: multiplying = passengerCounter * 10;
	$: {
		console.log(passengerCounter);
		console.log(multiplying);
		if (multiplying > 100) alert(multiplying.toString().toLowerCase());
	}
	let arrayColors = {
		colors: [
			{ color: '#F81876', id: '#F81876', product: 'apple' },
			{ color: '#F65E17', id: '#F65E17', product: 'banana' },
			{ color: '#009EC4', id: '#009EC4', product: 'carrot' },
			{ color: 'blue', id: 'blue', product: 'doughnut' },
			{ color: 'green', id: 'green', product: 'egg' }
		]
	};
	function openDialog() {
		passengerCounter = passengerCounter + 1;
	}
</script>

<h1>Blog for FREE {name.toUpperCase()}!!!</h1>
<img {src} alt="FREE" />
<img src={src_0} {alt} />
<Dialog textBtn="Submit" />
<h2>{@html message}</h2>
<button class="add" on:click={openDialog}>Add new passenger!</button>
<span class="allPassengers">All passengers: {passengerCounter}</span>
<div class="multiplying">{multiplying}</div>
{#if multiplying > 100}
	<span class="message">{multiplying} is more than 100</span>
{:else if multiplying == 100}
	<span class="message">{multiplying} is equal to 100</span>
{:else}
	<span class="message">{multiplying} is less than 100</span>
{/if}

<ColorsList {...arrayColors} />
<Posts />

<style>
	h1 {
		color: #90004c;
	}
	h2 {
		display: inline-block;
		color: #332694;
	}
	.add,
	.allPassengers,
	.multiplying,
	.message {
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
	.allPassengers {
		background-color: #d10b1c;
		font-size: 15.33px;
		padding: 0.5rem 5vw;
	}
	.multiplying {
		display: inline-block;
		background-color: #009ec4;
	}
	.message {
		background-color: #f65e17;
	}
</style>
