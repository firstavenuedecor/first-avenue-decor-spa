export default function resizeShopifyImage(
  src: string,
  width: number | '' = '',
  height: number | '' = '',
  crop: boolean = false,
): string {
  const parts = src.split(/\.(jpg|png)/)
  const dimensions = width + 'x' + height
  const cropped = crop ? '_cropped' : ''

  const resizedSrc = parts[0] + '_' + dimensions + cropped + '.' + parts[1]

  return resizedSrc
}