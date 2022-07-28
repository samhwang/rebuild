import { ReactNode } from 'react';
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import metadata from '../metadata';
import 'devicons/css/devicons.min.css';

export type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function Layout({ children, title, description }: LayoutProps) {
  const { siteTitle, siteDescription } = metadata;
  const defaultFallback = {
    title: siteTitle,
    description: siteDescription,
  };
  const [opened, toggleOpened] = useToggle([false, true]);

  const [colorScheme, setColorScheme] = useToggle<ColorScheme>([
    'light',
    'dark',
  ]);
  const toggleColorScheme = (value?: ColorScheme) => {
    if (value) {
      setColorScheme(value);
    }

    const nextColor = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(nextColor);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <SEO
          title={title}
          description={description}
          defaultFallback={defaultFallback}
        />
        <AppShell
          navbarOffsetBreakpoint="sm"
          navbar={<Sidebar hidden={!opened} />}
          header={<Header opened={opened} toggleOpened={toggleOpened} />}
          footer={<Footer />}
        >
          <div>{children}</div>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Layout;
