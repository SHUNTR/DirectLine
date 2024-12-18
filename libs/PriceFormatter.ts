export default function (price: number): string {
	const formatter = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
	})
	return formatter.format(price)
}
