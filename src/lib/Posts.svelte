<script>
	// @ts-nocheck

	import { getFetch } from '$lib/index';
	let posts = getFetch();
</script>

<button
	on:click={() => {
		posts = getFetch('https://jsonplaceholder.typicode.com/posts');
		return posts;
	}}>Get Posts</button
>
<ol>
	{#await posts}
		<p>...waiting</p>
	{:then posts}
		{#each posts as post (post.id)}
			<li>
				<p>
					{post.title}
				</p>
				<p>{post.body}</p>
			</li>
		{/each}
	{:catch error}
		<p>{error}</p>
	{/await}
</ol>

<style>
	button {
		display: block;
		margin: 1rem;
		padding: 0.5rem;
		width: 20vw;
		background-color: transparent;
		border-radius: 7px;
		background-color: #00a2f9;
		border: none;
		color: azure;
		font-weight: bold;
	}
	p {
		color: #003754;
	}
</style>
