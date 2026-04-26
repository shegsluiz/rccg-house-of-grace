/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      // ── House of Grace — Mixed Black & Green Palette ──────────────────────
      colors: {

        // Core greens
        hog: {
          "green-50":      "#F1F8F2",   // soft green tint — events bg, subtle fills
          "green-100":     "#C8E6C9",   // light green — borders, dividers
          "green-200":     "#A5D6A7",   // mid-light — card accents
          "green-400":     "#4CAF50",   // primary green — buttons, highlights
          "green-600":     "#2E7D32",   // deep green — eyebrows, strong accents
          "green-800":     "#1B3A2D",   // forest green — pillar section bg
          "green-900":     "#0F2318",   // darkest green — deep overlays
        },

        // Blacks & near-blacks
        "hog-black":        "#0D0D0D",  // hero, newsletter section bg
        "hog-black-soft":   "#111111",  // sermon section bg
        "hog-black-card":   "#1A1A1A",  // cards sitting on black bg
        "hog-black-border": "#2A2A2A",  // borders/dividers on black bg

        // Whites & creams
        "hog-white":        "#FFFFFF",  // service times section, white cards
        "hog-cream":        "#FAFAF7",  // pastor welcome section bg
        "hog-cream-deep":   "#F4F1EB",  // deeper cream — hover states on cream bg

        // Text — light backgrounds
        "hog-text-dark":    "#111111",  // primary body text on white/cream
        "hog-text-mid":     "#444444",  // secondary text on light bg
        "hog-text-muted":   "#777777",  // captions, labels on light bg

        // Text — dark backgrounds
        "hog-text-light":   "#FFFFFF",  // primary text on black/forest bg
        "hog-text-dim":     "#AAAAAA",  // secondary text on black bg
        "hog-text-ghost":   "#666666",  // muted/placeholder text on dark bg
      },

      // ── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },

      // ── Border Radius ──────────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
      },

      // ── Gradient Backgrounds ───────────────────────────────────────────────
      backgroundImage: {
        // Primary accent gradient
        "gradient-green":       "linear-gradient(to right, #4CAF50, #2E7D32)",
        "gradient-green-soft":  "linear-gradient(to right, #81C784, #4CAF50)",
        "gradient-green-text":  "linear-gradient(to right, #4CAF50, #81C784)",

        // Section backgrounds
        "gradient-hero":        "linear-gradient(160deg, #0D0D0D 0%, #111111 100%)",
        "gradient-forest":      "linear-gradient(135deg, #1B3A2D 0%, #0F2318 100%)",
        "gradient-cream":       "linear-gradient(135deg, #FAFAF7 0%, #F4F1EB 100%)",
        "gradient-green-tint":  "linear-gradient(135deg, #F1F8F2 0%, #FFFFFF 100%)",
      },

      // ── Box Shadows ────────────────────────────────────────────────────────
      boxShadow: {
        "green-sm": "0 2px 8px rgba(46, 125, 50, 0.10)",
        "green-md": "0 4px 24px rgba(46, 125, 50, 0.14)",
        "green-lg": "0 8px 40px rgba(46, 125, 50, 0.18)",
        "card":     "0 1px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
