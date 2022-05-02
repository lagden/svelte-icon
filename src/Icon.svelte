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
		fill: var(--tadashi_svelte_icon_fill, inherit);
		width: var(--tadashi_svelte_icon_width, auto);
		height: var(--tadashi_svelte_icon_height, var(--tadashi_svelte_icon_width, inherit));
		display: var(--tadashi_svelte_icon_display, block);
		flex: none;
	}

	._tadashi_svelte_icon___transition {
		transition: var(--tadashi_svelte_icon_transition, fill .3s);
	}
</style>
