import { useEffect, useRef } from "react";

const THRESHOLD = 240;
const STRENGTH = 14;

export function useMouseRepel(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      refs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < THRESHOLD && dist > 0) {
          const force = 1 - dist / THRESHOLD;
          const tx = -(dx / dist) * force * STRENGTH;
          const ty = -(dy / dist) * force * STRENGTH;
          el.style.transform = `translate(${tx}px, ${ty}px)`;
        } else {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return refs;
}
