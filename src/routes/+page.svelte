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
	<section>
		<h5>Hi! My name is</h5>
		<h1>Tomas Galle</h1>
		<p>
			I'm a <span id="span-role">{currentRole}</span>
		</p>
	</section>

	<!-- TODO: Latest artwork -->
	<!-- TODO: Latest blog post -->
	<!-- TODO: Testimonial -->
	<section>
		<h3>Testimonials</h3>
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
	<!-- TODO: Contact info -->
	<section>
		<h3>Contact info</h3>
		<a href={'https://www.linkedin.com/in/tomas-galle-6b4baa164'}>LinkedIn</a>
		<a href={`mailto:${'tomasgalle2002@gmail.com'}`} target="_blank">Email</a>
		<a href={`tel:${'+32 479 81 96 29'}`}>Phone</a>
	</section>
</div>

<style>
	.home-wrapper {
		flex-grow: 1;

		width: 80vw;
		text-align: center;
		margin: auto;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	h1 {
		margin-top: 0.5vh;
	}

	section {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
