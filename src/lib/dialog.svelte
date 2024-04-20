<script>
	export let textBtn = 'Click me';
</script>

<dialog class="modal">
	<div>
		<button class="close">X</button>
		<form method="dialog" class="modalForm">
			<input type="text" name="name" placeholder="name" />
			<input type="text" name="sourname" placeholder="sourname" />
			<input type="number" name="age" placeholder="age" />
			<button type="submit">{textBtn}</button>
		</form>
	</div>
</dialog>
