<script>
	let activities = [
		'Live music on the water',
		'Cornhole',
		'Beer tent',
		'Concessions',
		'And a whole lotta fun!'
	];

	import '../app.css';
</script>

<h1 class="mytext head"><u>Activities</u></h1>

<p class="mytext p mt-10">
	Not only will we be having <strong>live music on the water</strong>, we will also be hosting
	events such as:
</p>

<ul class="mytext p mt-10">
	{#each activities as activity}
		<li>⮞ {activity}</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
