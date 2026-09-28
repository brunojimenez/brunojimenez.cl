import { ImageResponse } from "next/og";

export const alt =
  "Bruno Jiménez — Liderazgo técnico en backend e integración de sistemas";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const stack = ["Java", "Spring Boot", "Kafka", "OpenShift", "AWS"];

export default function OpengraphImage() {
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
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#fafafa",
              color: "#09090b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              position: "relative",
            }}
          >
            B
            <div
              style={{
                position: "absolute",
                right: 10,
                bottom: 14,
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#3b82f6",
              }}
            />
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>Bruno Jiménez</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Liderazgo técnico en backend e integración
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>
            25 años haciendo que sistemas distintos se entiendan entre sí.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 22,
                  padding: "6px 14px",
                  border: "1px solid #3f3f46",
                  borderRadius: 6,
                  color: "#e4e4e7",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#3b82f6" }}>brunojimenez.cl</div>
        </div>
      </div>
    ),
    size
  );
}
