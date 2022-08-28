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

<p class="mytext head mt-10" style="padding-left: 60px; padding-right: 60px">
	<strong>Join us for live music on the water</strong> and:
</p>

<ul class="mytext time mt-10">
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
