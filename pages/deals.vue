<template>
	<div class="page__content container">
		<div class="filter">
			<FilterCategories
				:ActiveCategory="ActiveCategory"
				:Categories="Categories"
				@ChangeCategory="
					(value) => {
						ActiveCategory = value
					}
				"
			/>
			<UISearch
				:text="SearchText"
				@submit="
					(value) => {
						SearchText = value
					}
				"
			/>
		</div>
		<div class="catalog">
			<CatalogList :Items="FilteredItems" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useMainStore } from '~/store/module/main'
	import type { Item } from '~/store/models/item'

	const mainStore = useMainStore()
	const ActiveCategory = ref(-1)
	const SearchText = ref('')

	const Categories = ref([{ id: -1, text: 'Все типы' }])
	const Items = ref()

	const FilteredItems = computed(() => {
		if (!Items.value || !Array.isArray(Items.value)) return []
		return Items.value.filter((item: Item) => {
			if (item.status == 0) return false
			if (ActiveCategory.value != -1 && item.category_id != ActiveCategory.value) return false
			if (!item.title.match(new RegExp(`${SearchText.value.trim().toLowerCase()}`))) return false
			return true
		})
	})

	onBeforeMount(() => {
		Categories.value = [...Categories.value, ...mainStore.categories]
		Items.value = [...mainStore.items]
	})
	provide('Categories', mainStore.categories)
</script>

<style></style>
