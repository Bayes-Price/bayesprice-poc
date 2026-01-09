import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Point {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  connections: number[];
  floatOffsetX: number;
  floatOffsetY: number;
  floatSpeed: number;
  floatRadius: number;
  cluster?: number;
}

interface Cluster {
  x: number;
  y: number;
  radius: number;
  name: string;
  profile: {
    segment: string;
    size: string;
    keyInsight: string;
    action: string;
  };
}

const InsightsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [canvasSize, setCanvasSizeState] = useState({ width: 0, height: 0 });
  const clustersRef = useRef<Cluster[]>([]);
  const progressRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      setCanvasSizeState({ width: canvas.width, height: canvas.height });
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Define cluster centers (relative positions 0-1) with profile data
    const clusters: Cluster[] = [
      {
        x: 0.25, y: 0.35, radius: 50,
        name: "Early Adopters",
        profile: {
          segment: "Tech-savvy professionals",
          size: "23% of respondents",
          keyInsight: "High purchase intent, price insensitive",
          action: "Target with premium features"
        }
      },
      {
        x: 0.75, y: 0.45, radius: 50,
        name: "Value Seekers",
        profile: {
          segment: "Budget-conscious families",
          size: "41% of respondents",
          keyInsight: "Compare 3+ options before buying",
          action: "Emphasize value proposition"
        }
      },
      {
        x: 0.5, y: 0.7, radius: 50,
        name: "Brand Loyalists",
        profile: {
          segment: "Repeat customers",
          size: "36% of respondents",
          keyInsight: "NPS score 72, high retention",
          action: "Nurture with loyalty rewards"
        }
      },
    ];
    clustersRef.current = clusters;

    // Data points - more points now
    const points: Point[] = [];
    const numPoints = 180;
    const colors = ["#FFC000", "#FF544F", "#00B2FF", "#00B190", "#FCA6DE"];
    const clusterPointCount = 12; // points per cluster

    // Initialize scattered points
    for (let i = 0; i < numPoints; i++) {
      // Assign some points to clusters
      let cluster: number | undefined;
      let targetX: number;
      let targetY: number;

      if (i < clusters.length * clusterPointCount) {
        // This point belongs to a cluster
        cluster = Math.floor(i / clusterPointCount);
        const c = clusters[cluster];
        // Position within cluster with some spread
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * c.radius * 0.6;
        targetX = c.x * canvas.width + Math.cos(angle) * dist;
        targetY = c.y * canvas.height + Math.sin(angle) * dist;
      } else {
        // Regular scattered point
        cluster = undefined;
        targetX = canvas.width * 0.15 + Math.random() * canvas.width * 0.7;
        targetY = canvas.height * 0.15 + Math.random() * canvas.height * 0.7;
      }

      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX,
        targetY,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        connections: [],
        floatOffsetX: Math.random() * Math.PI * 2,
        floatOffsetY: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.6,
        floatRadius: 6 + Math.random() * 10,
        cluster,
      });
    }

    // Pre-calculate connections (edges) - each point connects to 2-4 nearby points
    points.forEach((point, i) => {
      const distances: { index: number; dist: number }[] = [];

      points.forEach((other, j) => {
        if (i !== j) {
          const dx = point.targetX - other.targetX;
          const dy = point.targetY - other.targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          distances.push({ index: j, dist });
        }
      });

      // Sort by distance and take 2-4 closest
      distances.sort((a, b) => a.dist - b.dist);
      const numConnections = 2 + Math.floor(Math.random() * 3);
      point.connections = distances.slice(0, numConnections).map(d => d.index);
    });

    // Animation progress (0-1)
    let progress = { value: 0 };
    let aiBeamY = { value: -100 };
    let time = 0;
    let animationFrameId: number;

    const draw = (timestamp?: number) => {
      time = (timestamp || 0) * 0.001; // Convert to seconds
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate current positions for all points
      const currentPositions = points.map(point => {
        const baseX = point.x + (point.targetX - point.x) * Math.min(1, progress.value * 1.5);
        const baseY = point.y + (point.targetY - point.y) * Math.min(1, progress.value * 1.5);

        // Add gentle floating after animation completes
        const floatAmount = Math.min(1, Math.max(0, (progress.value - 0.8) / 0.2));
        const floatX = Math.sin(time * point.floatSpeed + point.floatOffsetX) * point.floatRadius * floatAmount;
        const floatY = Math.cos(time * point.floatSpeed + point.floatOffsetY) * point.floatRadius * floatAmount;

        return {
          x: baseX + floatX,
          y: baseY + floatY,
        };
      });

      // Draw edges (connections between points)
      if (progress.value > 0.2) {
        const edgeProgress = Math.min(1, (progress.value - 0.2) / 0.5);

        points.forEach((point, i) => {
          const fromPos = currentPositions[i];

          point.connections.forEach(j => {
            const toPos = currentPositions[j];

            // Calculate edge opacity based on distance and progress
            const dx = fromPos.x - toPos.x;
            const dy = fromPos.y - toPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 200;

            if (dist < maxDist * edgeProgress) {
              const distFactor = 1 - (dist / maxDist);
              const opacity = edgeProgress * distFactor * 0.4;

              // Color the edge based on the points it connects
              ctx.strokeStyle = `rgba(51, 46, 51, ${opacity})`;
              ctx.lineWidth = 1;

              ctx.beginPath();
              ctx.moveTo(fromPos.x, fromPos.y);
              ctx.lineTo(toPos.x, toPos.y);
              ctx.stroke();
            }
          });
        });
      }

      // Draw AI processing beam
      if (progress.value > 0.15 && progress.value < 0.85) {
        const beamGradient = ctx.createLinearGradient(0, aiBeamY.value - 80, 0, aiBeamY.value + 80);
        beamGradient.addColorStop(0, "rgba(255, 192, 0, 0)");
        beamGradient.addColorStop(0.3, "rgba(255, 192, 0, 0.08)");
        beamGradient.addColorStop(0.5, "rgba(255, 192, 0, 0.15)");
        beamGradient.addColorStop(0.7, "rgba(255, 192, 0, 0.08)");
        beamGradient.addColorStop(1, "rgba(255, 192, 0, 0)");
        ctx.fillStyle = beamGradient;
        ctx.fillRect(0, aiBeamY.value - 80, canvas.width, 160);

        // Add a sharper line in the center of the beam
        ctx.strokeStyle = "rgba(255, 192, 0, 0.3)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, aiBeamY.value);
        ctx.lineTo(canvas.width, aiBeamY.value);
        ctx.stroke();
      }

      // Draw points
      points.forEach((point, index) => {
        const pos = currentPositions[index];

        // Glow effect when AI beam passes
        const beamDist = Math.abs(pos.y - aiBeamY.value);
        const isBeingProcessed = beamDist < 80 && progress.value > 0.15;

        if (isBeingProcessed) {
          // Draw glow
          const glowIntensity = 1 - (beamDist / 80);
          ctx.shadowColor = point.color;
          ctx.shadowBlur = 15 * glowIntensity;

          // Draw a larger, faded circle for the glow
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, point.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = point.color + "40";
          ctx.fill();
        }

        // Draw main point - starts at size 0 and grows
        ctx.shadowBlur = 0;
        ctx.beginPath();
        const currentSize = point.size * Math.min(1, progress.value * 2);
        if (currentSize > 0) {
          ctx.arc(pos.x, pos.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = point.color;
          ctx.fill();
        }

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      // Draw stage labels
      ctx.font = "700 11px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.letterSpacing = "0.1em";

      // Raw data label (fades out)
      if (progress.value < 0.4) {
        ctx.fillStyle = `rgba(51, 46, 51, ${(0.4 - progress.value) * 1.5})`;
        ctx.fillText("RAW DATA", canvas.width / 2, 30);
      }

      // AI Processing label
      if (progress.value > 0.25 && progress.value < 0.65) {
        const opacity = Math.min(1, (progress.value - 0.25) / 0.1) * (1 - Math.max(0, (progress.value - 0.55) / 0.1));
        ctx.fillStyle = `rgba(255, 192, 0, ${opacity})`;
        ctx.fillText("AI PROCESSING", canvas.width / 2, 30);
      }

      // Insights label
      if (progress.value > 0.55) {
        ctx.fillStyle = `rgba(0, 177, 144, ${Math.min(1, (progress.value - 0.55) / 0.15)})`;
        ctx.fillText("ACTIONABLE INSIGHTS", canvas.width / 2, 30);
      }

      ctx.textAlign = "left";

      // Draw hover indicator rings around clusters when animation is complete
      if (progress.value > 0.7) {
        const ringOpacity = Math.min(1, (progress.value - 0.7) / 0.2);
        const ringColors = ["#FFC000", "#00B2FF", "#FF544F"]; // Yellow, Blue, Red

        clusters.forEach((cluster, index) => {
          const cx = cluster.x * canvas.width;
          const cy = cluster.y * canvas.height;
          const innerRadius = cluster.radius + 10;
          const outerRadius = cluster.radius + 30;
          const color = ringColors[index];

          ctx.globalAlpha = ringOpacity;

          ctx.beginPath();
          ctx.arc(cx, cy, outerRadius, 0, Math.PI * 2);
          ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2, true); // Counter-clockwise for hole
          ctx.fillStyle = color;
          ctx.fill();

          ctx.globalAlpha = 1;
        });
      }
    };

    // Create scroll-triggered animation with pinning
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=100%", // Pin for one full viewport height of scrolling
        pin: true,
        scrub: 0.75,
        anticipatePin: 1,
      },
    });

    tl.to(progress, {
      value: 1,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        progressRef.current = progress.value;
        // Show cards one by one based on progress
        const newVisible: number[] = [];
        if (progress.value > 0.75) newVisible.push(0);
        if (progress.value > 0.85) newVisible.push(1);
        if (progress.value > 0.95) newVisible.push(2);
        setVisibleCards(newVisible);
      }
    });
    tl.to(aiBeamY, { value: canvas.height + 100, duration: 0.7, ease: "none" }, 0.15);

    // Continuous animation loop for floating
    const animate = (timestamp: number) => {
      draw(timestamp);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const clusters = clustersRef.current;
  const cardColors = ["#FFC000", "#00B2FF", "#FF544F"]; // Yellow, Blue, Red

  return (
    <section ref={containerRef} className="relative h-screen bg-gray-50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Profile cards that appear on scroll */}
      {clusters.map((cluster, index) => {
        const isVisible = visibleCards.includes(index);
        const cardX = cluster.x * canvasSize.width;
        const cardY = cluster.y * canvasSize.height + cluster.radius + 50;

        return (
          <div
            key={index}
            className={`absolute z-20 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              left: cardX,
              top: cardY,
              transform: `translateX(-50%) ${isVisible ? "translateY(0)" : "translateY(16px)"}`,
            }}
          >
            <div
              className="bg-white rounded-xl shadow-xl p-4 min-w-[220px]"
              style={{ borderWidth: 2, borderStyle: "solid", borderColor: cardColors[index] }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cardColors[index] }}
                ></div>
                <h4 className="font-bold text-charcoal">{cluster.name}</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-charcoal/50">Segment:</span>
                  <span className="ml-2 text-charcoal">{cluster.profile.segment}</span>
                </div>
                <div>
                  <span className="text-charcoal/50">Size:</span>
                  <span className="ml-2 text-charcoal font-medium">{cluster.profile.size}</span>
                </div>
                <div>
                  <span className="text-charcoal/50">Key Insight:</span>
                  <span className="ml-2 text-charcoal">{cluster.profile.keyInsight}</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-green font-medium">{cluster.profile.action}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InsightsAnimation;
