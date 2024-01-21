<script>
	const pages = ['Home', 'Resume', 'Portfolio', 'Blog'];
</script>

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

<style>
	.navigator {
		display: flex;
		justify-content: space-evenly;
		padding: 0;
	}

	nav {
		height: 5vh;
	}
</style>
