<script>
	let places = [
		{ perc: '25', act: 'cornhole tournament', name: "Clare County Sheriff's Office" },
		{ perc: '10', act: 'Aaddmissions', name: 'Clare County Veterans Serices' }
	];

	let ul = 'text-decoration: underline;';
</script>

<h1 class="mytext head"><u>Where your money goes</u></h1>

<p class="mytext p mt-10">Part of our mission is to give back to out community. That's why:</p>

<ul class="mytext p mt-10">
	{#each places as place}
		<li class="my-5">
			⮞ <span class={ul}>{place.perc}%</span> of proceeds gathered from the
			{place.act}
			is going towards the <span style={ul}>{place.name}</span>.
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		padding: 5px;
	}
</style>
