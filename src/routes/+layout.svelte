<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Rock The Dock &mdash; Official Website</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-B5W9BN7ZJZ"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-B5W9BN7ZJZ');
	</script>
</svelte:head>

<slot />
