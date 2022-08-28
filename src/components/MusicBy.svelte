<script>
	let info = [
		{ name: 'Southbound', time: '2-4', page: 'https://www.facebook.com/southboundrock' },
		{ name: "Miranda & the M80's", time: '5-9', page: 'https://mirandasm80s.com/home' }
	];

	import '../app.css';
</script>

<h1 class="mytext time mt-10 ul" style="text-decoration: underline;">
	Live music of the 70s & 80s provided by:
</h1>

<ul class="mytext p">
	{#each info as info}
		<li>
			⮞ <strong>{info.name}</strong> from <strong>{info.time} PM</strong>
			<em>(<a href={info.page} target="_blank">link</a>)</em>
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
