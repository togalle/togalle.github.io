<script>
	import TypewriterList from '$lib/components/TypewriterList.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrolled = false;

	const handleScroll = () => {
		scrolled = true;
		window.removeEventListener('scroll', handleScroll);
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="home-wrapper">
	<section>
		<div class="main-card">
			<div class="center content">
				Hi! My name is
				<h1 class="highlight-name">Tomas Galle</h1>
				<p>
					I'm a <b><TypewriterList /></b>
				</p>
				<p class="bio">
					I'm a computer science student at Ghent University, with a passion for minimal,
					sustainable and effective software. As you can see, I'm not afraid to get my hands
					dirty—literally or figuratively! If you want to know more about me, feel free to send me a
					message!
				</p>
			</div>
			<div class="image-container">
				<img
					src={'/images/viking.webp'}
					alt="Portrait of Tomas Galle"
					class="squircle"
					loading="lazy"
				/>
			</div>
		</div>
		{#if !scrolled}
			<div class="scroll-indicator">↓</div>
		{/if}
	</section>

	<div class="flex">
		<section class="half">
			<h2>Testimonial</h2>
			<p>
				"Tomas is very eager to learn and critically assess his learning. He aims to complete his
				tasks successfully, always meeting the expectations set for him, and often exceeding them.
				He continues to strive for self-development and is not afraid to seek help and insights from
				colleagues in the process. In addition to being a good engineer, Tomas is also a great team
				player and possesses a good set of soft skills — where he consistently demonstrates a
				willingness to keep growing."
			</p>
			<div class="author">Manu De Buck (co-founder we are)</div>
		</section>
		<section class="half">
			<h2>Contact info</h2>
			<a href={'https://www.linkedin.com/in/tomas-galle-6b4baa164'} class="button">LinkedIn</a>
			<a href={`mailto:${'tomasgalle2002@gmail.com'}`} target="_blank" class="button">Email</a>
		</section>
	</div>
</div>

<style>
	/* General Styles */
	.home-wrapper {
		width: 80vw;
		text-align: center;
		margin: auto;
		display: flex;
		flex-direction: column;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.home-wrapper::-webkit-scrollbar {
		display: none;
	}

	.flex {
		display: flex;
		justify-content: space-between;
	}

	.half {
		flex: 1;
		margin: 0 10px;
		margin-top: 10vh;
		margin-bottom: 10vh;
	}

	/* Main Card Styles */
	.main-card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	.image-container {
		display: block;
	}

	.squircle {
		width: 20vw;
		height: 20vw;
		border-radius: 24%;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.content {
		max-width: 50vw;
	}

	.bio {
		max-width: 40vw;
		margin: auto;
	}

	/* Scroll Indicator Styles */
	.scroll-indicator {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.2em;
		animation: bounce 2s infinite;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		width: 2vh;
		height: 2vh;
		font-size: 0.8em;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-30px);
		}
		60% {
			transform: translateX(-50%) translateY(-15px);
		}
	}

	/* Button Styles */
	.button {
		padding: 10px 20px;
		margin: 10px 0;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
		font-weight: bold;
		background-color: #3fc3a4;
	}

	.button:hover {
		background-color: #2d9f84;
	}

	/* Heading Styles */
	h1 {
		margin-top: 1vh;
		margin-bottom: 1vh;
		font-size: 4em;
		line-height: 1em;
	}

	section {
		min-height: 80vh;
		margin-top: 10vh;
		margin-bottom: 10vh;
		padding-left: 5vw;
		padding-right: 5vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		scroll-snap-align: center;
		scroll-snap-stop: always;
		overflow-y: auto;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 2rem;
	}

	/* Responsive Styles */
	@media (max-width: 767px) {
		.home-wrapper {
			scroll-snap-type: y mandatory;
			overflow-y: scroll;
			height: 100vh;
			width: 100vw;
		}

		.scroll-indicator {
			display: none;
		}

		.flex {
			flex-direction: column;
			height: 200vh;
		}

		.half {
			min-height: 80vh;
			margin-top: 10vh;
			margin-bottom: 10vh;
		}

		.main-card {
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
		}

		.image-container {
			display: none;
		}

		.content {
			max-width: 90vw;
		}

		section {
			background-color: transparent;
		}

		h1 {
			font-size: 5em;
		}

		.bio {
			max-width: 70vw;
		}
	}
</style>
