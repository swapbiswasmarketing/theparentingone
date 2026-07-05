// Generates static 1200x630 OG images (PNG) for both sites from hand-authored SVG.
// Uses @resvg/resvg-js with system fonts (Georgia / Segoe UI / Consolas on Windows).
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const raiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fbf4ea"/>
  <circle cx="1060" cy="110" r="230" fill="#f6d9c9" opacity="0.55"/>
  <circle cx="1150" cy="540" r="180" fill="#cfe0c6" opacity="0.5"/>
  <circle cx="110" cy="580" r="150" fill="#f7e2b5" opacity="0.5"/>
  <g transform="translate(80,86)">
    <circle cx="8" cy="6" r="7" fill="#e6a742"/>
    <text x="26" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="22" letter-spacing="6" font-weight="700" fill="#567150">RAISE KIND</text>
  </g>
  <text x="80" y="330" font-family="Georgia, serif" font-size="92" font-weight="700" fill="#3b2e2a">Raise <tspan fill="#d1553a" font-style="italic">kind</tspan> humans.</text>
  <rect x="82" y="350" width="452" height="10" rx="5" fill="#e6a742" opacity="0.85"/>
  <text x="80" y="432" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#6d5c53">Raising kind humans, one small moment at a time.</text>
  <text x="80" y="480" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#a2938a">Practical, tender essays - from the newborn fog to the teenage eye-roll.</text>
  <text x="80" y="576" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#d1553a">raisekind.com</text>
</svg>`;

const strictSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0b0d"/>
  <g stroke="#ffffff" stroke-opacity="0.045">
    <line x1="0" y1="157" x2="1200" y2="157"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="472" x2="1200" y2="472"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
  </g>
  <text x="80" y="92" font-family="Consolas, monospace" font-size="20" letter-spacing="3" fill="#5f5f6a">DOC &#183; FYI-2026     CLEARANCE: PUBLIC     &#9679; FILED WEEKLY</text>
  <text x="74" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="150" font-weight="700" letter-spacing="-4" fill="#ececee">STRICTLY</text>
  <rect x="80" y="332" width="250" height="118" fill="#e6ff4d"/>
  <text x="98" y="424" font-family="Segoe UI, Arial, sans-serif" font-size="118" font-weight="700" letter-spacing="-2" fill="#0b0b0d">FYI</text>
  <text x="362" y="404" font-family="Consolas, monospace" font-size="30" fill="#9a9aa4">the no-fluff go-to-market brief</text>
  <text x="362" y="448" font-family="Consolas, monospace" font-size="24" fill="#aebd45">// signal, not noise.</text>
  <text x="80" y="578" font-family="Consolas, monospace" font-size="30" font-weight="700" fill="#e6ff4d">strictly.fyi</text>
  <g transform="translate(980,528) rotate(-8)">
    <rect x="0" y="0" width="150" height="56" rx="4" fill="none" stroke="#ff4d2e" stroke-width="2.5" opacity="0.7"/>
    <text x="75" y="24" font-family="Consolas, monospace" font-size="15" letter-spacing="2" fill="#ff4d2e" text-anchor="middle" opacity="0.85">FOR YOUR</text>
    <text x="75" y="44" font-family="Consolas, monospace" font-size="15" letter-spacing="2" fill="#ff4d2e" text-anchor="middle" opacity="0.85">INFORMATION</text>
  </g>
</svg>`;

function render(svg, out) {
  const r = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: { loadSystemFonts: true },
  });
  const png = r.render().asPng();
  writeFileSync(out, png);
  console.log("wrote", out, png.length, "bytes");
}

render(raiseSvg, "C:/Website/raisekind.com/public/og.png");
render(strictSvg, "C:/Website/strictly.fyi/public/og.png");
console.log("OG images generated.");
