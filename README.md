# PaymetoPost Landing Page

A modern, responsive landing page for PaymetoPost - a platform that helps creators monetize their social media content on TikTok and Instagram.

## Features

- ✨ Modern, pixel-perfect design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Custom gradient colors (#6699FF to #FF3366)
- ⚡ Built with React + Vite for optimal performance
- 🎯 Tailwind CSS for styling
- 🔄 Animated scrolling banner
- 📊 Interactive FAQ accordion
- 🎬 Example showcase section

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd paymentopost
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
paymentopost/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with beta banner
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── GradientBanner.jsx   # Animated scrolling banner
│   │   ├── HowItWorks.jsx       # 4-step process explanation
│   │   ├── WhyChoose.jsx        # Benefits section
│   │   ├── WhatYouCanDo.jsx     # Features/tasks section
│   │   ├── PayoutsTracking.jsx  # FAQ accordion
│   │   ├── Examples.jsx         # Success stories
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles & Tailwind directives
│   └── main.jsx                 # App entry point
├── index.html                   # HTML template
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies and scripts

```

## Brand Colors

- **Primary**: `#6699FF` (Blue)
- **Secondary**: `#FF3366` (Pink/Red)
- **Gradient**: Linear gradient from primary to secondary

## Components Overview

### Navbar
- Logo and navigation links
- Login and Signup buttons
- Responsive mobile menu
- Beta banner (dismissible)

### Hero Section
- Large headline with gradient text
- TikTok profile link input
- Call-to-action button
- Descriptive subtext

### Gradient Banner
- Infinite scrolling animation
- Alternating "GET PAID" and "GET VIRAL" messages
- Diamond separators

### How It Works
- 4-step process cards
- Icons and descriptions
- Highlighted call-out section

### Why Choose
- 3 feature cards with benefits
- Gradient backgrounds
- Clear value propositions

### What You Can Do
- 4 content task types
- Platform-specific information
- Get Started CTA button

### Payouts & Tracking
- Interactive FAQ accordion
- Expandable/collapsible sections
- Detailed payout information

### Examples
- Video thumbnail placeholders
- Stats display (views and likes)
- Earnings showcase

### Footer
- Contact information
- Page links
- Social media icons
- Copyright notice

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors:

```javascript
colors: {
  primary: '#6699FF',
  secondary: '#FF3366',
}
```

### Content
Each component is self-contained and can be easily modified. Update the content in the respective component files in `src/components/`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 PaymetoPost. All rights reserved.

## Contact

- Email: paytomepost@gmail.com
- Phone: +12345678900
