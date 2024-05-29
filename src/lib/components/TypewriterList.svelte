<script>
	import { onMount } from 'svelte';

	const pauseTime = 2000; // ms
	export let roles = [
		'software developer 💻',
		'digital artist 🖌️',
		'snowboarder 🏂',
		'pianist 🎵',
		'gym enthusiast 💪',
		'plant dad 🌱'
	];

	let index = roles.length - 1;
	let currentRole = '';

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
</script>

<span id="span-role">{currentRole}</span><span class="blinking-cursor" />
