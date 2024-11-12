<script>
	import TypewriterList from '$lib/components/TypewriterList.svelte';
	import { onMount } from 'svelte';

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
				<span class="small-text">Hi! My name is</span>
				<h1 class="highlight-name">Tomas Galle</h1>
				<p>
					I'm a <b><TypewriterList /></b>
				</p>
				<p class="bio small-text">
					I'm a computer science student at Ghent University with a passion for minimal,
					sustainable, and effective software. <span class="mobile-invisible"
						>As you can see,
					</span>I'm not afraid to get my hands dirty<span class="mobile-invisible">—literally</span
					>! Feel free to reach out if you'd like to connect.
				</p>
				<!-- 
					frontend: react, svelte, angular 
					backend: node, fastify
					inftrastucture: docker, aws, ansible, terraform
					varia: tensorflow, linux, java, bash
					-->

				<p class="skill-icons">
					<img alt="React" src="https://skillicons.dev/icons?i=react&theme=light" />
					<img alt="Svelte" src="https://skillicons.dev/icons?i=svelte&theme=light" />
					<img alt="Node.js" src="https://skillicons.dev/icons?i=nodejs&theme=light" />
					<img alt="Docker" src="https://skillicons.dev/icons?i=docker&theme=light" />
					<img alt="Kubernetes" src="https://skillicons.dev/icons?i=kubernetes&theme=light" />
					<img alt="AWS" src="https://skillicons.dev/icons?i=aws&theme=light" />
					<img alt="TensorFlow" src="https://skillicons.dev/icons?i=tensorflow&theme=light" />
					<img alt="Linux" src="https://skillicons.dev/icons?i=linux&theme=light" />
					<img alt="Bash" src="https://skillicons.dev/icons?i=bash&theme=light" />
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
			<a href={'https://www.linkedin.com/in/tomas-galle-6b4baa164'} class="button"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-linkedin"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
					/>
				</svg> LinkedIn</a
			>
			<a href={`mailto:${'tomasgalle2002@gmail.com'}`} target="_blank" class="button"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-envelope-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
					/>
				</svg> Email</a
			>
			<a href={`https://t.me/taykuuu`} target="_blank" class="button"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-telegram"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
					/>
				</svg> Telegram</a
			>
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

	.small-text {
		font-size: 0.9em;
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
		font-size: 5em;
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
	@media (max-width: 991px) {
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

		.bio {
			max-width: 70vw;
		}

		.mobile-invisible {
			display: none;
		}
	}

	.skill-icons > img {
		margin: 0.2vw;
		transition: transform 0.2s ease;
	}
</style>
