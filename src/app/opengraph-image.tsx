import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

export const runtime = "nodejs";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = readFileSync(
    join(process.cwd(), "public/images/logo/logo.png"),
  ).toString("base64");

  const ratingText = `5,0 av 5 i kundevurdering · ${testimonials.length} omtaler`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF9F6",
          padding: 70,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={430} alt="" />
        <div style={{ marginTop: 30, fontSize: 38, color: "#1C1B19" }}>
          Faglært tømrer i Tønsberg og Vestfold
        </div>
        <div style={{ marginTop: 14, fontSize: 25, color: "#9C6B4A" }}>
          {ratingText}
        </div>
      </div>
    ),
    { ...size },
  );
}
