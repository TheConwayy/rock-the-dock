<script>
	let platforms = [
		{ icon: 'facebook-f', url: 'https://www.facebook.com/harrison.chamber.9' },
		{ icon: 'instagram', url: 'https://www.instagram.com/harrisonareachamber/' },
		{ icon: 'twitter', url: 'https://twitter.com/ChamberHarrison' },
		{ icon: 'snapchat', url: 'https://www.snapchat.com/add/h_chamber58' },
		{ icon: 'tiktok', url: 'https://www.tiktok.com/@harrisonareachamber' }
	];
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b6dbfc57a8.js" crossorigin="anonymous"></script>
</svelte:head>

<ul>
	{#each platforms as platform}
		<li>
			<a href={platform.url}><i class="fa-brands fa-{platform.icon}" /></a>
		</li>
	{/each}
</ul>

<style>
	ul {
		font-size: 1.5rem;
		line-height: 2rem;
		list-style-type: none;
		margin-top: 5rem;
		text-align: center;
		padding: 0;
		color: #f2f2f2;
	}

	li {
		display: inline;
		padding: 5px;
	}

	li a {
		color: #f2f2f2;
		font-size: clamp(2rem, 3vw, 3rem);
	}
</style>
