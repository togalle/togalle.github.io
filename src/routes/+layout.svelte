<script>
	const pages = ['Home', 'Resume', 'Portfolio', 'Blog', 'Testimonials'];
</script>

<nav>
	<ul>
		{#each pages as page}
			<li>
				<a href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>{page}</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />
