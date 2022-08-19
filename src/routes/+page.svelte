<script>
	import '../app.css';

	import Divider from '../components/Divider.svelte';
	import Activities from '../components/Activities.svelte';
	import Money from '../components/Money.svelte';
	import Socials from '../components/Socials.svelte';
</script>

<img src="/images/band.png" alt="band" />

<h1 class="mytext date mt-10">September 10th, 2022</h1>
<h3 class="mytext time mt-10">Doors open @ 1PM - Event ends at 9PM</h3>

<p class="mytext p mt-10">
	Free for veterans & emergency service personnel <br />
	$10 for everyone else
</p>

<Socials />

<Divider />

<div>
	<Activities />
	<Divider />
</div>

<div>
	<Money />
	<Divider />
</div>

<h3 class="mytext time">To those who serve and protect:</h3>
<h3 class="mytext text-5xl font-bold mt-3">Thank you.</h3>

<div class="mb-10">
	<Socials />
</div>
