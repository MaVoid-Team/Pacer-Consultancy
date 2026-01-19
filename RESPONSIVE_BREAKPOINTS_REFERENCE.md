# Mobile Responsive Breakpoints Reference

## Quick Breakpoint Guide

### Mobile Devices
```
xs: < 480px  (iPhone SE, older phones)
sm: 640px    (iPhone 12/13, small tablets)
md: 768px    (iPad, tablet transition)
```

### Desktop Devices  
```
lg: 1024px   (iPad Pro, large tablets)
xl: 1280px   (Desktop monitors)
2xl: 1536px  (Large monitors)
```

---

## Component Responsive Behavior

### Navbar
```
Mobile (< md)    → Hamburger menu + drawer
Desktop (md+)    → Full horizontal navigation
```

### Hero Section
```
Mobile           → Single column, centered
Text sizes:
- Phone: text-5xl
- Tablet: text-7xl  
- Desktop: text-9xl
```

### Services
```
Mobile           → 1 column grid
Tablet           → 2 column grid
Desktop (md+)    → Horizontal scroll
```

### Methodology
```
Mobile/Tablet    → Single column
Desktop (md+)    → 2 column with sticky sidebar
```

### Contact Form
```
Mobile           → Single column form
Desktop (lg+)    → 2 column layout
```

### Footer
```
Mobile           → 1 column
Tablet           → 2 columns
Desktop          → 4 columns
```

---

## Typography Scaling

All text uses responsive sizing:

```
Small phones:    14px base (clamp(14px, 2vw, 16px))
Tablets:         16px base
Desktops:        16px base (normalized)

Headings scale proportionally with screen size
```

### Examples:
```
text-sm          → 14px on mobile, 14px on desktop
text-base        → 16px on mobile, 16px on desktop
text-lg          → 18px on mobile, 18px on desktop

Responsive:
text-3xl sm:text-4xl md:text-5xl
→ 30px on mobile, 36px on tablets, 48px on desktop
```

---

## Spacing Reference

### Padding Classes
```
px-4             → 1rem horizontal padding
sm:px-6          → 1.5rem on tablets
md:px-8          → 2rem on desktop
lg:px-12         → 3rem on large desktop
```

### Gap Classes
```
gap-4 sm:gap-6 md:gap-8
→ 16px on mobile, 24px on tablet, 32px on desktop
```

### Margin Classes
```
mb-8 sm:mb-12 md:mb-16
→ 32px on mobile, 48px on tablet, 64px on desktop
```

---

## Touch-Friendly Dimensions

All interactive elements meet minimum touch target size:

```
Minimum: 44px × 44px

Button heights:
- Mobile input: h-12 (48px)
- Mobile button: h-12 sm:h-14 md:h-16
- Links: min-h-[44px]
- Form fields: min-h-[44px]

Touch spacing:
- Between elements: gap-4 minimum
- Around clickables: p-2 minimum
```

---

## Responsive Image Sizing

### Logo Sizing
```
<img className="h-8 sm:h-10 md:h-12">
→ 32px on mobile, 40px on tablet, 48px on desktop
```

### Icon Sizing  
```
<Icon className="w-8 sm:w-10 md:w-12">
→ 32px on mobile, 40px on tablet, 48px on desktop
```

---

## Safe Area Support

For notched devices (iPhone X, etc.):

```css
.mt-safe  → margin-top: max(1.5rem, env(safe-area-inset-top))
.mb-safe  → margin-bottom: max(1.5rem, env(safe-area-inset-bottom))
.ml-safe  → margin-left: max(1rem, env(safe-area-inset-left))
.mr-safe  → margin-right: max(1rem, env(safe-area-inset-right))
```

---

## Grid Responsive Patterns

### Services Cards
```
Mobile:   grid-cols-1      (1 column)
Tablet:   sm:grid-cols-2   (2 columns)
Desktop:  md:hidden        (horizontal scroll)
```

### Testimonials
```
Mobile:   grid-cols-1      (1 column)
Desktop:  md:grid-cols-2   (2 columns)
```

### Footer
```
Mobile:   grid-cols-1      (1 column)
Tablet:   sm:grid-cols-2   (2 columns)
Desktop:  md:grid-cols-4   (4 columns)
```

---

## Animation Considerations

### Scroll Indicators
```
Hidden on very small screens: hidden sm:flex
Shows on tablets and up: display: flex
```

### Marquee Text
```
Sizes down appropriately: text-5xl sm:text-6xl md:text-8xl
Spacing adjusts: mr-4 sm:mr-8 md:mr-12
```

### Transforms
```
Mobile: Reduced or disabled for performance
Desktop: Full animations enabled
```

---

## Hidden Elements Strategy

### Elements Hidden on Mobile
```
<div className="hidden sm:block">
  Desktop-only content
</div>

<div className="hidden md:flex">
  Horizontal scrollable content
</div>
```

### Elements Visible on Mobile Only
```
<div className="md:hidden">
  Mobile menu / hamburger
</div>

<div className="md:hidden">
  Mobile grid layout
</div>
```

---

## Common Patterns

### Responsive Container
```jsx
<div className="container mx-auto px-4 sm:px-6 md:px-12">
  {/* Content scales with screen size */}
</div>
```

### Responsive Heading
```jsx
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Title
</h2>
```

### Responsive Button
```jsx
<button className="px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-lg">
  Action
</button>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {/* Cards */}
</div>
```

### Responsive Two-Column
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
  <div>Left column</div>
  <div>Right column</div>
</div>
```

---

## Performance Tips

1. **Use mobile-first approach**: Base styles for mobile, enhance with media queries
2. **Limit animations on mobile**: Use `prefers-reduced-motion`
3. **Responsive images**: Use appropriate image sizes for each breakpoint
4. **Lazy load**: Load images only when needed
5. **Minimize main thread**: Reduce JavaScript on mobile
6. **Test on real devices**: DevTools can be misleading

---

## Testing Checklist

- [ ] Test all layouts at each breakpoint
- [ ] Test touch interactions (no hover-only actions)
- [ ] Test with zoom at 150% and 200%
- [ ] Test landscape orientation
- [ ] Test with slow 3G network
- [ ] Test with screen reader
- [ ] Verify no horizontal scrolling
- [ ] Check button/link sizes (minimum 44px)
- [ ] Verify text readability
- [ ] Check image scaling

---

## Resources

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/
- MDN Responsive Design: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Web Vitals: https://web.dev/vitals/

---

**Last Updated**: January 19, 2025
**Version**: 1.0
**Status**: Production Ready
