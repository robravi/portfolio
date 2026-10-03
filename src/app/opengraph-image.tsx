import { ImageResponse } from "next/og";
import { PERSONAL } from "@/lib/constants";

export const alt = `${PERSONAL.name}, ${PERSONAL.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#070707",
          color: "#f2f2ee",
          fontFamily: "Impact, Arial Black, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#c6ff3d", textTransform: "uppercase", letterSpacing: 2 }}>
          <span>{PERSONAL.role}</span>
          <span>{PERSONAL.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 168, lineHeight: 0.86, textTransform: "uppercase", letterSpacing: -8 }}>
          <span>{PERSONAL.firstName}</span>
          <span style={{ color: "#070707", WebkitTextStroke: "3px #f2f2ee" } as React.CSSProperties}>
            {PERSONAL.middleName}
          </span>
          <span>
            {PERSONAL.lastName}
            <span style={{ color: "#c6ff3d" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#b8b8b0", borderTop: "1px solid #f2f2ee", paddingTop: 20 }}>
          <span>React · Next.js · TypeScript · Node · .NET</span>
          <span>portfolio-ramendra-ravi.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
