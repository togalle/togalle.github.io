<script>
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

<div class="home-wrapper">
	<h5>Hi! My name is</h5>
	<h1>Tomas Galle</h1>
	<p>
		I'm a <span id="span-role">{currentRole}</span>
	</p>

	<!-- TODO: Latest artwork -->
	<!-- TODO: Latest blog post -->
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
