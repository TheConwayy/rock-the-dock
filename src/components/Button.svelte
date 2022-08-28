<script>
	export let name;
	export let link;
</script>

<a href={link} target="_blank"><button>{name}</button></a>

<style>
	button {
		color: #212121;
		background-color: #f2f2f2;
		border: none;
		border-radius: 5px;

		font-weight: bold;
		font-size: clamp(1rem, 2vw, 2rem);
		text-align: center;

		padding: 10px;
	}
</style>
