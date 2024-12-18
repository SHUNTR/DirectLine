<template>
	<NuxtLink
		class="header__link link"
		:to="Props.Route.path"
	>
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="link__icon"
			v-html="Props.Route.svg"
		></svg>
		<span class="link__text"> {{ Props.Route.text }} </span>
	</NuxtLink>
</template>

<script lang="ts" setup>
	const Props = defineProps(['Route'])
</script>

<style></style>
