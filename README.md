 #Meibex Express Ltd — Company Website

A modern, conversion-focused logistics company website built for **Meibex Express Ltd**, a trusted logistics and supply chain partner operating across East Africa and global markets.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend framework and build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| Lucide React | Icon library |
| React Router DOM | Client-side routing |

---

## Project Structure
src/

├── components/

│   ├── layout/

│   │   ├── Navbar.jsx        # Fixed navbar with services dropdown

│   │   ├── Footer.jsx        # Footer with links, contact, social icons

│   │   └── Layout.jsx        # Layout wrapper used by all pages

│   ├── sections/

│   │   ├── Hero.jsx          # Homepage hero with stats card

│   │   ├── Services.jsx      # Homepage services preview cards

│   │   ├── Industries.jsx    # Industries grid section

│   │   ├── Coverage.jsx      # East Africa coverage section

│   │   ├── Stats.jsx         # Stats and trust badges section

│   │   └── CTA.jsx           # Call to action banner

│   └── ui/

│       └── FloatingButtons.jsx  # WhatsApp button + scroll to top

├── pages/

│   ├── Home.jsx              # Homepage

│   ├── About.jsx             # About page

│   ├── Contact.jsx           # Contact and quote request form

│   ├── Services.jsx          # Services overview page

│   ├── Industries.jsx        # Industries page

│   ├── Coverage.jsx          # Regional coverage page

│   ├── NotFound.jsx          # 404 page

│   └── services/

│       ├── Courier.jsx       # International Express Courier page

│       ├── AirFreight.jsx    # Air Freight Solutions page

│       ├── SeaFreight.jsx    # Sea Freight Solutions page

│       └── NGOLogistics.jsx  # NGO & Humanitarian Logistics page

├── App.jsx                   # Root component with all routes

├── main.jsx                  # React entry point

└── index.css                 # Tailwind CSS import

---

## Pages and Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services Overview |
| `/services/courier` | International Express Courier |
| `/services/air-freight` | Air Freight Solutions |
| `/services/sea-freight` | Sea Freight Solutions |
| `/services/ngo` | NGO & Humanitarian Logistics |
| `/industries` | Industries We Serve |
| `/coverage` | Regional Coverage |
| `/about` | About Meibex Express |
| `/contact` | Contact & Quote Request |
| `*` | 404 Not Found |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/meibex-express.git

# Navigate into the project
cd meibex-express

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Features

- Responsive design — mobile, tablet, and desktop
- Fixed navbar with services dropdown menu and active link highlighting
- Animated sections using Framer Motion with scroll-triggered transitions
- Shipment quote request form with validation, loading state, and success state
- WhatsApp floating button with pre-filled message
- Scroll-to-top button that appears after scrolling 400px
- 404 page for unmatched routes
- Consistent dark theme using Tailwind CSS gray-950 palette
- Orange accent color throughout for brand consistency

---

## Services Covered

- **International Express Courier** — Door-to-door document and parcel delivery
- **Air Freight Solutions** — Export and import air freight for all cargo types
- **Sea Freight Solutions** — FCL and LCL solutions across global trade lanes
- **NGO & Humanitarian Logistics** — Compliant logistics for development organizations

---

## Regional Coverage

Kenya · Uganda · Tanzania · Rwanda · Burundi

---

## Contact

**Meibex Express Ltd**
Westlands, Nairobi, Kenya
Mon – Fri: 8:00 AM – 5:00 PM

- Email: info@meibexexpress.com
- Phone: +254 700 000 000
- WhatsApp: +254 700 000 000

---

## License

This project is proprietary and belongs to Meibex Express Ltd.
All rights reserved.
