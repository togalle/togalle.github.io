<script>
	import { onMount } from 'svelte';

	const pauseTime = 2000; // ms
	const roles = [
		'software developer',
		'digital artist',
		'snowboarder',
		'pianist',
		'gym enthusiast',
		'plant dad'
	];

	let index = roles.length - 1;
	let currentRole = '';
	let scrolled = false;

	// Dynamic role typing effect
	/**
	 * @param {string} role
	 */
	function addRoleLetter(role) {
		currentRole += role[0];
		return role.length > 1
			? new Promise((resolve) => setTimeout(() => addRoleLetter(role.slice(1)).then(resolve), 100))
			: Promise.resolve();
	}

	function clearRole() {
		currentRole = currentRole.slice(0, -1); // Remove last letter
		return currentRole.length > 0
			? new Promise((resolve) => setTimeout(() => clearRole().then(resolve), 50))
			: Promise.resolve();
	}

	/**
	 * @param {string} role
	 */
	function setRole(role) {
		return clearRole()
			.then(() => addRoleLetter(role))
			.then(() => Promise.resolve());
	}

	function typewriterEffect() {
		index = (index + 1) % roles.length; // Loop through list
		setRole(roles[index]).then(() => setTimeout(typewriterEffect, pauseTime));
	}

	$: typewriterEffect();

	// Scroll indicator
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
		<b>Hi! My name is</b>
		<h1>Tomas Galle</h1>
		<p>
			I'm a <span id="span-role">{currentRole}</span><span class="blinking-cursor" />
		</p>
		{#if !scrolled}
			<div class="scroll-indicator">↓</div>
		{/if}
	</section>

	<!-- TODO: Latest artwork -->
	<!-- TODO: Latest blog post -->
	<section>
		<h2>Testimonials</h2>
		<p>
			"Tomas is very eager to learn and critically assess his learning. He aims to complete his
			tasks successfully, always meeting the expectations set for him, and often exceeding them. He
			continues to strive for self-development and is not afraid to seek help and insights from
			colleagues in the process. In addition to being a good engineer, Tomas is also a great team
			player and possesses a good set of soft skills — where he consistently demonstrates a
			willingness to keep growing."
		</p>
		<div class="author">Manu De Buck (co-founder we are)</div>
	</section>
	<section>
		<h2>Contact info</h2>
		<a href={'https://www.linkedin.com/in/tomas-galle-6b4baa164'}>LinkedIn</a>
		<a href={`mailto:${'tomasgalle2002@gmail.com'}`} target="_blank">Email</a>
	</section>
</div>

<style>
	.scroll-indicator {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.2em;
		animation: bounce 2s infinite;

		background-color: rgb(255, 255, 255, 0.2);
		border-radius: 50%;
		width: 2vh;
		height: 2vh;
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

	h1 {
		margin-top: 1vh;
		margin-bottom: 1vh;
		font-size: 5em;
	}

	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;

		scroll-snap-align: center;
		scroll-snap-stop: always;
		overflow-y: auto;
	}

	@media (max-width: 768px) {
		.home-wrapper {
			scroll-snap-type: y mandatory;
			overflow-y: scroll;
			height: 100vh;
		}

		.scroll-indicator {
			display: none;
		}
	}

	#span-role::after {
		content: '|';
		display: inline-block;
		animation: blinkCursor 1s infinite;
	}

	@keyframes blinkCursor {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
