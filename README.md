# Company Web - Modern Business Website

A professional company website built with Next.js 15, TypeScript, and Tailwind CSS. This template provides a complete foundation for building a modern business website with responsive design and professional components.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive components
- **Professional Layout**: Header navigation, hero section, features, and footer
- **Multiple Pages**: Home, About, Services, Portfolio, and Contact pages
- **Interactive Components**: Mobile-responsive navigation and contact form
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Icon System**: Heroicons integration for consistent iconography
- **Fast Performance**: Optimized with Next.js Image component and best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd company_web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page with form
│   ├── portfolio/page.tsx      # Portfolio showcase
│   ├── services/page.tsx       # Services listing
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Footer component
│   ├── Hero.tsx               # Hero section
│   └── Features.tsx           # Features section
```

## 🛠 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors & Branding

The website uses Tailwind CSS with an indigo color scheme. To customize:

1. **Brand Colors**: Update the color classes in components (currently using `indigo-600`, `indigo-500`, etc.)
2. **Company Name**: Replace "Company" in `src/components/Header.tsx`
3. **Logo**: Add your logo to replace the text-based branding
4. **Content**: Update text content in each page component

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔧 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Beautiful hand-crafted SVG icons
- **Turbopack**: Fast development server and build tool

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@yourcompany.com or create an issue on GitHub.

---

**Happy coding!** 🚀
