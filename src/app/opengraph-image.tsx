import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "TORCH by Intelligent B2B: Never miss a customer again. We build it. You close the deals."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Social share image (WhatsApp, LinkedIn, Facebook, X).
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/torch-mark.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>TORCH</div>
          <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>by Intelligent B2B</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Never miss a customer again.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: "#737373",
            }}
          >
            We build it. You close the deals.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26 }}>
          {["14-day free trial", "Setup included", "WhatsApp-first"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                background: t === "14-day free trial" ? "#f97415" : "#1f1f1f",
                color: t === "14-day free trial" ? "#0a0a0a" : "#e5e5e5",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
