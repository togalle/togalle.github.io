<script>
	import { onMount } from 'svelte';

	const roles = [
		'software developer',
		'digital artist',
		'snowboarder',
		'pianist',
		'gym enthusiast',
		'plant dad'
	];
	let index = 0;
	let currentRole = '';

	/**
	 * @param {string} role
	 */
	function setRole(role) {
		currentRole += role[0];

		if (role.length > 1) {
			setTimeout(() => setRole(role.slice(1)), 100);
		}
	}

	function clearRole() {
		currentRole = currentRole.substring(0, currentRole.length - 1);

		if (currentRole.length > 0) {
			return new Promise((resolve) => {
				setTimeout(() => clearRole().then(resolve), 50);
			});
		} else {
			return Promise.resolve();
		}
	}

	/**
	 * @param {string} role
	 */
	function changeRole(role) {
		clearRole()?.then(() => setRole(role));
	}

	onMount(() => {
		function typewriterEffect() {
			if (index < roles.length - 1) {
				index++;
			} else {
				index = 0;
			}

			changeRole(roles[index]);
			setTimeout(typewriterEffect, 3000);
		}

		typewriterEffect();
	});
</script>

<div class="home-wrapper">
	<h5>Hi! My name is</h5>
	<h1>Tomas Galle</h1>
	<p>
		I'm a <span id="span-role">{currentRole}</span>
	</p>
</div>

<style>
	.home-wrapper {
		flex-grow: 1;

		height: 90vh;
		width: 80vw;
		text-align: center;
		margin: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		margin-top: 0.5vh;
	}
</style>
