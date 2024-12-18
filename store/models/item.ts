enum ItemStatuses {
	Pending = 0,
	Active = 1,
	Selled = 2,
}

type Item = {
	id: number
	category_id: number
	title: string
	image: string
	Location: string
	seller: string
	type: string
	description: string
	count: number
	price: number
	favorite: boolean
	status: ItemStatuses
}

export type { Item }
