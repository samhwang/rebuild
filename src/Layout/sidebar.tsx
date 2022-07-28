import {
  ActionIcon,
  Box,
  Group,
  Navbar,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { MouseEventHandler } from 'react';

interface SidebarProps {
  hidden: boolean;
}

export default function Sidebar({ hidden }: SidebarProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const onClick: MouseEventHandler = () => toggleColorScheme();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>
        <Box>
          <Group position="apart">
            <ActionIcon variant="default" onClick={onClick} size={30}>
              {colorScheme === 'dark' ? (
                <IconSun size={16} />
              ) : (
                <IconMoonStars size={16} />
              )}
            </ActionIcon>
          </Group>
        </Box>
      </Navbar.Section>
      <Text>Sidebar Text</Text>
    </Navbar>
  );
}
