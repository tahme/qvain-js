<template>
	<div v-bind:class="{ wrapper: wrapped, error: error }">
		<slot></slot>
	</div>
</template>
<script>

export default {
	name: 'wrapper',
	props: {
		wrapped: { type: Boolean, default: false },
		error: { type: Boolean, default: false },
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 20px;
    box-shadow: 2px 2px 15px 0px lightgrey;
	//box-shadow: 1px 2px 5px 0px #d3d3d3a6;
}
.error {
	border-right: solid 5px red;
}
</style>

