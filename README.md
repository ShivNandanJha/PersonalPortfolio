# Graphic Designer Portfolio - Cinematic Dark

A high-end, professional portfolio website for graphic designers built with React, TypeScript, and Tailwind CSS. 

## Features

### Design System
- **Cinematic Dark Aesthetic**: Deep obsidian black background (#020617) with neon green accents (#A9FF1C)
- **Typography**:  Helvetica for headings, Inter for body text (no italics)
- **Bento-Grid Layout**: Modern information blocks with clean spacing
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

### Navigation
- **Fixed Sidebar**: Minimalist icon-based navigation with hover labels
- **Mobile Adaptive**: Converts to top bar with hamburger menu on mobile
- **SPA Navigation**: Smooth page transitions without browser reload

### Core Sections

#### 1. Hero/Home
- High-impact typography with massive headings
- Clear CTA buttons for navigation
- Stats grid showing achievements (500+ Projects, 150+ Clients, etc.)

#### 2. Projects Gallery
- Project cards with high-quality images
- Category tags and descriptions
- Click to jump to detailed Gallery View

#### 3. Gallery View (Project Detail)
- Mission/Objective section
- Tech Stack display with visual tags
- Grid of project images
- Lightbox feature for enlarged image viewing

#### 4. About Section
- Bento-Grid stats (Projects, Clients, Awards, Experience)
- Creative Toolkit with tool icons
- Experience Timeline with clickable company cards

#### 5. Experience Detail
- Company summary and role description
- Tools and technologies used
- Work samples gallery with lightbox support

#### 6. Contact
- High-contrast design with neon green accent
- Professional contact form
- Direct contact information (email, phone, location)
- Availability status

### Interactive Features
- **Lightbox Modal**: Click any image to view in high-fidelity modal
- **Deep Navigation**: Navigate between projects and experiences seamlessly
- **Hover Effects**: Smooth transitions and scale animations
- **Mobile Menu**: Responsive navigation for smaller screens

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**:  Helvetica Neue, Inter (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── GalleryView.tsx
│   ├── ExperienceDetail.tsx
│   └── Lightbox.tsx
├── data/
│   ├── projectsData.ts
│   └── experienceData.ts
├── types. ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Adding New Projects
Edit `src/data/projectsData.ts` and add new project objects:

```typescript
{
  id: 'unique-id',
  title: 'PROJECT NAME',
  category: 'Category',
  description: 'Brief description',
  coverImage: 'image-url',
  tags: ['tag1', 'tag2'],
  mission: 'Project mission statement',
  techStack:  ['Tool1', 'Tool2'],
  gallery: ['image1-url', 'image2-url']
}
```

### Adding Experience
Edit `src/data/experienceData.ts` and add new experience objects:

```typescript
{
  id: 'unique-id',
  company: 'COMPANY NAME',
  role: 'Job Title',
  period: 'Year - Year',
  summary: 'Detailed summary',
  tools: ['Tool1', 'Tool2'],
  projects: ['image1-url', 'image2-url']
}
```

### Color Customization
Update colors in `tailwind.config.js`:

```javascript
colors: {
  'obsidian': '#020617',
  'neon-green': '#A9FF1C',
}
```

## Performance Optimizations

- Lazy loading for images
- Optimized hover animations with GPU acceleration
- Minimal re-renders with proper React state management
- Production build optimization with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio! 

## Credits

- Images:  Unsplash (placeholder images - replace with your own work)
- Icons: Lucide React
- Fonts: Google Fonts (Inter), System fonts (Helvetica)