import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--mat-sys-primary)',
        'primary-container': 'var(--mat-sys-primary-container)',
        secondary: 'var(--mat-sys-secondary)',
        'secondary-container': 'var(--mat-sys-secondary-container)',
        tertiary: 'var(--mat-sys-tertiary)',
        'tertiary-container': 'var(--mat-sys-tertiary-container)',
        error: 'var(--mat-sys-error)',
        surface: 'var(--mat-sys-surface)',
        'surface-variant': 'var(--mat-sys-surface-variant)',
        outline: 'var(--mat-sys-outline)',
      },
    },
  },
  plugins: [],
} satisfies Config;
