import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
} from '@mantine/core';

interface HeaderProps {
  opened: boolean;
  toggleOpened: () => void;
}

export default function Header({ opened, toggleOpened }: HeaderProps) {
  const theme = useMantineTheme();
  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
            aria-label="BurgerButton"
          />
        </MediaQuery>
        <Text>Header Text</Text>
      </div>
    </MantineHeader>
  );
}
