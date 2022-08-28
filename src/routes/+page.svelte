<script>
	import '../app.css';

	import Divider from '../components/Divider.svelte';
	import Activities from '../components/Activities.svelte';
	import Money from '../components/Money.svelte';
	import Socials from '../components/Socials.svelte';
	import Button from '../components/Button.svelte';
	import MusicBy from '../components/MusicBy.svelte';
</script>

<img src="/images/band.png" alt="band" />

<h1 class="mytext date mt-10">September 10th, 2022</h1>

<p class="mytext time mt-10">
	<span style="font-size:50px;font-weight:bold;">Harrison, MI 48625</span><br />
	Saxtons Landing - Power Docks <br />
	170 N Lake St.
</p>

<h3 class="mytext time mt-10">Doors open @ 1PM - Event ends at 10PM</h3>

<MusicBy />

<p class="mytext p mt-10">
	$10 addmission <br />
	<strong>FREE</strong> for Veterans & Emergency Service Personnel
</p>

<div class="centerButton">
	<Button name="Get your tickets!" link="https://form.jotform.com/222358527525055" />
</div>
<div class="empty" />
<div class="centerButton">
	<Button
		name="Dowload Poster"
		link="https://daf2f229-7c38-4638-a12f-2442ff647e3d.usrfiles.com/ugd/daf2f2_c9314f70133148f4b793fc837ac44cdd.pdf"
	/>
</div>

<Socials />

<Divider />

<div>
	<Activities />
	<Divider />
	<iframe
		src="https://www.youtube.com/embed/mrO6kHouK9I"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<Divider />
</div>

<div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5906.078839360199!2d-84.80225748522317!3d44.02196901895556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8821dce6d3876443%3A0x2376337073f4bdfb!2sN%20Lake%20St%2C%20Harrison%2C%20MI%2048625!5e0!3m2!1sen!2sus!4v1661716546315!5m2!1sen!2sus"
		width="600"
		height="400"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
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
