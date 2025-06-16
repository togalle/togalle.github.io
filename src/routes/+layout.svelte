<script>
	import { onMount } from 'svelte';
	const pages = ['Resume', 'Portfolio', 'Gallery'];

	onMount(() => {
		document.documentElement.lang = 'en';
	});

	const openCv = () => {
		window.open('/CV-eng.pdf', '_blank');
	};
</script>

<svelte:head>
	<title>Tomas Galle</title>
	<meta
		name="description"
		content="The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."
	/>
	<meta
		name="keywords"
		content="Tomas Galle, portfolio, website, personal, blog, resume, contact, software developer, software engineer, digital art"
	/>
	<meta name="author" content="Tomas Galle" />
	<link
		href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
		rel="stylesheet"
	/>
	<meta http-equiv="Content-Language" content="en" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="body-wrapper">
	<nav>
		<ul class="navigator">
			{#each pages as page}
				<li>
					{#if page === 'Resume'}
						<a href="https://docs.google.com/document/d/1UEkzEmfhBgyR0R5oyC_LgFkGYl_FA5r8rs-06yDgM3U/edit?usp=sharing" target="_blank">{page}</a>
					{:else if page === 'Gallery'}
						<a href="https://tayku.carrd.co/#art" target="_blank">Gallery</a>
					{:else if page === 'Portfolio'}
						<a href="https://github.com/togalle?tab=repositories" target="_blank">Portfolio</a>
					{:else}
						<a href={['Home'].includes(page) ? '/' : `/${page.toLowerCase()}`}>{page}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<slot />
</div>

<style>
	:root {
color-scheme: light dark;
}
	:global(body) {
		margin: 0;
		padding: 0;
		color: white;
		font-family: 'Poppins', 'URW Gothic', Avenir, Montserrat, Corbel, source-sans-pro, sans-serif;
		font-weight: normal;
		font-size: calc(15px + 0.390625vw);
		background-color: #8e7ab5;
background-image: linear-gradient(to bottom right, light-dark(#55c364, #1E2326), light-dark(#0060ae, #3C4841));
	}

	:global(a) {
		color: white;
		text-decoration: none;
	}

	nav {
		z-index: 100;
		height: 10vh;
		position: fixed;
		width: 100%;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	ul {
		list-style-type: none;
	}

	.navigator {
		display: flex;
		justify-content: space-evenly;
		padding: 0;
	}

	a {
		display: inline-block;
		padding: 2vh;
		border-radius: 50px;
		background-color: rgba(255, 255, 255, 0.1);
		transition:
			background-color 0.2s ease-in-out,
			transform 0.2s ease-in-out;
		box-sizing: border-box;
	}

	a:hover {
		transform: scale(1.2);
		background-color: rgba(255, 255, 255, 0.2);
		transition:
			background-color 0.2s ease-in-out,
			transform 0.2s ease-in-out;
	}

	@media (max-width: 991px) {
		nav {
			position: absolute;
			bottom: 0;
		}
	}
</style>
