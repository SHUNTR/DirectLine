<template>
	<Transition mode="out-in">
		<article class="card">
			<div class="card__block">
				<img
					:src="Props.item.image"
					alt="cardImage"
					width="256"
					height="256"
					class="card__img"
				/>
				<div class="card__body">
					<span class="card__category"> {{ getItemCategory }} </span>
					<h3 class="card__title">
						{{ Props.item.title }}
					</h3>
					<div class="card__location">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-html="geoIcon"
						></svg>
						<span> {{ Props.item.Location }}</span>
					</div>

					<div class="card__seller">
						Продавец

						<span> {{ Props.item.seller }}</span>
					</div>
					<div class="card__type">
						<span>Вид товара</span>

						<span> {{ Props.item.type }}</span>
					</div>
					<p class="card__desc">{{ Props.item.description }}</p>
				</div>
			</div>
			<div class="card__block">
				<div class="card__body">
					<h2 class="card__total-price">
						{{ PriceFormatter(Props.item.price * Props.item.count) }}
					</h2>
					<div class="card__item-info">
						<div>
							Количество
							<span> {{ Props.item.count }} шт. </span>
						</div>
						<div>
							Стоимость за штуку
							<span>
								{{ PriceFormatter(Props.item.price) }}
							</span>
						</div>
					</div>
				</div>
				<footer class="card__footer">
					<button
						type="button"
						class="card__button"
						:disabled="Props.item.status == 2"
						:class="{ card__button_success: Props.item.status == 1 }"
						@click="mainStore.ChangeItemStatus(Props.item.id)"
					>
						{{ CardButtonText[Props.item.status] }}
					</button>
					<button
						type="button"
						class="card__button card__button_square"
						:class="{ active: Props.item.favorite }"
						@click="mainStore.ChangeFavoriteItemStatus(Props.item.id)"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-html="FavoriteIcon"
						></svg>
					</button>
				</footer>
			</div>
		</article>
	</Transition>
</template>

<script lang="ts" setup>
	import type { Item } from '~/store/models/item'
	import type { Category } from '~/store/models/categories'
	import { useMainStore } from '~/store/module/main'

	import geoIcon from '~/assets/svg/geo.svg?raw'

	import PriceFormatter from '~/libs/PriceFormatter'
	import FavoriteIcon from '~/assets/svg/favorite.svg?raw'

	interface Props {
		item: Item
	}

	const Props = defineProps<Props>()
	const Categories: Category[] | undefined = inject('Categories')
	const mainStore = useMainStore()

	const getItemCategory = computed((): string => {
		if (!Categories || !Array.isArray(Categories)) return 'Неизвестно'
		const category = Categories.find((category: Category) => category.id == Props.item.category_id)
		if (!category) return 'Неизвестно'
		return category.cardText
	})

	const CardButtonText = {
		'0': 'Добавить в сделки',
		'1': 'Оплатить',
		'2': 'Оплачено',
	}
</script>

<style></style>
