<script>
	let activities = [
		'Live music on the water',
		'Cornhole',
		'Beer tent',
		'Concessions',
		'And a whole lotta fun!'
	];
</script>

<h1 class="mytext text-6xl font-bold underline">Activities</h1>

<p class="mytext text-2xl mt-10">
	Not only will we be having <strong>live music on the water</strong>, we will also be hosting
	events such as:
</p>

<ul class="mytext text-2xl mt-10">
	{#each activities as activity}
		<li>⮞ {activity}</li>
	{/each}
</ul>
