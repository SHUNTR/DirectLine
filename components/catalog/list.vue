<template>
	<div class="catalog__list">
		<CatalogCard
			v-for="item in Props.Items"
			:key="item.id"
			:item="item"
		/>
	</div>
</template>

<script lang="ts" setup>
	import type { Item } from '~/store/models/item'
	interface Props {
		Items: Item[]
	}
	const Props = defineProps<Props>()
</script>
