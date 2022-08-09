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

<ul class="mytext text-2xl list-none mt-10">
	{#each platforms as platform}
		<li class="mx-2 inline">
			<a href={platform.url}><i class="fa-brands fa-{platform.icon}" /></a>
		</li>
	{/each}
</ul>
