# 📐 Free Virtual Ruler (`freevirtualruler.com`)

[![Production Status](https://img.shields.io/badge/status-live%20in%20production-success?style=for-the-badge&logo=cloudflare&logoColor=white)](https://freevirtualruler.com)
[![Astro Version](https://img.shields.io/badge/Astro-5.x%20%2F%207.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **High-precision, sub-pixel accurate 1:1 physical screen ruler and measurement suite.**  
> Solves the screen pixel-density fragmentation problem across mobile, tablet, and desktop displays with zero dependencies and real-time physical calibration.

🔗 **Live Application:** [https://freevirtualruler.com](https://freevirtualruler.com)

---

## 🎯 The Engineering Problem

A standard browser has no native API to query the physical dimensions or actual PPI (Pixels Per Inch) of a user's monitor. Standard CSS units (`1in`, `1cm`) are fixed abstractions ($1\text{in} \equiv 96\text{px}$) and do **not** reflect actual physical measurements across varying screen resolutions, display scalings, and form factors.

**Free Virtual Ruler** overcomes this limitation through:
1. **Device Profile Matrix**: An embedded physical hardware database covering 50+ mainstream devices (iPhones, iPads, MacBooks, Galaxy, Pixel, and standard desktop monitors).
2. **Sub-Pixel Canvas Rendering**: Hardware-accelerated 2D Canvas rendering that accounts for `window.devicePixelRatio` to prevent tick distortion on high-DPI (Retina/OLED) displays.
3. **Physical-World Reference Calibration**: Interactive calibration against ISO/IEC 7810 ID-1 standards (standard credit cards: $85.60\text{mm} \times 53.98\text{mm}$), coins, or manual physical rulers.
4. **Fraction & Unit Conversion Engine**: Real-time transformation between physical millimeters, centimeters, decimal inches, and fractional imperial units down to $1/64^{\text{th}}$ inch.

---

## ✨ Key Features

### 1. 📏 Multi-Edge & Floating Canvas Rulers
- **Screen Edge Snapping**: Instantly switch ruler alignments to Top, Bottom, Left, or Right screen borders for resting physical items directly against the monitor glass.
- **360° Rotatable Floating Ruler**: Freely draggable, resizable, and rotatable ruler stick using trigonometric heading calculations (`Math.atan2`) with degree-precision stepping controls.
- **Dynamic Dual Units**: Simultaneous imperial (inches with fractional subdivisions) and metric (mm / cm) display.

### 2. 🎚️ Interactive Precision Calipers (Point A & B)
- Dual draggable measurement jaws with touch-optimized handles for mobile and desktop precision.
- Real-time floating HUD showing exact distance, decimal inches, metric conversion, and architectural fractions ($1/2", 1/4", 1/8", 1/16", 1/32", 1/64"$).
- One-click clipboard copy formatted for engineering, 3D printing, or woodworking workflows.

### 3. 🎯 Zero-Dependency Multi-Method Calibration
- **Automatic Device Matching**: Auto-inspects screen resolution, aspect ratio, and DPR to pre-calibrate against known flagship profiles.
- **Credit Card Mode**: Visual slider matching the exact width of any standard financial card ($85.60\text{mm}$).
- **Physical Reference Matcher**: Direct centimeter/millimeter adjustment slider.
- **Diagonal PPI Calculator**: Mathematical solver:
  $$\text{PPI} = \frac{\sqrt{W^2 + H^2}}{\text{Diagonal Inches}}$$

### 4. 🪙 Object Comparison Presets
- Overlay standard real-world objects directly onto the measurement field to double-check accuracy:
  - Standard Credit Card / Driver's License
  - US Quarter ($24.26\text{mm}$) / Euro 1€ ($23.25\text{mm}$)
  - Banknotes, standard keys, and ID cards

### 5. 🌐 Global Internationalization (i18n)
- Native multi-language support across **8 locales**:
  - 🇺🇸 English (`en`)
  - 🇪🇸 Spanish (`es`)
  - 🇯🇵 Japanese (`ja`)
  - 🇫🇷 French (`fr`)
  - 🇩🇪 German (`de`)
  - 🇵🇹 Portuguese (`pt`)
  - 🇰🇷 Korean (`ko`)
  - 🇮🇹 Italian (`it`)
- Static route pre-generation for optimal SEO and instant load performance.

### 6. ⚡ Performance & Ergonomics
- **Keyboard Shortcuts**: Power-user hotkeys for unit toggles, caliper resets, rotation, and edge snapping.
- **Theme Support**: Seamless Dark/Light mode toggle with persistence.
- **Zero Hydration Bloat**: Built using Astro islands, reducing JavaScript execution overhead to bare essentials.

---

## 🛠️ Architecture & Tech Stack

```text
freevirtualruler.com/
├── public/                  # Static assets (favicons, manifests, headers, robots)
├── src/
│   ├── components/
│   │   ├── RulerCanvas.astro       # Core sub-pixel canvas engine & gesture listeners
│   │   ├── CalibrationModal.astro  # Credit card, coin & custom PPI calibration dialog
│   │   ├── ObjectPresetsModal.astro# Real-world object comparison overlays
│   │   ├── ShortcutsModal.astro    # Keyboard navigation & accessibility helpers
│   │   ├── LanguagePicker.astro    # Locale selector dropdown
│   │   ├── Header.astro            # Responsive toolbar & controls
│   │   └── SeoContent.astro        # Structured semantic SEO content & guides
│   ├── layouts/
│   │   └── Layout.astro            # Core HTML shell, OpenGraph, JSON-LD schema
│   ├── i18n/
│   │   └── ui.ts                   # Type-safe translations across 8 languages
│   ├── pages/
│   │   ├── [lang]/                 # Localized static routes
│   │   ├── index.astro             # Root entrypoint
│   │   ├── about.astro             # Technical documentation & author info
│   │   ├── contact.astro           # Inquiries & feedback
│   │   ├── privacy.astro           # Privacy policy
│   │   └── terms.astro             # Terms of service
│   ├── styles/                     # Tailwind CSS v4 theme variables
│   └── utils/
│       └── calibration.ts          # Device profile registry & math helpers
├── astro.config.mjs         # Astro SSG & i18n routing config
└── wrangler.jsonc           # Cloudflare Pages deployment configuration
```

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) | Ultra-fast Static Site Generation (SSG), 0kb JS baseline by default |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine with `@theme` variables, ultra-clean design system |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type safety for hardware profiles, calibration math, and i18n tokens |
| **Canvas** | HTML5 Canvas 2D API | Hardware-accelerated sub-pixel line drawing with 60 FPS transform math |
| **Deployment** | Cloudflare Pages | Global edge network with HTTP/3, sub-100ms TTFB worldwide |

---

## 📐 Mathematical Formulation

### 1. Canvas Sub-Pixel Sharpness
To eliminate blurry tick marks on Retina/High-DPI displays:

$$\text{canvas.width} = \text{displayWidth} \times \text{window.devicePixelRatio}$$

$$\text{context.scale}(\text{devicePixelRatio}, \text{devicePixelRatio})$$

### 2. Physical Pixels Per Millimeter (PPM)
$$\text{PPM} = \frac{\text{PPI}}{25.4}$$

Tick positions for millimeter $m$:
$$X_m = m \times \text{PPM}$$

### 3. Imperial Fractional Reduction
For imperial measurement $D$ in inches:

$$n = \text{round}\left((D - \lfloor D \rfloor) \times 64\right)$$

Reduced to simplest form via greatest common divisor:

$$g = \gcd(n, 64) \implies \frac{n / g}{64 / g}$$

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 22.12.0`
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/freevirtualruler.com.git

# Navigate into project directory
cd freevirtualruler.com

# Install dependencies
npm install
```

### Local Development

```bash
# Start Astro development server
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

```bash
# Compile optimized static output
npm run build

# Preview static distribution locally
npm run preview
```

---

## ⚡ Performance & Quality Metrics

- 🟢 **Performance:** 100/100 (Google Lighthouse)
- 🟢 **Accessibility:** 100/100
- 🟢 **Best Practices:** 100/100
- 🟢 **SEO:** 100/100
- 📱 **Responsive:** Fully tested across Mobile, Tablet, Ultra-Wide, and Desktop viewports.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` | Toggle Calipers on/off |
| `F` | Toggle Floating Ruler |
| `C` | Open Calibration Modal |
| `O` | Open Real-World Object Presets |
| `U` | Toggle between Inches / Metric (cm/mm) |
| `1` / `2` / `3` / `4` | Snap ruler to Top / Left / Bottom / Right edge |
| `R` | Reset ruler rotation to 0° |
| `?` | Show Shortcuts cheat sheet |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Manan Tiwari**  
- Portfolio / Website: [freevirtualruler.com](https://freevirtualruler.com)  
- Email: [tiwarimanan077@gmail.com](mailto:tiwarimanan077@gmail.com)  
- GitHub: [@YOUR_GITHUB_HANDLE](https://github.com)
