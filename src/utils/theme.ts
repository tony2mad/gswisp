export type Theme = 'light' | 'dark';

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('theme') as Theme | null;
}