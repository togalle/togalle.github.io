<script>
	const roles = [
		'software developer',
		'digital artist',
		'snowboarder',
		'pianist',
		'gym enthusiast'
	];
</script>

<div class="home-wrapper">
	<h5>Hi! My name is</h5>
	<h1>Tomas Galle</h1>
	<p>
		I'm a{'\n'}
		{#each roles as role}
			{role},{'\n'}
		{/each}
	</p>
</div>

<style>
	.home-wrapper {
		height: 90vh;
		width: 80vw;
		text-align: center;
		margin: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
