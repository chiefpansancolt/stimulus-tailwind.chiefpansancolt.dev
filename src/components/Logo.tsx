import Image, { type ImageProps } from 'next/image'

import darkModeLogoImage from '@/images/Dark Mode View.png'
import lightModeLogoImage from '@/images/Light Mode View.png'
import iconImage from '@/images/Stimulus x Tailwind Icon.png'

export function Logomark(props: Partial<ImageProps>) {
  return (
    <Image
      src={iconImage}
      alt=""
      width={72}
      height={72}
      unoptimized
      priority
      {...props}
    />
  )
}

export function Logo(props: Partial<ImageProps>) {
  return (
    <Image
      src={lightModeLogoImage}
      alt=""
      width={500}
      height={40}
      unoptimized
      priority
      {...props}
    />
  )
}

export function LogoDarkMode(props: Partial<ImageProps>) {
  return (
    <Image
      src={darkModeLogoImage}
      alt=""
      width={500}
      height={40}
      unoptimized
      priority
      {...props}
    />
  )
}
