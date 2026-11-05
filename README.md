# Mitesh Ladva • Executive Digital Business Card & Portfolio
**Founder & Managing Partner — Ladva Enterprises**

Official personal portfolio, executive branding platform, and digital business card web application for **Mitesh Ladva**.

---

## 🏛️ Overview
This platform delivers a high-impact personal brand experience and digital networking utility, engineered with:
- **1-Click Save Contact (.vcf)**: Generates standard RFC 2426 vCard 3.0 file that adds Mitesh Ladva directly into iOS Contacts / Android Phonebook.
- **1-Click Download Digital Card (PNG)**: Renders a crisp 1200×700px executive landscape visiting card on HTML5 Canvas.
- **Interactive 3D NFC Business Card**: Front and back interactive flip card with NFC symbol, Mitesh's photo, and dynamic scannable QR code.
- **Dynamic QR Code Engine**: High-resolution QR code generator linking directly to Mitesh's digital profile with instant download capability.
- **WhatsApp Sharing**: Formatted 1-click WhatsApp profile sharing and direct mobile number forwarding.
- **Mobile Action Bar**: Fixed bottom navigation on mobile devices with quick access to Call, WhatsApp, and Save Contact.
- **Consulting Practices & Scope**: Full breakdown of 6 practice areas from Ladva Enterprises with interactive scope exploration.
- **Consulting Methodology**: 4-step execution framework (`01 Discovery` → `02 Strategy Design` → `03 Execution` → `04 Review & Scale`).
- **Industries & Domain Expertise**: Sector-specific advisory across 8 core verticals.
- **Demonstrated Impact**: Verified metrics and landmark client engagements (E-Trav, AVN Ayurveda, BITCOL, ISO Audits).
- **Client Logo Wall**: Showcasing trusted client partners (AVN Ayurveda, E-Trav, Kompress, Marvel, Polyglove, Urban Gourmet).
- **Strategic Consultation Hub**: Working consultation inquiry form with strict confidentiality assurance and 4-hour response SLA.

---

## 🎨 Color Palette & Aesthetic
- **Midnight Navy**: `#101B2D` (Primary Background)
- **Deep Navy**: `#172943` (Elevated Surfaces & Cards)
- **Champagne Gold**: `#C9A96E` / `#DFCEAA` (Metallic Accent & Highlights)
- **Warm Ivory**: `#F7F4ED` (Content Text & Accents)
- **Muted Grey**: `#9AA5B5` (Labels & Subtitles)

---

## 🚀 Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **QR Code**: `qrcode`
- **Build Tool**: Vite 6

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
├── public/
│   ├── assets/
│   │   └── clients/          # Client partner logos
│   ├── favicon.svg           # Custom monogram favicon
│   └── profile.png           # High-resolution executive portrait
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DigitalCardSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── MobileActionBar.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── Toast.tsx
│   ├── config/
│   │   └── miteshData.ts     # Centralized configuration
│   ├── utils/
│   │   ├── cardCanvasGenerator.ts
│   │   ├── qrGenerator.ts
│   │   ├── vcfGenerator.ts
│   │   └── whatsappShare.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License
© 2026 Mitesh Ladva. Founder & Managing Partner, Ladva Enterprises. All Rights Reserved.
