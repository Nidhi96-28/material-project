# Angular Material + Tailwind CSS Demo Project

## ✅ Project Successfully Created

Your Angular demo project with Material Design and Tailwind CSS is now fully configured and running!

## 🚀 Getting Started

### Access the Application
- **URL**: [http://localhost:4300](http://localhost:4300)
- **Command to Start**: `ng serve --port 4300`

## 📦 What's Included

### 1. **Angular Material Components**
- Buttons (Raised, Flat, Stroked, Icon)
- Cards with headers and content
- Tabs for navigation
- Slide toggles
- Progress bars
- Lists with dividers
- Material Icons
- Chips and badges

### 2. **Tailwind CSS Utilities**
- Responsive grid layouts (Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols)
- Button variants (Solid, Outlined, Text, Pill buttons)
- Flexbox and alignment utilities
- Typography scales
- Color gradients
- Shadow and border utilities
- Spacing and gap utilities

### 3. **Integrated Features**
- Material theme colors integrated with Tailwind config
- Material Design 3 system variables
- Combined Material + Tailwind components showcase
- Interactive demo with state management using Angular signals
- Responsive design
- Professional footer with navigation links

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── combined-demo.component.ts        # Main demo component
│   │   ├── material-demo.component.ts        # Material components showcase
│   │   └── tailwind-demo.component.ts        # Tailwind utilities showcase
│   ├── app.ts                                 # Root component
│   ├── app.html                               # Root template
│   ├── app.config.ts                          # Application providers
│   └── app.routes.ts                          # Routing configuration
├── material-theme.scss                        # Material 3 theme configuration
├── styles.scss                                # Global styles with Tailwind import
└── index.html                                 # HTML entry point

Configuration Files:
├── angular.json                               # Angular project configuration
├── tailwind.config.ts                         # Tailwind CSS configuration
├── .postcssrc.json                            # PostCSS configuration
└── tsconfig.json                              # TypeScript configuration
```

## 🎨 Key Features

### Material Design Components Used:
- `MatButtonModule` - Styled buttons
- `MatCardModule` - Card containers
- `MatTabsModule` - Tab navigation
- `MatIconModule` - Material icons
- `MatSlideToggleModule` - Toggle switches
- `MatProgressBarModule` - Progress indicators
- `MatListModule` - List components
- `MatDividerModule` - Visual separators
- `MatChipsModule` - Chip components
- `MatBadgeModule` - Badge overlays

### Tailwind CSS Features:
- Responsive design with `md:` and `lg:` breakpoints
- Color palette with gradients
- Flexbox and grid utilities
- Typography scale (text-sm, text-base, text-lg, etc.)
- Transition and hover effects
- Shadow effects (`shadow-md`, `shadow-lg`)
- Border radius utilities
- Spacing system (p-, m-, gap-, etc.)

## 💻 Configuration Details

### Material Theme Configuration
**File**: `src/material-theme.scss`
```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,
      tertiary: mat.$blue-palette,
    ),
    typography: Roboto,
    density: 0,
  ));
}
```

### Tailwind Config Integration
**File**: `tailwind.config.ts`
- Integration of Material CSS variables with Tailwind
- Extended color palette using Material system colors
- Custom color names: `primary`, `primary-container`, `secondary`, `error`, `surface`, etc.

### PostCSS Configuration
**File**: `.postcssrc.json`
```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

## 🔧 Available Scripts

```bash
# Start development server
npm run start

# Build for production
npm run build

# Run tests
npm run test

# Watch mode for development
npm run watch
```

## 📱 Responsive Design

The application is fully responsive:
- **Mobile**: Single column layouts, stacked elements
- **Tablet**: 2-column grids
- **Desktop**: 3-column grids and full layouts

## 🎯 Demo Sections

### Tab 1: Material Components
- Showcase of Angular Material buttons, cards, lists, and form controls
- Demonstrates Material Design 3 components
- Interactive elements with Material styling

### Tab 2: Tailwind Utilities
- Responsive grid cards
- Button variants
- Typography examples
- Flexbox layouts
- Pure Tailwind CSS demonstrations

### Tab 3: Combined Examples
- Material components styled with Tailwind utilities
- Material Design 3 colors integrated with Tailwind
- Feature showcase cards
- Integration best practices

## 🔗 Integration Benefits

### Why Use Both?
1. **Component Framework** (Material): Pre-built, tested components
2. **Rapid Styling** (Tailwind): Quick utility-based styling
3. **Consistency**: Material design tokens + Tailwind utilities
4. **Flexibility**: Mix and match components and utilities
5. **Performance**: Optimized bundle with tree-shaking

## 🌐 Browser Support

- Modern browsers supporting ES2020+
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material Documentation](https://material.angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Angular Material Theming Guide](https://material.angular.dev/guide/theming)

## ✨ Next Steps

1. **Customize Colors**: Edit `src/material-theme.scss` to change Material theme colors
2. **Add More Components**: Use the demo as a template to build your own components
3. **Deploy**: Build with `npm run build` and deploy to your hosting platform
4. **Extend Tailwind**: Add custom utilities in `tailwind.config.ts`

## 🐛 Troubleshooting

### Port Already in Use
If port 4300 is in use, you can specify a different port:
```bash
ng serve --port 4301
```

### Module Not Found Errors
Ensure all dependencies are installed:
```bash
npm install
```

### SCSS Compilation Issues
The project uses Dart Sass with Angular 21. If you encounter issues, ensure your Node version is compatible:
```bash
node --version  # Should be v20+
```

---

**Last Updated**: May 3, 2026
**Angular Version**: 21
**Tailwind CSS Version**: 4.1+
**Node Version**: 24+
