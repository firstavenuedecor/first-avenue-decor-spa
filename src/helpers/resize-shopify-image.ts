export default function resizeShopifyImage(
  src: string,
  width: number | '' | null = null,
  height: number | '' | null = null,
  crop: boolean = false,
): string {
  if (!width) {
    width = ''
  }
  if (!height) {
    height = ''
  }

  const parts = src.split(/\.(jpg|png|webp)/)
  const dimensions = width + 'x' + height
  const cropped = crop ? '_cropped' : ''

  const resizedSrc = parts[0] + '_' + dimensions + cropped + '.' + parts[1]

  return resizedSrc
}