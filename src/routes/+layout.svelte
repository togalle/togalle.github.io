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
	.body-wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh - 1px;
	}

	nav {
		height: 5vh;
	}

	.navigator {
		display: flex;
		justify-content: space-evenly;
		padding: 0;
	}
</style>
