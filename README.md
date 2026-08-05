Synovixura Tech — Software Engineering Studio
<div align="center"> <img src="https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> <img src="https://img.shields.io/badge/Responsive-Yes-2ea44f?style=for-the-badge" alt="Responsive"> <img src="https://img.shields.io/badge/Dark%20Mode-Yes-2ea44f?style=for-the-badge" alt="Dark Mode"> <img src="https://img.shields.io/badge/Bento%20Grid-Yes-2ea44f?style=for-the-badge" alt="Bento Grid"> </div>
<p align="center"> <strong>A modern, responsive software engineering studio website with Bento Grid layout, dark mode, and interactive dashboard previews.</strong> </p><p align="center"> <a href="#-live-demo">Live Demo</a> • <a href="#-features">Features</a> • <a href="#-project-structure">Project Structure</a> • <a href="#-technologies-used">Technologies</a> • <a href="#-installation">Installation</a> • <a href="#-customization">Customization</a> </p>
🚀 Live Demo
View Live Demo → (Replace with your actual URL)

✨ Features
🎨 Design & UI
Bento Grid Layout — Modern card-based grid with varying sizes

Dark Mode Toggle — Persistent user preference saved in localStorage

Responsive Design — Optimized for desktop, tablet, and mobile devices

Smooth Animations — Scroll-triggered reveal animations

Custom Font Stack — Space Grotesk (display), Inter (body), JetBrains Mono (code)

🖥️ Interactive Elements
Live Console Readout — Real-time updating system metrics on the hero section

Mobile Navigation — Hamburger menu with smooth toggle

Sticky Header — Shadow appears on scroll for better readability

Scroll Reveal — Elements fade and rise as they enter viewport

📊 Dashboard Previews
Interactive Mockups — Two fully designed dashboard interfaces

Realistic Data — Static UI with realistic metrics and tables

Clickable Previews — Direct links to explore the interfaces

♿ Accessibility
Keyboard navigation support

ARIA labels for interactive elements

Reduced motion preferences respected

Semantic HTML structure

📁 Project Structure

synovixura-tech/
├── index.html              # Main landing page
├── dashboard1.html         # Orbit ERP dashboard preview
├── dashboard2.html         # Pulse CRM dashboard preview
├── style.css               # Complete stylesheet with dark mode
├── script.js               # Interactive functionality
├── README.md               # Project documentation
└── assets/                 # (Optional) Images, icons, etc.


🛠️ Technologies Used
Technology	Purpose
HTML5	Semantic markup structure
CSS3	Custom properties, flexbox, grid, animations
JavaScript (ES6)	DOM manipulation, event handling, localStorage
Google Fonts	Space Grotesk, Inter, JetBrains Mono
Font Awesome 6	Icons and visual elements


External Dependencies
<!-- Fonts -->
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600
<!-- Icons -->
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css


📦 Installation
Option 1: Clone the Repository

git clone https://github.com/yourusername/synovixura-tech.git
cd synovixura-tech
Option 2: Manual Setup
Download all files to your project directory:

index.html

dashboard1.html

dashboard2.html

style.css

script.js

Open index.html in your browser to view the site.

Option 3: Live Server (Recommended)
If using VS Code:


# Install Live Server extension
# Then right-click on index.html → Open with Live Server
Or using Python:


# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit http://localhost:8000
🎨 Customization
Changing Colors
Edit the CSS variables in the :root section of style.css:

:root {
  /* Primary Colors */
  --color-ink: #12151c;
  --color-amber: #e8a33d;
  --color-blue: #3e6ae1;
  --color-green: #3ecf8e;
  --color-red: #e0596b;
  
  /* Backgrounds */
  --color-paper: #f6f5f1;
  --color-paper-alt: #efede7;
  
  /* Text */
  --color-text: #20232b;
  --color-text-muted: #5b5f6b;
  
  /* Borders */
  --color-border: #e4e1d9;
}
Changing Fonts
Update the --font-* variables and Google Fonts link:

:root {
  --font-display: 'Your Display Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
  --font-mono: 'Your Monospace Font', monospace;
}
Modifying Bento Grid Layout
Adjust grid columns or item spans in style.css:

.bento-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

/* Size variants */
.bento-large { grid-column: span 2; }
.bento-wide { grid-column: span 2; }
.bento-tall { grid-row: span 2; }

Changing Content
Update the HTML in each section:

Hero — Edit .hero-title, .hero-sub, and CTA buttons

About — Update .about-text and .value-item content

Services — Modify .service-card items

Projects — Update project cards and dashboard links

Contact — Change email, phone, and location

Footer — Update social links and copyright

🌓 Dark Mode
Dark mode is implemented using:

[data-theme="dark"] CSS selectors

localStorage for persistent user preference

A toggle button with sun/moon icons

How It Works
// Toggle function
themeToggle.addEventListener('click', function () {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    this.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    this.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});
📱 Responsive Breakpoints
Breakpoint	Layout Changes
> 1024px	Full 4-column bento grid, side-by-side hero
768px - 1024px	2-column bento grid, stacked hero
< 768px	Single column, hidden sidebar on dashboards
< 480px	Stacked CTAs, hidden search text
🔧 Browser Support
Browser	Version
Chrome	60+
Firefox	60+
Safari	14+
Edge	79+
Opera	47+
iOS Safari	14+
Android Chrome	60+

📄 License
This project is proprietary and owned by Synovixura Tech.

© 2026 Synovixura Tech. All rights reserved.

Unauthorized copying, distribution, modification, or use of this code is strictly prohibited without prior written consent.

🤝 Contact
Synovixura Tech

📧 Email: synovixuratech@gmail.com

📱 Phone: +91 96641 77850

📍 Location: Rajasthan, India

🙏 Acknowledgments
Google Fonts — Beautiful typography

Font Awesome — Icon library

Space Grotesk — Display font

Inter — Body font

JetBrains Mono — Code font

📝 Changelog
v1.0.0 (2026)
Initial release

Bento Grid layout implementation

Dark mode with localStorage persistence

Two dashboard previews

Responsive design for all devices

Scroll reveal animations

Live console metrics

🚧 Roadmap
□ Add more dashboard previews
□ Implement actual backend integration
□ Add blog/insights section
□ Portfolio case studies
□ Client testimonials
□ Newsletter signup
□ Analytics integration
□ Performance optimizations
<div align="center"> <sub>Built with ❤️ by <strong>Synovixura Tech</strong></sub> <br> <sub>⚡ Built with Precision</sub> </div>
