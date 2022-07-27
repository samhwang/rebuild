import { Navbar, Text } from '@mantine/core';

interface SidebarProps {
  hidden: boolean;
}

export default function Sidebar({ hidden }: SidebarProps) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Sidebar Text</Text>
    </Navbar>
  );
}
