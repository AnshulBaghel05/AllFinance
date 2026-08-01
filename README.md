# 📈 AllFinance — Next-Gen Wealth & Financial Advisory Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**AllFinance** is an immersive, 3D-enhanced financial advisory web application crafted for modern wealth management firms, advisory agencies, and fintech solutions. Built with React 19, TypeScript, and Tailwind CSS v4, AllFinance delivers high-converting client onboarding, interactive financial calculators, and fluid spatial animations.

---

## ✨ Key Features

- **🎨 Immersive 3D Spatial Aesthetics:**
  - Glassmorphic card layers, dynamic tilt effects, floating spatial elements, and smooth parallax depth transforms powered by `motion/react`.
- **🚀 Interactive Client Onboarding (`/get-started`):**
  - A multi-step onboarding wizard allowing prospective clients to specify financial goals, risk appetite, and portfolio size with real-time state validation.
- **🧮 Interactive Financial Calculators (`/calculators`):**
  - Instant SIP (Systematic Investment Plan) and goal-based wealth projection engine with visual sliders and real-time mathematical trajectory charting.
- **💼 Comprehensive Services & Transparent Pricing:**
  - Dedicated pages for Investment Planning, Tax Consulting, Wealth Management, Insurance Advisory, Retirement Planning, and Loan Consulting.
  - Side-by-side transparent tier comparison (Essential, Premium, Elite) with direct onboarding links.
- **📰 Market Insights & Educational Hub (`/blog`):**
  - Filterable blog and financial guide hub with reading time estimates, category filters, and structured content layouts.
- **🖼️ Zero-Downtime Image Resilience (`ImageWithFallback`):**
  - Custom React image wrapper with skeleton pulse placeholders, automated cross-domain fallback loading, and strict `referrerPolicy` safeguards.
- **📱 Responsive & Accessible Design:**
  - Fully fluid layouts built desktop-first and mobile-optimized with WCAG AA compliant color contrast and high touch-target targets.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build Tool & Server** | [Vite 6.2](https://vitejs.dev/) |
| **Styling & Design System**| [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations & Spatial Motion** | [Motion](https://motion.dev/) (Framer Motion API) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Class Merging** | `clsx` + `tailwind-merge` |

---

## 📁 Project Structure

```text
allfinance/
├── public/                  # Static assets and favicon configuration
├── src/
│   ├── components/          # Reusable UI & animation primitives
│   │   ├── 3DComponents.tsx  # Card3D, ParallaxContainer & FloatingElement
│   │   ├── ImageWithFallback.tsx # Resilient image component with skeletons
│   │   └── PageTransition.tsx    # AnimatePresence page route wrapper
│   ├── pages/               # Application view routes
│   │   ├── Home.tsx          # Hero, metrics, service preview & CTA
│   │   ├── About.tsx         # Mission, leadership team & story
│   │   ├── Services.tsx      # In-depth service breakdowns & features
│   │   ├── Calculators.tsx   # Interactive SIP & Wealth Calculators
│   │   ├── Pricing.tsx       # Subscription plans & comparison matrix
│   │   ├── Blog.tsx          # Market insights & financial articles
│   │   ├── FAQ.tsx           # Accordion FAQ & advisory support
│   │   ├── Contact.tsx       # Office locations & inquiry form
│   │   ├── GetStarted.tsx    # Multi-step financial goal wizard
│   │   └── NotFound.tsx      # Custom 404 page with return route
│   ├── lib/
│   │   └── utils.ts          # Tailwind class merger utility (`cn`)
│   ├── App.tsx              # Main layout, Navbar, Footer & Router config
│   ├── main.tsx             # Application DOM root mount
│   └── index.css            # Global Tailwind CSS imports & theme rules
├── index.html               # Entry point with SEO metadata
├── metadata.json            # Application capabilities descriptor
├── package.json             # NPM dependencies & scripts configuration
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite bundler setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `bun` / `pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/allfinance.git
   cd allfinance
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to access the application.

---

## ⚙️ Available Scripts

In the project root directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the local dev server on port `3000` with HMR disabled for stability. |
| `npm run build` | Bundles the application for production deployment into the `dist/` directory. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs the TypeScript compiler (`tsc --noEmit`) to verify strict type safety. |
| `npm run clean` | Removes the `dist/` build directory. |

---

## 🎨 Design System & Visual Palette

The visual system combines clean, high-contrast light aesthetics with rich brand accents:

- **Primary Brand Color:** `#0284c7` (Brand Sky / Blue 600)
- **Neutral Surface:** `#f8fafc` (Slate 50) & `#ffffff` (White)
- **Deep Slate Canvas:** `#0f172a` (Slate 900)
- **Accent Teal:** `#14b8a6` (Teal 500)
- **Accent Gold:** `#f59e0b` (Amber 500)
- **Typography:** Display headings set in **Outfit / Plus Jakarta Sans**, body text in clean **Inter**.

---

## 🔒 Security & Privacy

All Finance is engineered with security-first practices:
- External images utilize `referrerPolicy="no-referrer"` to protect client headers.
- Inputs are scrubbed client-side and optimized for API route proxying.
- Full compliance with WCAG AA standards for accessibility.

---

## 🤝 Contributing

Contributions are always welcome! If you'd like to improve AllFinance:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Crafted with ❤️ for modern financial leadership.
</p>
