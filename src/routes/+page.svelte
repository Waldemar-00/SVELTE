<script>
	import Dialog from '../lib/dialog.svelte';
	const name = 'Uladzimir';
	const alt = 'Cat in glasses and shirt';
	const src_0 =
		'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg';
	const src =
		'https://t4.ftcdn.net/jpg/02/16/28/19/360_F_216281970_6gotBzdxtFD6vjh7RGmcc4X2JpJz3pr0.jpg';
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<h1>It's Me - {name.toUpperCase()}!!!</h1>
<img {src} alt="FREE" />
<img src={src_0} {alt} />
<Dialog />

<style>
	h1 {
		color: red;
	}
</style>
