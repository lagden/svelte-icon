<script>
	export let name
	export let useBase = true
	export let useTransition = false
</script>

<svg
	class:_tadashi_svelte_icon___base={useBase}
	class:_tadashi_svelte_icon___transition={useTransition}
	on:click
	{...$$restProps}
><use xlink:href="#{name}" /></svg>

<style>
	._tadashi_svelte_icon___base {
		fill: var(--tadashi_svelte_icon_fill, initial);
		width: var(--tadashi_svelte_icon_width, initial);
		height: var(--tadashi_svelte_icon_height, initial);
	}

	._tadashi_svelte_icon___transition {
		transition: var(--tadashi_svelte_icon_transition, fill .4s);
	}
</style>
