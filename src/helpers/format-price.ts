export default function formatPrice(amount: string): string {
  let price = amount
  const parts = amount.split('.')
  if (parts[1].length === 1) {
    price += '0'
  }

  return '$' + price
}