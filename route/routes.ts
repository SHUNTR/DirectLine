import deals from '~/assets/svg/deals.svg?raw'
import favorite from '~/assets/svg/favorite.svg?raw'
import store from '~/assets/svg/store.svg?raw'

type Route = {
	path: string
	svg: string
	text: string
}

const Routes: Route[] = [
	{
		path: '/favorite',
		svg: favorite,
		text: 'Избранное',
	},
	{
		path: '/',
		svg: store,
		text: 'Склад',
	},
	{
		path: '/deals',
		svg: deals,
		text: 'Сделки',
	},
]

export default Routes
