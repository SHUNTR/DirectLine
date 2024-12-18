<template>
	<div class="categories">
		<ul class="categories__list">
			<li
				v-if="Props.Categories"
				v-for="category in Props.Categories"
				:key="category.id"
				:class="{ active: Props.ActiveCategory == category.id }"
				class="categories__item"
			>
				<button
					type="button"
					class="categories__button"
					@click="$emit('ChangeCategory', category.id)"
				>
					{{ category.text }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import type { Category } from '~/store/models/categories'
	interface Props {
		Categories: Category[]
		ActiveCategory: number
	}
	const Props = defineProps<Props>()
</script>

<style></style>
