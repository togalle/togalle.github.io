<script>
	const pages = ['Home', 'Resume', 'Portfolio', 'Blog'];
</script>

<svelte:head>
	<title>Tomas Galle</title>
	<meta
		name="description"
		content="The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."
	/>
</svelte:head>

<div class="body-wrapper">
	<nav>
		<ul class="navigator">
			{#each pages as page}
				<li>
					<a href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>{page}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;

		color: white;

		background-color: #f0f0f0;
		background-image: linear-gradient(to bottom right, #1e4291, #c01140);
	}

	:global(a) {
		color: rgb(243, 39, 97);
		text-decoration: none;
	}

	nav {
		height: 10vh;
		position: fixed;
		width: 100%;
		backdrop-filter: blur(10px);

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.navigator {
		display: flex;
		justify-content: space-evenly;
		padding: 0;
	}
</style>
