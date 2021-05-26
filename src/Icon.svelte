<script>
	export let name

	const useCssVar = Boolean($$restProps?.style)
</script>

<svg
	class:_tadashi_svelte_icon___vars={useCssVar}
	on:click
	{...$$restProps}
><use xlink:href="#{name}" /></svg>

<style>
	._tadashi_svelte_icon___vars {
		fill: var(--tadashi_svelte_icon_fill, initial);
		width: var(--tadashi_svelte_icon_width, initial);
		height: var(--tadashi_svelte_icon_height, initial);
	}
</style>
