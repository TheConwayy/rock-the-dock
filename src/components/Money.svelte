<script>
	let places = [
		{ perc: '25', act: 'Cornhole tournament', name: "Clare County Sheriff's Office" },
		{ perc: '10', act: 'Addmissions', name: 'Clare County Veterans Serices' }
	];

	let ul = 'underline';
	let lc = 'lowercase';
</script>

<h1 class="mytext text-6xl font-bold underline">Where your money goes</h1>

<p class="mytext text-2xl mt-10">
	Part of our mission is to give back to out community. That's why:
</p>

<ul class="mytext text-2xl mt-10">
	{#each places as place}
		<li class="my-5">
			⮞ <span class={ul}>{place.perc}%</span> of proceeds gathered from the
			<span class={lc}>{place.act}</span>
			is going towards the <span class={ul}>{place.name}</span>.
		</li>
	{/each}
</ul>
