<script>
	import '../app.css';

	import Divider from '../components/Divider.svelte';
	import Activities from '../components/Activities.svelte';
	import Money from '../components/Money.svelte';
	import Socials from '../components/Socials.svelte';
	import Button from '../components/Button.svelte';
</script>

<img src="/images/band.png" alt="band" />

<h1 class="mytext date mt-10">September 10th, 2022</h1>
<h3 class="mytext time mt-10">Doors open @ 1PM - Event ends at 9PM</h3>

<p class="mytext p mt-10">
	Free for veterans & emergency service personnel <br />
	$10 for everyone else
</p>

<div class="centerButton">
	<Button name="Get your tickets!" link="https://form.jotform.com/222358527525055" />
</div>
<div class="empty"></div>
<div class="centerButton">
	<Button name="Dowload Poster" link="https://daf2f229-7c38-4638-a12f-2442ff647e3d.usrfiles.com/ugd/daf2f2_c9314f70133148f4b793fc837ac44cdd.pdf" />
</div>

<Socials />

<Divider />

<div>
	<Activities />
	<Divider />
	<iframe src="https://www.youtube.com/embed/mrO6kHouK9I" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<Divider />
</div>

<div>
	<Money />
	<Divider />
</div>

<h3 class="mytext head">To those who serve and protect:</h3>
<h3 class="mytext head">Thank you.</h3>

<div class="mb-10">
	<Socials />
</div>


<style>

	.centerButton {

		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;

	}

	.empty {
		margin: 20px;
	}

</style>