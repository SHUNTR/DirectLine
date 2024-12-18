<template>
	<div class="search">
		<input
			class="search__input"
			type="text"
			v-model="Text"
		/>
		<button
			class="search__button"
			type="button"
			@click="$emit('submit', Text)"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				v-html="SearchIcon"
			></svg>
		</button>
	</div>
</template>

<script lang="ts" setup>
	import SearchIcon from '~/assets/svg/search.svg?raw'

	const Props = defineProps(['text'])

	const Text = ref(Props.text)
</script>

<style></style>
