<script>
	import Divider from '../components/Divider.svelte';
	import Activities from '../components/Activities.svelte';
	import Money from '../components/Money.svelte';
</script>

<img src="/images/band.png" alt="band" class="object-cover w-full h-[540px]" />

<h1 class="mytext text-7xl mt-20 font-bold">September 10th, 2022</h1>
<h3 class="mytext text-4xl mt-10 font-bold">Doors open @ 1PM - Event ends at 9PM</h3>

<p class="mytext text-2xl mt-10">
	Free for veterans & emergency service personnel <br />
	$10 for everyone else
</p>

<div class="flex items-center justify-center mt-[83px]">
	<button class="font-Inter text-4xl font-bold text-black bg-white py-8 px-14 rounded-lg"
		>More Info</button
	>
</div>

<div class="mt-[120px]">
	<Activities />
	<Divider />
</div>

<div>
	<Money />
	<Divider />
</div>
