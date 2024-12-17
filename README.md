# Techno Fevers Website

A modern, optimized, and SEO-friendly website built with HTML, SCSS, and vanilla JavaScript. Using parcel as a bundler, it's assets are fully optimized for production. It also takes into account, the use of features like prefetching, using Quicklinks by chrome to automatically fetch the data in the links of the user's viewport.

All the sizing was done in rem using the SASS function, and the layouts are made available using mixins. The semantic tags, and the OG meta-tags help keep the site SEO Friendly as possible.

## Performance Optimizations

### 1. CSS Optimizations
- SCSS architecture using the 7-1 pattern for better maintainability
- CSS modularization with BEM methodology
- Responsive typography using clamp() for fluid font scaling
- CSS custom properties for theme consistency
- Optimized media queries using mixins
- Minimal CSS bundle size through proper code organization

### 2. JavaScript Optimizations
- Modular JavaScript with ES6 modules
- Event delegation for better performance
- Lazy loading of team members and testimonials
- Efficient carousel implementation with DOM reuse
- Asynchronous component rendering

### 3. Asset Optimizations
- SVG icons for crisp rendering and small file size
- Responsive images with appropriate sizing
- Automatic asset optimization using Parcel
- Proper image alt texts for accessibility
- Asset preloading for critical resources

### 4. Performance Features
- Implemented quicklink for faster subsequent page loads
- Smooth scrolling behavior
- Mobile-first responsive design
- CSS animations with hardware acceleration
- Minimal DOM manipulations
- Efficient event handling

## SEO Friendly Features

### 1. Meta Tags
- Proper meta description
- Relevant keywords meta tag
- Viewport configuration for mobile devices
- Open Graph tags for social media sharing
- Twitter card meta tags

### 2. Semantic HTML
- Semantic HTML5 elements (header, nav, main, section, footer)
- Proper heading hierarchy
- ARIA labels for accessibility
- Meaningful link text
- Descriptive alt text for images

### 3. Technical SEO
- Clean URL structure
- Mobile-friendly design
- Fast loading times through optimizations
- Structured data implementation
- Proper document outline

### 4. Content Organization
- Clear content hierarchy
- Scannable text with proper spacing
- Relevant headings and subheadings
- Call-to-action buttons
- Organized navigation structure

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement approach
- Fallbacks for older browsers

## Development
1. Clone the repository
2. Install dependencies: ```yarn install```

## Scripts
### To start development server
```
yarn start
```
### To get a production build
```
yarn build
```
