import { Footer as MantineFooter, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Footer() {
  const GitHubLink = <Link to="https://github.com/samhwang">Sam Huynh</Link>;

  const GitHubPages = <Link to="https://pages.github.com/">GitHub Pages</Link>;

  const ViteLink = <Link to="https://www.vitejs.dev/">Vite.</Link>;

  return (
    <MantineFooter height={60} p="md">
      <Text>
        {`© ${new Date().getFullYear()} `}
        {GitHubLink}
        {`. Hosted on `}
        {GitHubPages}
        {`. Built with `}
        {ViteLink}
      </Text>
    </MantineFooter>
  );
}
