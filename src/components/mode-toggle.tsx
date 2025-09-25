import { useTheme } from './theme-provider';

// TanStack Start - Client-only rendering pattern
// This ensures the theme toggle only renders on client side
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button type="button" onClick={() => setTheme(next)}>
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
