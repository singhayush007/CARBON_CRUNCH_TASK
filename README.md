# Carbon Crunch - Frontend Intern Shortlisting Task

## Project Overview

This project is a frontend implementation of the **Carbon Crunch** web page design provided via Figma. The goal was to translate the Figma design into a **pixel-perfect, responsive web page** and implement an **Artistic Parallax Slider animation** as demonstrated in the reference video.


![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) 
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) 
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=gsap&logoColor=white) 
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white) 
![License](https://img.shields.io/badge/License-MIT-green)


## Figma Design

The original design was provided here:
[Figma File](https://www.figma.com/design/4C2Bk5UWC4YU9hsMv2LxBa/Task-File---5?node-id=0-1&p=f)

## Live Demo

A live preview of the project is hosted at:
[Live Demo Link](https://carbon-crunch-task-ten.vercel.app/)

## Technologies Used

* **Frontend Framework:** React.js
* **Styling:** Tailwind CSS
* **Animations:** GSAP (GreenSock Animation Platform) for smooth parallax slider transitions
* **Other Tools:**

  * Responsive design using CSS Grid & Flexbox
  * Webpack / Create React App for project setup

> Note: You can replace the tech stack here if you used Next.js, Vue.js, Angular, or Vanilla JS.

## Features

1. **Pixel-perfect Figma Design Recreation**

   * Fully responsive design across desktop, tablet, and mobile devices.
   * Accurate typography, colors, spacing, and layout as per the Figma file.

2. **Artistic Parallax Slider Animation**

   * Smooth, interactive parallax movement.
   * Slider supports multiple images with layered depth effect for an immersive experience.
   * Optimized performance for smooth transitions.

3. **Bonus Features**

   * Subtle micro-interactions on hover and scroll for enhanced UX.
   * Lazy loading of slider images for faster page load and performance optimization.
   * Accessible design considerations (ARIA labels, semantic HTML).

## Project Structure

```
carbon-crunch/
│
├─ public/               # Static assets (images, icons, favicon)
│  └─ favicon.ico
├─ src/
│  ├─ app/               # Main application folder
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  └─ favicon.ico
│  ├─ components/        # Reusable React components
│  │  ├─ FeatureCard.tsx
│  │  ├─ FeatureGrid.tsx
│  │  ├─ Header.tsx
│  │  ├─ ParallaxSection.tsx
│  │  └─ StatCard.tsx
├─ package.json
└─ README.md
```

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/carbon-crunch.git
cd carbon-crunch
```

2. Install dependencies:

```bash
npm install
```

3. Run the project locally:

```bash
npm start
```

4. Visit [http://localhost:3000](http://localhost:3000) to view the page.
5. Visit the live demo on Vercel: https://carbon-crunch-task-ten.vercel.app/

Visit the live demo on Vercel: https://carbon-crunch-task-ten.vercel.app/

## Assets & Credits

All external assets used in the project are included in the repository:

* Images: `/public/images/`
* Icons: `/public/icons/`
* Fonts: Google Fonts (linked in `index.html`)

> Ensure proper attribution for any external assets.

## Author

**Ayush Singh** – Frontend Developer Intern Applicant

* GitHub: [YOUR_GITHUB_PROFILE](https://github.com/singhayush007)
* Email: ayushsingh24958@gmail.com

## Notes

* This project demonstrates the ability to:

  * Recreate Figma designs faithfully
  * Implement advanced animations and parallax effects
  * Build a responsive and interactive web page
* Originality of code and design implementation is ensured.
