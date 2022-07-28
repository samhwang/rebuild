import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { ReactNode } from 'react';
import Sidebar from './sidebar';

function ColorSchemeShell({ children }: { children: ReactNode }) {
  const [colorScheme, toggleColorScheme] = useToggle<ColorScheme>([
    'light',
    'dark',
  ]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      {children}
    </ColorSchemeProvider>
  );
}

describe('Sidebar', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <ColorSchemeShell>
          <Sidebar hidden={false} />
        </ColorSchemeShell>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should be hidden if passed with hidden true', () => {
    const tree = render(
      <BrowserRouter>
        <ColorSchemeShell>
          <Sidebar hidden />
        </ColorSchemeShell>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
