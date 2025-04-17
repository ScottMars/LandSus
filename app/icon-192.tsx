import { ImageResponse } from "next/og"
import type { Route } from "next"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 192,
  height: 192,
}
export const contentType = "image/png"

// Image generation
export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2196F3",
          width: "100%",
          height: "100%",
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Susanin Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
