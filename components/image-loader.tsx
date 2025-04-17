"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface CustomImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: CustomImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} />
}
