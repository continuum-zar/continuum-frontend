export default function ProjectStatus() {
  // Height of the whole status area (from Figma)
  const CONTAINER_H = 191;

  // Size of the semi-circle
  const ARC_W = 350.3015441894531;
  const ARC_H = 175.15077209472656;

  // Thickness of the arc
  const STROKE = 17;
  const ARC_COLOR = "#E4EAEC";

 
  const cx = ARC_W / 2;
  const cy = ARC_H;
  const r = ARC_W / 2 - STROKE / 2;

  // Start and end points of the arc
  const startX = cx - r;
  const startY = cy - STROKE / 2;
  const endX = cx + r;
  const endY = cy;

  
  const arcPath = `M ${startX} ${cy} A ${r} ${r} 0 0 1 ${endX} ${endY}`;

  // Static value 0
  const value = 0;

  // Dot settings
  const DOT_R = STROKE / 2; // same “thickness” as the arc
  const DOT_FILL = "#0B191F";

  return (
    <div
      style={{
        width: "100%",
        height: CONTAINER_H,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
   
      <svg
        width={ARC_W}
        height={ARC_H}
        viewBox={`0 0 ${ARC_W} ${ARC_H}`}
        role="img"
        aria-label="Project status indicator"
      >
     
        <path
          d={arcPath}
          fill="none"
          stroke={ARC_COLOR}
          strokeWidth={STROKE}
          strokeLinecap="round"
        />

       
        <circle cx={startX} cy={startY} r={DOT_R} fill={DOT_FILL} />
      </svg>

      
      <div
        style={{
          position: "absolute",
          top: 49,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily:
            "Satoshi, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          fontWeight: 400,
          fontSize: 70.7,
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#0B191F",
        }}
      >
        {value}
      </div>

      {/* Text under the number */}
      <div
        style={{
          position: "absolute",
          top: 159,
          left: "50%",
          transform: "translateX(-50%)",
          width: 172,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "Satoshi, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          fontWeight: 500,
          fontSize: 24,
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#727D83",
          whiteSpace: "nowrap",
        }}
      >
        Project on track
      </div>
    </div>
  );
}
