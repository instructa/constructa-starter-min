import { ClientOnly } from '@tanstack/react-router';
import { useTheme } from '~/components/theme-provider';

function ModeToggleInner() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button type="button" onClick={() => setTheme(next)}>
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
export function ModeToggle() {
  return (
    <ClientOnly fallback={<button type="button">☀️</button>}>
      <ModeToggleInner />
    </ClientOnly>
  );
}
