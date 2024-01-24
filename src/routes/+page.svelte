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
	<div class="introduction">
		<h5>Hi! My name is</h5>
		<h1>Tomas Galle</h1>
		<p>
			I'm a <span id="span-role">{currentRole}</span>
		</p>
	</div>

	<!-- TODO: Latest artwork -->
	<!-- TODO: Latest blog post -->
	<!-- TODO: Testimonial -->
	<div class="testimonials">
		<h3>Testimonials</h3>
		<p>
			"Tomas is enorm leergierig én leerkritisch. Hij streeft ernaar om zijn taken tot een goed
			einde te brengen. Dit doet hij steeds volgens de verwachtingen die hem werden opgelegd, al
			overstijgt hij deze vaak. Hij blijft streven naar zelfontwikkeling, en is niet bang om daarbij
			hulp en inzichten te vragen bij collega's. Tomas is naast een goede ingenieur ook een goede
			team-player, en heeft een goede portie soft-skills, —waar hij toont steeds in te willen
			blijven groeien."
		</p>
		<div class="author">Manu De Buck (co-founder we are)</div>
	</div>
	<!-- TODO: Contact info -->
	<div class="contact">
		<h3>Contact info</h3>
		<a href={'https://www.linkedin.com/in/tomas-galle-6b4baa164'}>LinkedIn</a>
		<a href={`mailto:${'tomasgalle2002@gmail.com'}`} target="_blank">Email</a>
		<a href={`tel:${'+32 479 81 96 29'}`}>Phone</a>
	</div>
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

	h3 {
		margin-top: 10vh;
	}
</style>
