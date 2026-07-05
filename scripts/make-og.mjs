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
  <rect width="1200" height="630" fill="#f7f5f0"/>
  <circle cx="1060" cy="130" r="250" fill="#3a43e6" opacity="0.06"/>
  <circle cx="1150" cy="560" r="170" fill="#ef9d1f" opacity="0.07"/>
  <text x="1040" y="472" font-family="Georgia, serif" font-size="360" fill="#3a43e6" opacity="0.9" text-anchor="middle">?</text>
  <text x="80" y="108" font-family="Consolas, monospace" font-size="20" letter-spacing="4" fill="#3a43e6">THE FIELD GUIDE TO THE FASCINATING</text>
  <text x="74" y="292" font-family="Georgia, serif" font-size="132" font-weight="700" fill="#191a1f">Strictly</text>
  <rect x="80" y="330" width="212" height="98" fill="#ffe86b"/>
  <text x="98" y="406" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#191a1f">FYI</text>
  <text x="322" y="384" font-family="Georgia, serif" font-style="italic" font-size="33" fill="#55565f">interesting things,</text>
  <text x="322" y="424" font-family="Georgia, serif" font-style="italic" font-size="33" fill="#55565f">strictly for your information.</text>
  <text x="80" y="576" font-family="Consolas, monospace" font-size="27" font-weight="700" fill="#191a1f">strictly.fyi</text>
  <text x="300" y="576" font-family="Consolas, monospace" font-size="19" fill="#8a8b95">science &#183; history &#183; tech &#183; culture &#183; everyday</text>
</svg>`;

function render(svg, out) {
  const r = new Resvg(svg, { fitTo: { mode: "width", value: 1200 }, font: { loadSystemFonts: true } });
  writeFileSync(out, r.render().asPng());
  console.log("wrote", out);
}

render(raiseSvg, "C:/Website/raisekind.com/public/og.png");
render(strictSvg, "C:/Website/strictly.fyi/public/og.png");
console.log("OG images generated.");
